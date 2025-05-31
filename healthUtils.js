// BMI calculation
function calculateBMI(weight, height) {
  return weight / Math.pow(height / 100, 2);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 24.9) return 'Normal weight';
  if (bmi < 29.9) return 'Overweight';
  return 'Obesity';
}

// BMR calculation (Harris-Benedict)
function calculateBMR(gender, weight, height, age) {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
}

// Calorie Intake
function calculateCalorieIntake(bmr, activity) {
  return bmr * activity;
}

// Water Intake
function calculateWaterIntake(weight) {
  return weight * 0.03;
}

// Protein Intake
function calculateProteinIntake(weight) {
  return weight * 0.8;
}

// Body Fat % (US Navy method)
function calculateBodyFat(gender, height, neck, waist, hip) {
  if (gender === 'male') {
    return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
  }
}

// Export for testing (if using modules)
if (typeof module !== 'undefined') {
  module.exports = {
    calculateBMI,
    getBMICategory,
    calculateBMR,
    calculateCalorieIntake,
    calculateWaterIntake,
    calculateProteinIntake,
    calculateBodyFat
  };
}

// Unit tests for health calculations
function runHealthUtilsTests() {
  let passed = 0, failed = 0;
  function assertAlmostEqual(actual, expected, tolerance = 0.01, msg = '') {
    if (Math.abs(actual - expected) <= tolerance) {
      passed++;
    } else {
      failed++;
      console.error(`FAIL: ${msg} Expected ${expected}, got ${actual}`);
    }
  }
  // BMI
  assertAlmostEqual(calculateBMI(70, 175), 22.86, 0.01, 'BMI 70kg/175cm');
  assertAlmostEqual(calculateBMI(50, 160), 19.53, 0.01, 'BMI 50kg/160cm');
  // BMI Category
  if (getBMICategory(17) === 'Underweight') passed++; else { failed++; console.error('BMI Category Underweight'); }
  if (getBMICategory(22) === 'Normal weight') passed++; else { failed++; console.error('BMI Category Normal'); }
  if (getBMICategory(27) === 'Overweight') passed++; else { failed++; console.error('BMI Category Overweight'); }
  if (getBMICategory(32) === 'Obesity') passed++; else { failed++; console.error('BMI Category Obesity'); }
  // BMR
  assertAlmostEqual(calculateBMR('male', 70, 175, 30), 1724.2, 0.5, 'BMR male');
  assertAlmostEqual(calculateBMR('female', 60, 165, 28), 1392.7, 0.5, 'BMR female');
  // Calorie Intake
  assertAlmostEqual(calculateCalorieIntake(1700, 1.55), 2635, 0.5, 'Calorie Intake');
  // Water Intake
  assertAlmostEqual(calculateWaterIntake(70), 2.1, 0.01, 'Water Intake');
  // Protein Intake
  assertAlmostEqual(calculateProteinIntake(70), 56, 0.01, 'Protein Intake');
  // Body Fat % (male)
  assertAlmostEqual(calculateBodyFat('male', 175, 40, 80, 0), 17.5, 0.5, 'Body Fat % male');
  // Body Fat % (female)
  assertAlmostEqual(calculateBodyFat('female', 165, 34, 70, 95), 32.7, 0.5, 'Body Fat % female');
  // Summary
  if (failed === 0) {
    console.log(`All ${passed} tests passed!`);
  } else {
    console.error(`${passed} tests passed, ${failed} failed.`);
  }
}
// Run tests if in Node.js
typeof module !== 'undefined' && require.main === module && runHealthUtilsTests();
