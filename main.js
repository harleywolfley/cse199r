const addSubmit = document.getElementById("button-save-infrac")
const displayPlate = document.getElementById("last-input-infrac")

addSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    addInfraction()
})

function clearInfraction(){
    document.getElementById("save-plate").value = '';
    document.getElementById("save-dattime").value = '';
    document.getElementById("save-location").value = '';
    document.getElementById("save-infrac").value = '';
    document.getElementById("save-desc").value = '';
    document.getElementById("save-vid-path").value = '';
}

function addInfraction(){
    const entry = {
        plate: document.getElementById("save-plate").value,
        dattime: document.getElementById("save-dattime").value,
        location: document.getElementById("save-location").value,
        infrac: document.getElementById("save-infrac").value,
        desc: document.getElementById("save-desc").value,
        vidPath: document.getElementById("save-vid-path").value
    };

    const infractions = JSON.parse(localStorage.getItem('infractions')) || [];
    infractions.push(entry);
    localStorage.setItem('infractions', JSON.stringify(infractions));

    displayInfraction(entry);
    clearInfraction();
}

function displayInfraction(entry){
    displayPlate.innerHTML = `<h3 id="display-plate">Last Saved:</h3>
            <h4>Plate:</h4>
            <p>${entry.plate}</p>
            <h4>Date & Time:</h4>
            <p>${entry.dattime}</p>
            <h4>Location</h4>
            <p>${entry.location}</p>
            <h4>Infraction Type:</h4>
            <p>${entry.infrac}</p>
            <h4>Description:</h4>
            <p>${entry.desc}</p>
            <h4>Video Path:</h4>
            <p>${entry.vidPath}</p>`;
}

function init(){
    const infractions = JSON.parse(localStorage.getItem('infractions')) || [];
    if (infractions.length > 0) {
        displayInfraction(infractions[infractions.length - 1]);
    } else {
        displayPlate.innerHTML = `<h3 id="display-plate">Last Saved:</h3><p>Please save an infraction.</p>`
    }
}

init()