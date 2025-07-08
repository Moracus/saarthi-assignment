from fastapi import APIRouter
from app.models.schemas import TextInput, EmotionResponse
from random import uniform

router = APIRouter()

@router.post("/analyze", response_model=EmotionResponse)
async def analyze_text(data: TextInput):
    lower_text = data.text.lower()
    if "nervous" in lower_text or "worried" in lower_text:
        emotion = "Anxious"
    else:
        emotion = "Calm"
    confidence = round(uniform(0.7, 0.95), 2)
    return {"emotion": emotion, "confidence": confidence}

@router.get("/health")
async def health_check():
    return {"status": "ok"}
