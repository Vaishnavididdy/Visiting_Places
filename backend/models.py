from pydantic import BaseModel
from typing import Optional

class Place(BaseModel):
    id: Optional[int] = None
    name: str
    country: str
    category: str
    region: str
    description: str
    image_url: str
    rating: float
    best_season: str
    entry_fee: str