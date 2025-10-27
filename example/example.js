const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');

function validateInput() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = 'Будь ласка, введіть правильні числа в обидва поля.';
    return null;
  }
  return [num1, num2];
}

function showResult(value) {
  resultDiv.textContent = 'Результат: ' + value;
}

document.getElementById('add').addEventListener('click', () => {
  const nums = validateInput();
  if (nums) showResult(nums[0] + nums[1]);
});

document.getElementById('subtract').addEventListener('click', () => {
  const nums = validateInput();
  if (nums) showResult(nums[0] - nums[1]);
});

document.getElementById('multiply').addEventListener('click', () => {
  const nums = validateInput();
  if (nums) showResult(nums[0] * nums[1]);
});

document.getElementById('divide').addEventListener('click', () => {
  const nums = validateInput();
  if (nums) {
    if (nums[1] === 0) {
      resultDiv.textContent = 'На нуль ділити не можна!';
    } else {
      showResult((nums[0] / nums[1]).toFixed(2));
    }
  }
});
