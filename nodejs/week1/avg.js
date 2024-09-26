function calculateAverage(args) {
  if (args.length === 0) {
    return "Please provide a list of numbers separated by spaces.";
  }

  const convertedNumbers = args.map((arg) => parseFloat(arg));
  const invalidArgs = args.filter((num) => isNaN(num));
  const validNumbers = convertedNumbers.filter((num) => !isNaN(num));

  if (invalidArgs.length > 0) {
    console.log(`Invalid numbers skipped: ${invalidArgs.join(", ")}`);
  }

  if (validNumbers.length === 0) {
    return "No valid numbers provided.";
  }

  const sum = validNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = (sum / validNumbers.length).toFixed(2);

  return `The average of valid numbers is: ${average}`;
}

const args = process.argv.slice(2);

const result = calculateAverage(args);
console.log(result);
