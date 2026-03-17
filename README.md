# Visiting Places

A travel destinations web app built with React JS (frontend) and Python FastAPI (backend).

## How to Run

### Backend
```bash
cd visiting_places/backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
Frontend (open a new terminal)
cd visiting_places/frontend
npm install
npm start
Open http://localhost:3000 in your browser.


---

### `visiting_places/backend/requirements.txt`

fastapi uvicorn pydantic


---

### `visiting_places/backend/models.py`

```python
from pydantic import BaseModel
from typing import Optional

class Place(BaseModel):
    id: Optional[int] = None
    name: str
    country: str
    category: str  # Beach, Mountain, City, Heritage, Nature, Adventure
    region: str    # Asia, Europe, Americas, Africa, Oceania, Middle East
    description: str
    image_url: str
    rating: float
    best_season: str
    entry_fee: str