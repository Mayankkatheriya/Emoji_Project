let emojiContainer = document.querySelector("#search_result_container");
const displayEmojis = () => {
  // TODO Append all the element from emojiList to out table body
  emojiList.forEach((e) => {
    let new_row = document.createElement("tr");
    new_row.innerHTML = `
        <td class = "emoji">${e.emoji}</td>
        <td class = "aliases">${e.aliases}</td>
        <td class = "disc">${e.description}</td>
    `;
    emojiContainer.appendChild(new_row);
  });
};
window.onload = () => displayEmojis();

// TODO Search and ReAppend Function
function searchAndAppend(searchStr) {
  const filtered = emojiList.filter((e) => {
    if (e.description.indexOf(searchStr) != -1) {
      return true;
    }
    if (e.aliases.some((elem) => elem.startsWith(searchStr))) {
      return true;
    }
    if (e.tags.some((elem) => elem.startsWith(searchStr))) {
      return true;
    }
  });
  while (emojiContainer.firstChild) {
    emojiContainer.removeChild(emojiContainer.firstChild);
  }
  filtered.forEach((e) => {
    // console.log('e', e, 'filtered');
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td class="emoji">${e.emoji}</td>
        <td class="aliases">${e.aliases}</td>
        <td class="disc">${e.description}</td>
        `;
    // console.log({newRow});
    emojiContainer.appendChild(newRow);
  });
}

//TODO search on clicking on submit button
let searchForm = document.querySelector("#search_form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchStr = e.target.children[0].value;
  if (searchStr == "") {
    alert("Please enter a valid string!");
  }
  // console.log(searchStr);
  else {
    searchAndAppend(searchStr);
  }
});

// TODO Search in real time while typing in search bar
let searchBox = document.querySelector("#search_field");
searchBox.addEventListener("keyup", function (e) {
  let searchStr = e.target.value;
  searchAndAppend(searchStr);
});
