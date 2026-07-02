const searchBar = ['one', 'two', 'three']
const plateSearchBar = document.getElementById("plate-search-bar")
const plateSearchSubmit = document.getElementById("plate-search-submit")
const plateInput = ""
const displayPlateList = document.getElementById("display-plate-list")

function displayList(filteredItems) {
    displayPlateList.innerHTML = ""
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

plateSearchBar.addEventListener('input', (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredItems = items.filter(item => {
        return item.toLowerCase().includes(searchString)
    })
    displayList(filteredItems)
})

displayList(displayPlateList)

if (!plateInput){
    console.log("No Infraction Content Recorded.")
} else if (plateInput){
    console.log("Infactions are documented.")
}

// // 4. Listen for typing events inside the input field
// searchInput.addEventListener('input', (event) => {
//   // Convert text to lowercase so search is not case-sensitive
//   const searchString = event.target.value.toLowerCase();
  
//   // Filter array using string matching logic
//   const filteredItems = items.filter(item => {
//     return item.toLowerCase().includes(searchString);
//   });
  
//   // Re-render only matching items
//   displayItems(filteredItems);
// });

// // 5. Initial render on page load
// displayItems(items);