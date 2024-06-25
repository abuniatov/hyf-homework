// Age-ify (A future age calculator) TASK 1

const yearOfBirth = 1986;
const yearFuture = 2069;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator) TASK 2

const dogYearOfBirth = 2020;
const dogYearFuture = 2030;

const shouldShowResultInDogYears = true; // Change this to false to show the result in human years
if (shouldShowResultInDogYears) {
  dogYear = dogYearFuture - dogYearOfBirth; // Calculating the age in dog years
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`); // Showing the result in dog years
} else {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7; // Calculating the age in human years (assuming thet 1 human year equals to 7 dog years)
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}.` // Showing the result in human years
  );
}

// Housey pricey (A house price estimator) TASK 3

// Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000.
//  Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.

// House Volume formula: volume = Width * Height * Depth
// House Price formula: housePrice = volume * 2.5 * 1000 + gardenSize * 300;

// Peter's house details:
const peterWidth = 8;
const peterHeight = 10;
const peterDepth = 10;
const peterGardenSize = 100;
const peterRealCost = 2500000;

// Julia's house details:
const juliaWidth = 5;
const juliaHeigth = 8;
const juliaDepth = 11;
const juliaGardenSize = 70;
const juliaRealCost = 1000000;

const peterHouseVolume = peterWidth * peterHeight * peterDepth;
const juliaHouseVolume = juliaWidth * juliaHeigth * juliaDepth;

let peterHousePrice = peterHouseVolume * 2.5 * 1000 + peterGardenSize * 300;
let juliaHousePrice = juliaHouseVolume * 2.5 * 1000 + juliaGardenSize * 300;

if (peterHousePrice > peterRealCost) {
  console.log("Peter will pay more for the house");
} else {
  console.log("Peter will pay less for the house.");
}

if (juliaHousePrice > juliaRealCost) {
  console.log("Julia will pay more for the house.");
} else {
  console.log("Julia will pay less for the house.");
}

// Ez Namey (Startup name generator) TASK 4

// Create arrays
const firstWords = [
  "Innovative",
  "Cutting-Edge",
  "NextGen",
  "Revolutionary",
  "Advanced",
  "Intelligent",
  "Disruptive",
  "Pioneering",
  "Futuristic",
  "Scalable",
];
const secondWords = [
  "Solutions",
  "Technologies",
  "Innovations",
  "Systems",
  "Networks",
  "Platforms",
  "Dynamics",
  "Enterprises",
  "Ventures",
  "Labs",
];

// Generates random indexes from 0 to 9 (because 10 values in each array)
const randomNr1 = Math.floor(Math.random() * 10);
const randomNr2 = Math.floor(Math.random() * 10);

// Generates and outputs the random Startup name in the console
const startupName = `${firstWords[randomNr1]} ${secondWords[randomNr2]}`;
console.log(
  `The startup: ${startupName} contains ${startupName.length} characters`
);
