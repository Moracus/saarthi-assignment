# Emotion Reflection Tool

A simple **Vite React + FastAPI** app where users can submit a reflection text (e.g., "I feel nervous about my first job interview"), receive a mock emotion analysis, and view the results cleanly.

---

## Features
✅ Mobile-first clean UI using Vite React TS + TailwindCSS  
✅ FastAPI backend for mock emotion analysis  
✅ Health check endpoint for deployment readiness  
✅ Graceful error handling and clear structure for learning and interviews

---

## Project Structure
```
emotion-reflection-tool/
├── frontend/       # Vite React TypeScript app
└── backend/        # FastAPI app
    ├── app/
    │   ├── main.py
    │   ├── api/routes.py
    │   └── models/schemas.py
    └── requirements.txt
```

---

## Setup Instructions

### 1️⃣ Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install fastapi uvicorn
pip freeze > requirements.txt
uvicorn app.main:app --reload
```
- The FastAPI server will be available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)
- Test health: [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health)
- API docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### 2️⃣ Frontend (Vite React)
```bash
cd frontend
npm install
npm run dev
```
- The frontend will be available at: [http://localhost:5173](http://localhost:5173)

---

## API Endpoints
### POST `/analyze`
- **Request:** `{ "text": "I feel nervous about my exam." }`
- **Response:** `{ "emotion": "Anxious", "confidence": 0.85 }`

### GET `/health`
- **Response:** `{ "status": "ok" }`

---


