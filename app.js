const parties = document.querySelector('#partyList');
let events = [];

function renderEvents() {
    const toHtml = events.map((party) => {
        return `
            <div>
            <h2>${ party.name }</h2>
            <h3>Date and Time</h3>
            <p>${ party.date }</p>
            <h3>Place</h3>
            <p>${ party.location}</p>
            <h3>Description</h3>
            <p>${ party.description }</p>
            </div>
        `
    }).join('');
    parties.innerHTML = toHtml;
}

async function fetchEvents() {
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    events = json.data;
    renderEvents();
}

fetchEvents();