// const plateInput = document.getElementById("save-plate").value
const addSubmit = document.getElementById("button-save-infrac")

const displayPlate = document.getElementById("display-plate")

function addInfraction(){
    const plate = document.getElementById("save-plate").value;
    localStorage.setItem('plate', JSON.stringify(plate));
    const dattime = document.getElementById("save-dattime").value;
    localStorage.setItem('dattime', JSON.stringify(dattime))
    const location = document.getElementById("save-location").value;
    localStorage.setItem('location', JSON.stringify(location))
    const infrac = document.getElementById("save-infrac").value;
    localStorage.setItem('infraction', JSON.stringify(infrac))
    const desc = document.getElementById("save-desc").value;
    localStorage.setItem('description', JSON.stringify(desc))
    const vidPath = document.getElementById("save-vid-path").value;
    localStorage.setItem('videoPath', JSON.stringify(vidPath))
}

addSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    addInfraction()
})

function clearInfraction(){

}

function displayInfraction(){
    const plate = JSON.parse(localStorage.getItem('plate'));
    displayPlate.innerHTML = `<h3 id="display-plate">Last Saved:</h3>
            <h4>Plate:</h4>
            <p>${plate}</p>
            <h4>Date & Time:</h4>
            <p>${dattime}</p>
            <h4>Location</h4>
            <p>${location}</p>
            <h4>Infraction Type:</h4>
            <p>${infrac}</p>
            <h4>Description:</h4>
            <p>${desc}</p>
            <h4>Video Path:</h4>
            <p>${vidPath}</p>`;
}

function init(){
    displayInfraction()
}

init()

function showInfractions() {
            const infractions = JSON.parse(localStorage.getItem('infractions')) || [];
            const list = infractions
                .map(entry => `<li>${entry.plate} — ${entry.date}</li>`)
                .join('');
            document.getElementById('last-input-infrac').innerHTML = `<ul>${list}</ul>`;
        }

        // show existing entries when the page loads
        window.addEventListener('load', showInfractions);

//notes
// clear the input for the next entry
// document.getElementById('save-plate').value = '';

// get existing list (or start a new one)
//const infractions = JSON.parse(localStorage.getItem('infractions')) || [];