const parties = document.querySelector('#partyList');
const form = document.querySelector('form');
let events = [];

function renderEvents() {
    const toHtml = events.map((party) => {
        return `
            <div>
            <h1>${ party.name }</h1>
            <h3>Date and Time</h3>
            <p>${ party.date }</p>
            <h3>Place</h3>
            <p>${ party.location}</p>
            <h3>Description</h3>
            <p>${ party.description }</p>
            </div>
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


async function fetchEvents() {
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    events = json.data;
    renderEvents();
}

fetchEvents();