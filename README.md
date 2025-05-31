# copilot-demo-health-dashboard

A simple Node.js project for health and nutrition calculations, including BMI, BMR, calorie, water, protein, and body fat percentage calculations. Includes automated tests using Jest.

## Features
- Calculate BMI and BMI category
- Calculate BMR (Harris-Benedict equation)
- Calculate daily calorie intake
- Calculate recommended water and protein intake
- Calculate body fat percentage (US Navy method)
- Automated unit tests with Jest

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/smmskn/copilot-demo-health-dashboard.git
   cd copilot-demo-health-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Tests
To run the automated tests:
```sh
npm test
```

### Usage
You can use the calculation functions in `healthUtils.js` in your own Node.js scripts:

```js
const {
  calculateBMI,
  getBMICategory,
  calculateBMR,
  calculateCalorieIntake,
  calculateWaterIntake,
  calculateProteinIntake,
  calculateBodyFat
} = require('./healthUtils');

const bmi = calculateBMI(70, 175);
console.log('BMI:', bmi);
console.log('BMI Category:', getBMICategory(bmi));
```

## File Structure
- `healthUtils.js` — Health and nutrition calculation functions
- `healthUtils.test.js` — Automated Jest test cases
- `index.html` — (Optional) For browser-based demo or documentation
- `package.json` — Project configuration and dependencies

## License
MIT
