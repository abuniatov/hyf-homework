// Age-ify (A future age calculator)

const yearOfBirth = 1986;
const yearFuture = 2069;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2020;
const dogYearFuture = 2030;

const shouldShowResultInDogYears = true; // Change this to false to show the result in human years
if (shouldShowResultInDogYears) {
  dogYear = dogYearFuture - dogYearOfBirth; // Calculating the age in dog years
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`); // Showing the result in dog years
} else {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7; // Calculating the age in human years (assuming thet 1 human year equals to 7 dog years)
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}` // Showing the result in human years
  );
}
