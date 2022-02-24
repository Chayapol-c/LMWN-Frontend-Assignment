from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/trips")
def read_trips(keyword: Optional[str] = None):
    """Return trips data that relevant to the input keyword. If there're no keyword return all of data."""
    url = "http://localhost:9000/trips"
    res = requests.get(url)
    data = res.json()
    trips = []
    if keyword:
        for i in data:
            tags = i["tags"]
            title = i["title"]
            description = i["description"]
            if keyword in tags or keyword in title or keyword in description:
                trips.append(i)
    elif len(trips) == 0 or not keyword:
        return {"trips": data}
    return {"trips": trips}
