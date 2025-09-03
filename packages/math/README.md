# @muzzamilhassan/mathsss

A lightweight, TypeScript-first mathematics utility package providing essential mathematical operations.

## 📦 Installation

```bash
npm install @muzzamilhassan/mathsss
```

```bash
yarn add @muzzamilhassan/mathsss
```

```bash
pnpm add @muzzamilhassan/mathsss
```

## 🚀 Features

- **TypeScript Support**: Full TypeScript definitions included
- **Lightweight**: Minimal bundle size
- **ES Modules**: Modern ES module support
- **Simple API**: Easy-to-use mathematical functions

## 📚 API Reference

### `sum(a: number, b: number): number`

Adds two numbers together.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:** The sum of the two numbers

**Example:**
```typescript
import { sum } from '@muzzamilhassan/mathsss';

const result = sum(5, 3); // Returns: 8
const negativeSum = sum(-10, 5); // Returns: -5
```

### `multiply(a: number, b: number): number`

Multiplies two numbers together.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:** The product of the two numbers

**Example:**
```typescript
import { multiply } from '@muzzamilhassan/mathsss';

const result = multiply(4, 6); // Returns: 24
const negativeProduct = multiply(-3, 7); // Returns: -21
```

## 💻 Usage Examples

### Basic Operations
```typescript
import { sum, multiply } from '@muzzamilhassan/mathsss';

// Simple calculations
const total = sum(100, 50); // 150
const area = multiply(10, 15); // 150

// Working with variables
const price = 29.99;
const quantity = 3;
const totalCost = multiply(price, quantity); // 89.97
```

### In Functions
```typescript
import { sum, multiply } from '@muzzamilhassan/mathsss';

function calculateRectangleArea(width: number, height: number): number {
  return multiply(width, height);
}

function calculateTotal(items: number[]): number {
  return items.reduce((acc, item) => sum(acc, item), 0);
}

// Usage
const area = calculateRectangleArea(5, 10); // 50
const total = calculateTotal([10, 20, 30, 40]); // 100
```

## 🔧 Development

### Building
```bash
npm run build
```

### TypeScript
This package is written in TypeScript and includes type definitions. The source code is compiled to JavaScript in the `dist` folder.

## 📄 License

ISC License

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on the GitHub repository.

---

**Made with ❤️ by Muzzamil Hassan**
