// =============================
// 1. 🔢 Basic Arithmetic
// =============================
export const add = (a: number, b: number): number => a + b;

export const subtract = (a: number, b: number): number => a - b;

export const multiply = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
};

// =============================
// 2. 📈 Advanced Math
// =============================
export const power = (base: number, exponent: number): number =>
  Math.pow(base, exponent);

export const factorial = (n: number): number => {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  return n <= 1 ? 1 : n * factorial(n - 1);
};

export const fibonacci = (n: number): number => {
  if (n < 0) throw new Error("Fibonacci is not defined for negative numbers");
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);

export const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);

// =============================
// 3. 📊 Statistics
// =============================
export const mean = (numbers: number[]): number => {
  if (numbers.length === 0) throw new Error("Mean requires at least one number");
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
};

export const median = (numbers: number[]): number => {
  if (numbers.length === 0) throw new Error("Median requires at least one number");
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

export const mode = (numbers: number[]): number[] => {
  if (numbers.length === 0) throw new Error("Mode requires at least one number");
  const frequency: Record<number, number> = {};
  numbers.forEach((n) => (frequency[n] = (frequency[n] || 0) + 1));
  const maxFreq = Math.max(...Object.values(frequency));
  return Object.keys(frequency)
    .filter((num) => frequency[+num] === maxFreq)
    .map(Number);
};

export const variance = (numbers: number[]): number => {
  if (numbers.length === 0) throw new Error("Variance requires at least one number");
  const m = mean(numbers);
  return mean(numbers.map((n) => (n - m) ** 2));
};

export const stdDev = (numbers: number[]): number => Math.sqrt(variance(numbers));

// =============================
// 4. 📐 Geometry Helpers
// =============================
export const areaOfCircle = (radius: number): number => Math.PI * radius * radius;

export const perimeterOfCircle = (radius: number): number => 2 * Math.PI * radius;

export const areaOfRectangle = (length: number, width: number): number => length * width;

export const perimeterOfRectangle = (length: number, width: number): number =>
  2 * (length + width);

export const pythagoras = (a: number, b: number): number =>
  Math.sqrt(a * a + b * b);

// =============================
// 5. 🔬 Utility Functions
// =============================
export const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

export const isEven = (n: number): boolean => n % 2 === 0;

export const isOdd = (n: number): boolean => n % 2 !== 0;

export const randomInt = (min: number, max: number): number => {
  if (min > max) throw new Error("Min cannot be greater than max");
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
