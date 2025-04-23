function calculateBMI() {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    // Convert height from cm to meters
    const height = heightCm / 100;

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Please enter valid values for age, weight, and height.";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display result
    document.getElementById("result").textContent = `Age: ${age} | Your BMI is ${bmi.toFixed(2)} (${category})`;
}