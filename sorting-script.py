from pyscript import document, display
from datetime import datetime
from pathlib import Path
import json

plate = document.getElementById('save-plate').value
filename = Path(f"{plate}.json")
display_infrac = document.getElementById('last-input-infrac')
display_infrac.innerHTML(f'{plate}')
submit_button = document.getElementById('button-save-infrac')

# date_time = datetime.now().strftime("%Y-%m-%d %I:%M %p")
# # Update with options in a list after researching ticketable roadspaces. https://www.dot.state.mn.us/planning/program/pdf/FHWA%20Guidelines.pdf
# location = input("Enter Road Type: ")
# # Update with options for classification.
# classification = input("Enter Infraction Type: ")
# description = input("Enter Infraction Description: ")
# video_path = input("Enter Path to the Video in Storage: ")

# row = {
#     'date_time': date_time,
#     'location': location,
#     'classification': classification,
#     'description': description,
#     'video_path': video_path
# }

if filename.exists():
    with filename.open('r') as file:
        data = json.load(file)
    data.append(row)
else:
    data = [row]

with filename.open('w') as file:
        json.dump(data, file, indent=4)

