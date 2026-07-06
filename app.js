const form = document.getElementById('bmiForm');
const bmiValueEl = document.getElementById('bmiValue');
const bmiClassEl = document.getElementById('bmiClass');

function classifyBMI(bmi) {

  if (bmi < 16) return 'Severe Thinness';
  if (bmi < 17) return 'Moderate Thinness';
  if (bmi < 18.5) return 'Mild Thinness';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  if (bmi < 35) return 'Obese Class I';
  if (bmi < 40) return 'Obese Class II';
  return 'Obese Class III';
}

function roundTo1(x) {
  return Math.round(x * 10) / 10;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const age = Number(document.getElementById('age').value);
  const gender = document.getElementById('gender').value; // currently not used in calculation, kept for UX
  const heightCm = Number(document.getElementById('height').value);
  const weightKg = Number(document.getElementById('weight').value);

  if (!Number.isFinite(age) || !Number.isFinite(heightCm) || !Number.isFinite(weightKg)) return;
  if (heightCm <= 0) return;

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  const bmiRounded = roundTo1(bmi);
  bmiValueEl.textContent = bmiRounded.toFixed(1);
  bmiClassEl.textContent = classifyBMI(bmiRounded);
});


