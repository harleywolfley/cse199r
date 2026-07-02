from pyscript import add.html
from datetime import datetime
from pathlib import Path
import json

plate = input("License Plate Number: ")
filename = Path(f"{plate}.json")
date_time = datetime.now().strftime("%Y-%m-%d %I:%M %p")
# Update with options in a list after researching ticketable roadspaces. https://www.dot.state.mn.us/planning/program/pdf/FHWA%20Guidelines.pdf
location = input("Enter Road Type: ")
# Update with options for classification.
classification = input("Enter Infraction Type: ")
description = input("Enter Infraction Description: ")
video_path = input("Enter Path to the Video in Storage: ")

row = {
    'date_time': date_time,
    'location': location,
    'classification': classification,
    'description': description,
    'video_path': video_path
}
