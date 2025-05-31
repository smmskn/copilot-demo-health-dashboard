const {
  calculateBMI,
  getBMICategory,
  calculateBMR,
  calculateCalorieIntake,
  calculateWaterIntake,
  calculateProteinIntake,
  calculateBodyFat
} = require('./healthUtils');

describe('healthUtils', () => {
  test('calculateBMI returns correct BMI', () => {
    expect(calculateBMI(70, 175)).toBeCloseTo(22.86, 2);
    expect(calculateBMI(50, 160)).toBeCloseTo(19.53, 2);
  });

  test('getBMICategory returns correct category', () => {
    expect(getBMICategory(17)).toBe('Underweight');
    expect(getBMICategory(22)).toBe('Normal weight');
    expect(getBMICategory(27)).toBe('Overweight');
    expect(getBMICategory(32)).toBe('Obesity');
  });

  test('calculateBMR for male and female', () => {
    expect(calculateBMR('male', 70, 175, 30)).toBeCloseTo(1724.2, 1);
    expect(calculateBMR('female', 60, 165, 28)).toBeCloseTo(1392.7, 1);
  });

  test('calculateCalorieIntake', () => {
    expect(calculateCalorieIntake(1700, 1.55)).toBeCloseTo(2635, 0);
  });

  test('calculateWaterIntake', () => {
    expect(calculateWaterIntake(70)).toBeCloseTo(2.1, 2);
  });

  test('calculateProteinIntake', () => {
    expect(calculateProteinIntake(70)).toBeCloseTo(56, 0);
  });

  test('calculateBodyFat for male', () => {
    expect(calculateBodyFat('male', 175, 40, 80, 0)).toBeCloseTo(17.5, 1);
  });

  test('calculateBodyFat for female', () => {
    expect(calculateBodyFat('female', 165, 34, 70, 95)).toBeCloseTo(32.7, 1);
  });
});
