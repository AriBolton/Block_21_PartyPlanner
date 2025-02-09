const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2411-FSA-ET-WEB-PT-ab/events';

/**
 * Need to fetch the data from the API and have it show in lists the events that are upcoming (with all data- names, dates, times, locations, and descriptions)
 *
 * we need to add a delete button to each event, so the user has the option to remove an event as needed
 */

/**
 * the data entered into the form needs to create a new event that is then added to the list that is fetched from te API
 */

/**
 * 👉 STEP 1: Create an object called state that holds an array for the event objects
 */

const state = {
    events: [],
};

/**
 * 👉 STEP 2: Complete the function (fetchAllEvents) so that it:
 *    - uses `fetch` to make a GET request to the API
 *    - turns the response into json
 *    - stores the json of events into state
 *    - calls `renderAllEvents` function 
 */

const fetchAllEvents = async () => {
    try {
        const response = await fetch(API_URL);
        const json = await response.json();

        state.events = json.data;

        renderAllEvents();
    } catch (error) {
        console.log("ERROR in fetchAllEvents", error);
    }

};

/**
 * 👉 STEP 3: Complete the function (createNewEvent) so that it:
 *    - uses `fetch` to make a POST request to the API sending the data passed in the body of the request
 *    - turns the response into json
 *    - calls `fetchAllEvents`
 *
 * Note: date isn't used in this API but you will need to know how to work with it in the workshop
 */

const createNewEvent = async (name, description, date, location) => {
    try {
        await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                name,
                description,
                date: new Date(date).toISOString(),
                location,
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        fetchAllEvents();
    } catch (error) {
        console.log("ERROR in createNewEvent", error);
    }
};

/**
 * 👉 STEP 4: Complete the function (removeEvent) so that it:
 *    - uses `fetch` to make a DELETE request to the API to delete an event with the id passed to the function
 *    - calls `fetchAllEvents`
 */

const removeEvent = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        fetchAllEvents();
    } catch (error) {
        console.log("ERROR in removeEvent", error);
    }
};

// render all events on the page (create function- renderAllEvents)

const renderAllEvents = () => {
    const eventsContainer = document.getElementById("party-container");
    const eventList = state.events;

    if (!eventList || eventList.length === 0) {
        eventsContainer.innerHTML = "<h3>No events found</h3>";
        return;
    }
    //resets html of all events
    eventsContainer.innerHTML = "";

    //creates a card for each event
    eventList.forEach((event) => {
        const eventElement = document.createElement("div");
        // const nameLabel = document.createElement('nameLabel');
        eventElement.classList.add("event-card");
        eventElement.innerHTML = `
        <h4>${event.name}</h4>
        <p>${event.description}<p>
        <p>${event.date}<p>
        <p>${event.location}<p>
        <button class = "delete-button" data-id ="${event.id}">Remove</button>
        `;
        eventsContainer.appendChild(eventElement);
        const deleteButton = eventElement.querySelector(".delete-button");
        //add event listener to the delete button so we can delete an event
        deleteButton.addEventListener("click", (occur) => {
            try {
                occur.preventDefault();
                removeEvent(event.id);
            } catch (error) {
                console.log(error);
            }
        });
    });


};




//adds a listener to our form so when we submit the form we create a new event

const addListenerToForm = () => {
    const form = document.querySelector("#new-party-form");

    form.addEventListener("submit", async (occurance) => {
        occurance.preventDefault();

        await createNewEvent(
            form.name.value,
            form.description.value,
            form.date.value,
            form.location.value
        );
        //clears the form after we create the new event
        form.name.value = "";
        form.description.value = "";
        form.date.value = "";
        form.location.value = "";
    });
};



//initial function when the page loads

const init = async () => {
    //gets all the recipes from the API
    await fetchAllEvents();
    //adds a listener to the form so we can add a recipe when the user submits the form
    addListenerToForm();
};

init();

//call init function 