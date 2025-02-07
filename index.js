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

/**
 * 👉 STEP 2: Complete the function (fetchAllEvents) so that it:
 *    - uses `fetch` to make a GET request to the API
 *    - turns the response into json
 *    - stores the json of events into state
 *    - calls `renderAllEvents` function 
 */

const fetchAllEvents = async () => {

};

/**
 * 👉 STEP 3: Complete the function (createNewEvent) so that it:
 *    - uses `fetch` to make a POST request to the API sending the data passed in the body of the request
 *    - turns the response into json
 *    - calls `fetchAllEvents`
 *
 * Note: date isn't used in this API but you will need to know how to work with it in the workshop
 */

const createNewEvent = async () => {

};

/**
 * 👉 STEP 4: Complete the function (removeEvent) so that it:
 *    - uses `fetch` to make a DELETE request to the API to delete an event with the id passed to the function
 *    - calls `fetchAllEvents`
 */

const removeEvent = async () => {

};

// render all events on the page (create function- renderAllEvents)

const renderAllEvents = () => {

};

//resets html of all events

//creates a card for each event

//add event listener to the delete button so we can delete an event

//adds a listener to our form so when we submit the form we create a new event

const addListenerToForm = () => {

};

//clears the form after we create the new event

//initial function when the page loads

const init = async () => {
    //gets all the recipes from the API

    //adds a listener to the form so we can add a recipe when the user submits the form
};



//call init function 