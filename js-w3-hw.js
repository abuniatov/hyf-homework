// EX1. Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
const index = names.indexOf(nameToRemove); // Index of the name to remove

if (index !== -1) {
  // Check if the name is found, and then remove it
  names.splice(index, 1);
}

console.log(names); // Log out the remaining array

// EX2. When will we be there??

function calculateTravelTime(travelInformation) {
  const { speed, destinationDistance } = travelInformation;

  // Calculate the time in hours as a decimal
  const timeInHours = destinationDistance / speed;

  // Extract the whole number of hours
  const hours = Math.floor(timeInHours);

  // Calculate the remaining minutes and round it to the nearest integer.
  const minutes = Math.round((timeInHours - hours) * 60);

  // Return the formatted result
  return `${hours} hours and ${minutes} minutes`;
}

// Example
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // "8 hours and 38 minutes"

// EX3. Series duration of my life

const seriesDurations = [
  {
    title: "Friends",
    days: 4,
    hours: 4,
    minutes: 36,
  },
  {
    title: "The Office",
    days: 3,
    hours: 19,
    minutes: 24,
  },
  {
    title: "High Maintenance",
    days: 0,
    hours: 17,
    minutes: 0,
  },
];

function logOutSeriesText() {
  let totalPercentage = 0; // initialization to 0 before the loop starts. This variable will hold the cumulative percentage.
  
  const minutesInYear = 365.25 * 24 * 60; // Calculates minutes in a year accounting for leap years
  const averageLifespanMinutes = 80 * minutesInYear; // Calculates average 80 years in minutes

// The code below starts a loop using the forEach method. forEach takes a callback function and executes it once for each array element, with 'series' representing the current object.
  seriesDurations.forEach((series) => {
    const { days, hours, minutes } = series;
    const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes; // Converts the duration of the series from days, hours, and minutes to the total number of minutes.
    const percentageOfLife = (totalMinutes / averageLifespanMinutes) * 100; // Converts the fraction of life spent watching the series into a percentage.

    totalPercentage += percentageOfLife; // Accumulate the percentage of life spent watching each series into totalPercentage

// Each series percentage is logged, followed by the total percentage.
    console.log(
      `${series.title} took ${percentageOfLife.toFixed(3)}% of my life`
    );
  });

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();

// EX4. NOnoN0nOYes (Note taking app)

const notes = []; // Array initialization

function saveNote(content, id) {
  // Function for saving a note
  notes.push({ content, id });
}

// Function to retrieve a note by its id
function getNote(id) {
  if (id === "" || typeof id !== "number") {
    // Checking if id is undefined or not a number
    console.log("Invalid id provided. Please provide a number.");
    return;
  }
  for (const note of notes) {
    // Looping through each note in the notes array
    if (note.id === id) {
      // Checking if the note's id matches the provided id
      return note;
    }
  }
  console.error(`Note with id: ${id} not found.`); // Logs an error if no matching note is found
}

// Function to log all notes by looping through each note in the array
function logOutNotesFormatted() {
  notes.forEach((note) => {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  });
}

// Examples
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Clean the apartment", 3);
saveNote("Take out the trash", 4);

const invalidNote = getNote(); // Attempting to retrieve a note with invalid id
const nonExistingNote = getNote(5); // Attempting to retrieve a note with a non-existing id
logOutNotesFormatted(); // Logging out all notes
const firstNote = getNote(1); // Retrieving specific note by its id
console.log(firstNote);