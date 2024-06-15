// Flight booking fullname function

function getFullname(firstName, lastName, useFormalName, gender) {
  // Check if useFormalName is undefined
  if (useFormalName === undefined) {
    return "Error: Missing argument";
  }

  // Handle empty strings for firstName and lastName
  if (!firstName && !lastName) {
    return "Anonymous";
  } else if (!firstName) {
    firstName = "";
  } else if (!lastName) {
    lastName = "";
  }

  const fullName = `${firstName} ${lastName}`;

  // Add formal title if useFormalName is true
  if (useFormalName) {
    if (gender === "male") {
      return `Lord ${fullName}`;
    } else if (gender === "female") {
      return `Lady ${fullName}`;
    }
  }
  return fullName;
}

// Call the function and assign the results to variables
const fullname1 = getFullname("John", "Malkovich", true, "male");
const fullname2 = getFullname("Sarah", "Conor", true, "female");
const fullname3 = getFullname("Sarah", "Conor");
const fullname4 = getFullname("", "", true, "male");

// Log the variables to the console
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);

// EVENT APP

// Array of weekday names
function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get today's day index (0-6, where 0 is Sunday and 6 is Saturday)
  const today = new Date().getDay();

  // Calculate the event day index
  const eventDay = (today + daysFromToday) % 7;

  // Return the weekday name
  return weekdays[eventDay];
}

// Example:
console.log(getEventWeekday(6)); // 6 days from today's date (day of the week)

// WEATHER WEAR

// simplified function using a series of conditional (ternary) operators instead of (if-else) statements
function recommendedClothing(temperature) {
  return temperature >= 30
    ? "wear something very light, stay in the shade and wear a high SPF sunscreen"
    : temperature >= 20
    ? "wear comfy clothing like shorts and a t-shirt"
    : temperature >= 10
    ? "wear long pants and a long-sleeve shirt or light jacket"
    : temperature >= 0
    ? "wear something warmer"
    : "wear winter clothing including a warm jacket, hat, gloves etc.";
}

// Example:
const clothesToWear = recommendedClothing(33);
console.log(clothesToWear); // Logs out: "wear jeans and a long-sleeve shirt or light jacket"

// STUDENT MANAGER

const class07Students = []; // Class 07 Students Array

function addStudentToClass(studentName) {
  // Guard clauses and the main logic in a series of ternary operators
  !studentName
    ? console.log("Cannot add an empty string as a student name")
    : class07Students.includes(studentName)
      ? console.log(`Student ${studentName} is already in the class`)
      : studentName === "Queen"
        ? (class07Students.push(studentName),
          console.log(`${studentName} has been added to the class`))
        : class07Students.length >= 6
          ? console.log("Cannot add more students to the class")
          : (class07Students.push(studentName),
            console.log(`${studentName} has been added to the class`));
}

// Function to get the number of students in the class
function getNumberOfStudents() {
  // Filter out the Queen from the list and return the count of other students
  return class07Students.filter(function (student) {
    return student !== "Queen";
  }).length;
}

// Testing the functions:
addStudentToClass("Noah");
addStudentToClass("Bhumika");
addStudentToClass("Yuliia");
addStudentToClass("Halina");
addStudentToClass("Rajesh");
addStudentToClass("Dennis");

addStudentToClass("Hussein"); // Trying to add more than 6 students
addStudentToClass("Bhumika"); // Trying to add a student that is already in the class
addStudentToClass("Queen"); // Adding the Queen to a full class
addStudentToClass(""); // Trying to add an empty string

console.log("Number of students in class:", getNumberOfStudents());