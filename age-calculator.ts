// Get elements from the DOM
const dayInput = document.getElementById('day') as HTMLInputElement;
const monthInput = document.getElementById('month') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;
const calculateAgeBtn = document.getElementById('calculateAgeBtn') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

// Function to calculate age
function calculateAge(day: number, month: number, year: number): string {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day); // Month is zero-indexed in TS
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birth date hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 0) {
    return 'Invalid date of birth';
  }

  return `('You are ${age} years old.')`;
}

// Event listener for the calculate button
calculateAgeBtn.addEventListener('click', () => {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Validate input
  if (!isNaN(day) && !isNaN(month) && !isNaN(year) && day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
    resultDiv.textContent = calculateAge(day, month, year);
  } else {
    resultDiv.textContent = 'Please enter valid date values.';
  }
});
