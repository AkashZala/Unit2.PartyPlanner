const parties = document.querySelector('#partyList');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

let events = [];

function renderEvents() {
    const toHtml = events.map((party) => {
        return `
            <li>
            <h1>${ party.name }</h1>
            <h3>Date and Time</h3>
            <p>${ party.date }</p>
            <h3>Place</h3>
            <p>${ party.location}</p>
            <h3>Description</h3>
            <p>${ party.description }</p>
            <button id=del>Delete Event</button>
            </li>
        `
    }).join('');
    parties.innerHTML = toHtml
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const addEvent = {};
    addEvent.name = event.target.name.value;
    event.target.name.value = '';
    addEvent.date = event.target.date.value;
    event.target.date.value = '';
    addEvent.location = event.target.place.value;
    event.target.place.value = '';
    addEvent.description = event.target.desc.value;
    event.target.desc.value = '';
    events.push(addEvent);
    renderEvents();
});

ul.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        const listItems = event.target.parentNode;
        const listItemsArr = Array.from(ul.children);
        const index = listItemsArr.indexOf(listItems);
        events.splice(events[index], 1);
        renderEvents();
    }
});


async function fetchEvents() {
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    events = json.data;
    renderEvents();
}

fetchEvents();