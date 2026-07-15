const infractionSelect = document.getElementById("infraction-select");

function populateDropdown(){
    const infractions = JSON.parse(localStorage.getItem('infractions')) || [];

    infractions.forEach((entry, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = entry.dattime || `Entry ${index + 1}`;
        infractionSelect.appendChild(option);
    });
}

function showDetails(index){
    const infractions = JSON.parse(localStorage.getItem('infractions')) || [];
    const entry = infractions[index];

    if (!entry) return;

    document.getElementById("detail-plate").textContent = entry.plate;
    document.getElementById("detail-dattime").textContent = entry.dattime;
    document.getElementById("detail-location").textContent = entry.location;
    document.getElementById("detail-infrac").textContent = entry.infrac;
    document.getElementById("detail-desc").textContent = entry.desc;
    document.getElementById("detail-vid-path").textContent = entry.vidPath;
}

infractionSelect.addEventListener('change', (event) => {
    const index = event.target.value;
    if (index === "") return;
    showDetails(index);
});

populateDropdown();