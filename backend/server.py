from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Models
class WaitlistEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    company: Optional[str] = None
    erp_system: Optional[str] = None
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class WaitlistCreate(BaseModel):
    email: str
    company: Optional[str] = None
    erp_system: Optional[str] = None

class ContactEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    message: str
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class ContactCreate(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    message: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "RepNet AI Copilot API"}

@api_router.post("/waitlist", response_model=WaitlistEntry)
async def join_waitlist(input: WaitlistCreate):
    existing = await db.waitlist.find_one({"email": input.email}, {"_id": 0})
    if existing:
        return WaitlistEntry(**existing)
    entry = WaitlistEntry(**input.model_dump())
    doc = entry.model_dump()
    await db.waitlist.insert_one(doc)
    return entry

@api_router.post("/contact", response_model=ContactEntry)
async def submit_contact(input: ContactCreate):
    entry = ContactEntry(**input.model_dump())
    doc = entry.model_dump()
    await db.contact.insert_one(doc)
    return entry

@api_router.get("/waitlist/count")
async def waitlist_count():
    count = await db.waitlist.count_documents({})
    return {"count": count}

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
