#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class RepNetAPITester:
    def __init__(self, base_url="https://nl-to-report.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details="", response_data=None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name}: PASSED - {details}")
        else:
            print(f"❌ {name}: FAILED - {details}")
        
        self.test_results.append({
            "name": name,
            "status": "PASS" if success else "FAIL",
            "details": details,
            "response_data": response_data
        })
        return success

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}" if endpoint else f"{self.base_url}/api/"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                return self.log_test(name, False, f"Unsupported method: {method}")

            success = response.status_code == expected_status
            response_json = None
            
            try:
                response_json = response.json()
            except:
                response_json = {"raw_response": response.text}

            if success:
                return self.log_test(name, True, f"Status: {response.status_code}", response_json)
            else:
                return self.log_test(name, False, f"Expected {expected_status}, got {response.status_code}", response_json)

        except requests.exceptions.RequestException as e:
            return self.log_test(name, False, f"Request error: {str(e)}")
        except Exception as e:
            return self.log_test(name, False, f"Unexpected error: {str(e)}")

    def test_root_endpoint(self):
        """Test GET /api/"""
        return self.run_test("Root API", "GET", "", 200)

    def test_waitlist_signup(self):
        """Test POST /api/waitlist"""
        test_email = f"test_{datetime.now().strftime('%H%M%S')}@example.com"
        data = {
            "email": test_email,
            "company": "Test Company",
            "erp_system": "SYSPRO"
        }
        return self.run_test("Waitlist Signup", "POST", "waitlist", 200, data)

    def test_waitlist_duplicate(self):
        """Test duplicate email handling"""
        test_email = f"duplicate_{datetime.now().strftime('%H%M%S')}@example.com"
        data = {
            "email": test_email,
            "company": "Test Company"
        }
        
        # First signup
        first_result = self.run_test("Waitlist First Signup", "POST", "waitlist", 200, data)
        if not first_result:
            return False
            
        # Duplicate signup
        return self.run_test("Waitlist Duplicate Handling", "POST", "waitlist", 200, data)

    def test_waitlist_count(self):
        """Test GET /api/waitlist/count"""
        return self.run_test("Waitlist Count", "GET", "waitlist/count", 200)

    def test_contact_form(self):
        """Test POST /api/contact"""
        data = {
            "name": "Test User",
            "email": f"contact_{datetime.now().strftime('%H%M%S')}@example.com",
            "company": "Test Company",
            "message": "This is a test message for RepNet AI Copilot"
        }
        return self.run_test("Contact Form", "POST", "contact", 200, data)

    def test_invalid_endpoints(self):
        """Test invalid endpoints return appropriate errors"""
        return self.run_test("Invalid Endpoint", "GET", "nonexistent", 404)

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting RepNet Backend API Tests")
        print(f"📍 Testing against: {self.base_url}")
        print("=" * 60)

        # Core API tests
        self.test_root_endpoint()
        self.test_waitlist_signup()
        self.test_waitlist_duplicate()
        self.test_waitlist_count()
        self.test_contact_form()
        self.test_invalid_endpoints()

        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All backend tests PASSED!")
            return True
        else:
            print("⚠️  Some backend tests FAILED!")
            failed_tests = [t for t in self.test_results if t["status"] == "FAIL"]
            for test in failed_tests:
                print(f"   - {test['name']}: {test['details']}")
            return False

def main():
    tester = RepNetAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())