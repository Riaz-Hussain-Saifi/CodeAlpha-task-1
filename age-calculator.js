// Get elements from the DOM
var dayInput = document.getElementById('day');
var monthInput = document.getElementById('month');
var yearInput = document.getElementById('year');
var calculateAgeBtn = document.getElementById('calculateAgeBtn');
var resultDiv = document.getElementById('result');
// Function to calculate age
function calculateAge(day, month, year) {
    var today = new Date();
    var birthDate = new Date(year, month - 1, day); // Month is zero-indexed in TS
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 0) {
        return 'Invalid date of birth';
    }
    return "('You are ".concat(age, " years old.')");
}
// Event listener for the calculate button
calculateAgeBtn.addEventListener('click', function () {
    var day = parseInt(dayInput.value);
    var month = parseInt(monthInput.value);
    var year = parseInt(yearInput.value);
    // Validate input
    if (!isNaN(day) && !isNaN(month) && !isNaN(year) && day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
        resultDiv.textContent = calculateAge(day, month, year);
    }
    else {
        resultDiv.textContent = 'Please enter valid date values.';
    }
});
