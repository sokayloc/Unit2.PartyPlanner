let events = [];
const eventList = document.querySelector('#events');

async function fetchEvents(){
    const re = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events')
    const json = await re.json();
    events = json.data;
    renderEvents();
}

function renderEvents(){
    const html = events.map(function(event){
        console.log(event);
        return `
            <div>
                <h2>${ event.name }</h2>
                <p>${ event.description }</p>
                <h3> ${event.date}</h3>
                <p> ${event.location}</p>
                <button> Delete Event </button>
            </div>
        `;
    }).join('');
    eventList.innerHTML = html;
}

fetchEvents();