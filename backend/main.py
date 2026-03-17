from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from models import Place
import data

app = FastAPI(title="Visiting Places API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/places", response_model=List[Place])
def get_places(
    search: Optional[str] = None,
    category: Optional[str] = None,
    region: Optional[str] = None,
    sort_by: Optional[str] = "rating"
):
    results = data.places_db.copy()
    if search:
        search_lower = search.lower()
        results = [p for p in results if
            search_lower in p.name.lower() or
            search_lower in p.country.lower() or
            search_lower in p.description.lower() or
            search_lower in p.category.lower() or
            search_lower in p.region.lower()]
    if category and category != "All":
        results = [p for p in results if p.category == category]
    if region and region != "All":
        results = [p for p in results if p.region == region]
    if sort_by == "rating":
        results.sort(key=lambda x: x.rating, reverse=True)
    elif sort_by == "name":
        results.sort(key=lambda x: x.name)
    return results

@app.get("/places/{place_id}", response_model=Place)
def get_place(place_id: int):
    for place in data.places_db:
        if place.id == place_id:
            return place
    raise HTTPException(status_code=404, detail="Place not found")

@app.post("/places", response_model=Place)
def create_place(place: Place):
    place.id = data.next_id
    data.next_id += 1
    data.places_db.append(place)
    return place

@app.put("/places/{place_id}", response_model=Place)
def update_place(place_id: int, updated: Place):
    for i, place in enumerate(data.places_db):
        if place.id == place_id:
            updated.id = place_id
            data.places_db[i] = updated
            return updated
    raise HTTPException(status_code=404, detail="Place not found")

@app.delete("/places/{place_id}")
def delete_place(place_id: int):
    for i, place in enumerate(data.places_db):
        if place.id == place_id:
            data.places_db.pop(i)
            return {"message": "Deleted successfully"}
    raise HTTPException(status_code=404, detail="Place not found")
