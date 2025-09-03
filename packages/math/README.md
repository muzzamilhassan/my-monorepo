# @muzzamilhassan/mathsss

A TypeScript-first mathematics utility library with arithmetic, advanced math, statistics, geometry helpers, and utility functions.

## 📦 Installation

```bash
npm install @muzzamilhassan/mathsss
# or
yarn add @muzzamilhassan/mathsss
# or
pnpm add @muzzamilhassan/mathsss
```

## 🚀 Features
- **Typed**: Full TypeScript definitions
- **Broad coverage**: Arithmetic, statistics, geometry, and helpers
- **Lightweight**: Small and tree-shakeable
- **ES Modules**: Modern build

## 🔰 Quick Start
```typescript
import {
  add, subtract, multiply, divide,
  power, factorial, fibonacci, gcd, lcm,
  mean, median, mode, variance, stdDev,
  areaOfCircle, perimeterOfCircle,
  areaOfRectangle, perimeterOfRectangle,
  pythagoras,
  isPrime, isEven, isOdd, randomInt,
} from '@muzzamilhassan/mathsss';

add(2, 3); // 5
stdDev([1, 2, 3, 4, 5]); // 1.4142...
areaOfRectangle(5, 10); // 50
isPrime(17); // true
```

## 📚 API Reference

### 1) 🔢 Basic Arithmetic
- `add(a: number, b: number): number`
- `subtract(a: number, b: number): number`
- `multiply(a: number, b: number): number`
- `divide(a: number, b: number): number`
  - Throws if `b === 0`.

Examples:
```typescript
add(10, 5); // 15
subtract(10, 5); // 5
multiply(4, 6); // 24
divide(20, 4); // 5
```

### 2) 📈 Advanced Math
- `power(base: number, exponent: number): number`
- `factorial(n: number): number`
  - Throws for negative inputs.
- `fibonacci(n: number): number`
  - Throws for negative inputs.
- `gcd(a: number, b: number): number`
- `lcm(a: number, b: number): number`

Examples:
```typescript
power(2, 10); // 1024
factorial(5); // 120
fibonacci(10); // 55
gcd(24, 18); // 6
lcm(6, 8); // 24
```

### 3) 📊 Statistics
- `mean(numbers: number[]): number`
  - Throws if array is empty.
- `median(numbers: number[]): number`
  - Throws if array is empty.
- `mode(numbers: number[]): number[]`
  - Throws if array is empty; returns all modes if multiple.
- `variance(numbers: number[]): number`
  - Throws if array is empty.
- `stdDev(numbers: number[]): number`

Examples:
```typescript
mean([1, 2, 3, 4]); // 2.5
median([7, 3, 5]); // 5
mode([1, 2, 2, 3, 3]); // [2, 3]
variance([1, 2, 3]); // 0.666...
stdDev([1, 2, 3]); // 0.816...
```

### 4) 📐 Geometry Helpers
- `areaOfCircle(radius: number): number`
- `perimeterOfCircle(radius: number): number`
- `areaOfRectangle(length: number, width: number): number`
- `perimeterOfRectangle(length: number, width: number): number`
- `pythagoras(a: number, b: number): number`

Examples:
```typescript
areaOfCircle(3); // 28.274...
perimeterOfCircle(3); // 18.849...
areaOfRectangle(4, 8); // 32
perimeterOfRectangle(4, 8); // 24
pythagoras(3, 4); // 5
```

### 5) 🔬 Utility Functions
- `isPrime(n: number): boolean`
- `isEven(n: number): boolean`
- `isOdd(n: number): boolean`
- `randomInt(min: number, max: number): number`
  - Throws if `min > max`.

Examples:
```typescript
isPrime(29); // true
isEven(10); // true
isOdd(7); // true
randomInt(1, 100); // e.g., 42
```

## 🛠️ Development
Build from source:
```bash
pnpm build
```

Type definitions are generated in `dist/index.d.ts`.

## 📄 License
ISC

## 🤝 Contributing
PRs welcome! Please open an issue or pull request with improvements or new helpers.

---
Made with ❤️ by Muzzamil Hassan
