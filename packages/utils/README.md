# @muzzamilhassan/utilsss

A comprehensive TypeScript utility library providing essential helper functions for common programming tasks. This package includes utilities for strings, numbers, arrays, objects, dates, promises, and validation.

## 📦 Installation

```bash
npm install @muzzamilhassan/utilsss
```

```bash
yarn add @muzzamilhassan/utilsss
```

```bash
pnpm add @muzzamilhassan/utilsss
```

## 🚀 Features

- **TypeScript Support**: Full TypeScript definitions included
- **Comprehensive**: 25+ utility functions covering common use cases
- **Lightweight**: Optimized for minimal bundle size
- **ES Modules**: Modern ES module support
- **Well-tested**: Reliable and production-ready functions

## 📚 API Reference

### 🔹 String Utilities

#### `capitalize(str: string): string`
Capitalizes the first letter of a string and converts the rest to lowercase.

```typescript
import { capitalize } from '@muzzamilhassan/utilsss';

capitalize("hello world"); // "Hello world"
capitalize("JAVASCRIPT"); // "Javascript"
capitalize(""); // ""
```

#### `truncate(str: string, length: number): string`
Truncates a string to the specified length and adds "..." if truncated.

```typescript
import { truncate } from '@muzzamilhassan/utilsss';

truncate("This is a long string", 10); // "This is a..."
truncate("Short", 10); // "Short"
```

#### `camelCase(str: string): string`
Converts a string to camelCase format.

```typescript
import { camelCase } from '@muzzamilhassan/utilsss';

camelCase("hello-world"); // "helloWorld"
camelCase("user_name"); // "userName"
camelCase("First Name"); // "firstName"
```

### 🔹 Number Utilities

#### `clamp(num: number, min: number, max: number): number`
Clamps a number between a minimum and maximum value.

```typescript
import { clamp } from '@muzzamilhassan/utilsss';

clamp(5, 0, 10); // 5
clamp(-5, 0, 10); // 0
clamp(15, 0, 10); // 10
```

#### `randomInt(min: number, max: number): number`
Generates a random integer between min and max (inclusive).

```typescript
import { randomInt } from '@muzzamilhassan/utilsss';

randomInt(1, 10); // Random number between 1 and 10
randomInt(0, 1); // Random number between 0 and 1
```

#### `average(nums: number[]): number`
Calculates the average of an array of numbers.

```typescript
import { average } from '@muzzamilhassan/utilsss';

average([1, 2, 3, 4, 5]); // 3
average([10, 20, 30]); // 20
average([]); // 0
```

### 🔹 Array Utilities

#### `unique<T>(arr: T[]): T[]`
Removes duplicate values from an array.

```typescript
import { unique } from '@muzzamilhassan/utilsss';

unique([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
unique(['a', 'b', 'a', 'c']); // ['a', 'b', 'c']
```

#### `chunk<T>(arr: T[], size: number): T[][]`
Splits an array into chunks of the specified size.

```typescript
import { chunk } from '@muzzamilhassan/utilsss';

chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]
chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
```

#### `flatten<T>(arr: (T | T[])[]): T[]`
Flattens a nested array by one level.

```typescript
import { flatten } from '@muzzamilhassan/utilsss';

flatten([1, [2, 3], [4, 5]]); // [1, 2, 3, 4, 5]
flatten(['a', ['b', 'c'], 'd']); // ['a', 'b', 'c', 'd']
```

#### `shuffle<T>(arr: T[]): T[]`
Randomly shuffles the elements of an array.

```typescript
import { shuffle } from '@muzzamilhassan/utilsss';

shuffle([1, 2, 3, 4, 5]); // Randomly shuffled array
shuffle(['a', 'b', 'c']); // Randomly shuffled array
```

### 🔹 Object Utilities

#### `deepClone<T>(obj: T): T`
Creates a deep clone of an object using JSON serialization.

```typescript
import { deepClone } from '@muzzamilhassan/utilsss';

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
// cloned is a completely independent copy
```

#### `isEmptyObject(obj: object): boolean`
Checks if an object has no own enumerable properties.

```typescript
import { isEmptyObject } from '@muzzamilhassan/utilsss';

isEmptyObject({}); // true
isEmptyObject({ a: 1 }); // false
isEmptyObject(Object.create(null)); // true
```

#### `mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U`
Merges two objects, with properties from obj2 overriding obj1.

```typescript
import { mergeObjects } from '@muzzamilhassan/utilsss';

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
mergeObjects(obj1, obj2); // { a: 1, b: 3, c: 4 }
```

### 🔹 Date Utilities

#### `formatDate(date: Date, locale = "en-US"): string`
Formats a date in a readable format.

```typescript
import { formatDate } from '@muzzamilhassan/utilsss';

formatDate(new Date()); // "Dec 15, 2024"
formatDate(new Date(), 'de-DE'); // "15. Dez. 2024"
```

#### `daysBetween(d1: Date, d2: Date): number`
Calculates the number of days between two dates.

```typescript
import { daysBetween } from '@muzzamilhassan/utilsss';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
daysBetween(today, tomorrow); // 1
```

### 🔹 Promise Utilities

#### `delay(ms: number): Promise<void>`
Creates a promise that resolves after the specified milliseconds.

```typescript
import { delay } from '@muzzamilhassan/utilsss';

// Wait for 1 second
await delay(1000);
console.log('1 second has passed');
```

#### `retry<T>(fn: () => Promise<T>, retries = 3, delayMs = 500): Promise<T>`
Retries a function multiple times if it fails.

```typescript
import { retry } from '@muzzamilhassan/utilsss';

const fetchData = async () => {
  // Simulate API call that might fail
  const response = await fetch('/api/data');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

// Retry up to 3 times with 1 second delay
const data = await retry(fetchData, 3, 1000);
```

### 🔹 Validation Utilities

#### `isEmail(str: string): boolean`
Validates if a string is a valid email address.

```typescript
import { isEmail } from '@muzzamilhassan/utilsss';

isEmail('user@example.com'); // true
isEmail('invalid-email'); // false
isEmail(''); // false
```

#### `isUrl(str: string): boolean`
Validates if a string is a valid URL.

```typescript
import { isUrl } from '@muzzamilhassan/utilsss';

isUrl('https://example.com'); // true
isUrl('http://localhost:3000'); // true
isUrl('not-a-url'); // false
```

#### `isNumeric(value: string | number): boolean`
Checks if a value is numeric.

```typescript
import { isNumeric } from '@muzzamilhassan/utilsss';

isNumeric('123'); // true
isNumeric(456); // true
isNumeric('12.34'); // true
isNumeric('abc'); // false
```

## 💻 Usage Examples

### Complete Example
```typescript
import { 
  capitalize, 
  truncate, 
  unique, 
  shuffle, 
  formatDate,
  isEmail 
} from '@muzzamilhassan/utilsss';

// String processing
const title = capitalize("hello world"); // "Hello world"
const summary = truncate("This is a very long description", 20); // "This is a very long..."

// Array manipulation
const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = unique(numbers); // [1, 2, 3, 4]
const shuffledNumbers = shuffle(uniqueNumbers); // Randomly shuffled

// Date formatting
const today = formatDate(new Date()); // "Dec 15, 2024"

// Validation
const isValidEmail = isEmail("user@example.com"); // true
```

### Real-world Scenarios
```typescript
import { 
  chunk, 
  average, 
  delay, 
  retry,
  deepClone 
} from '@muzzamilhassan/utilsss';

// Pagination
const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
const pages = chunk(items, 2); // [['item1', 'item2'], ['item3', 'item4'], ['item5']]

// Data analysis
const scores = [85, 92, 78, 96, 88];
const averageScore = average(scores); // 87.8

// API retry logic
const fetchUserData = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) throw new Error('User not found');
  return response.json();
};

const userData = await retry(() => fetchUserData('123'), 3, 1000);

// Deep cloning for state management
const originalState = { user: { name: 'John', preferences: { theme: 'dark' } } };
const newState = deepClone(originalState);
```

## 🔧 Development

### Building
```bash
npm run build
```

### TypeScript
This package is written in TypeScript and includes comprehensive type definitions. The source code is compiled to JavaScript in the `dist` folder.

## 📄 License

ISC License

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

If you have any questions, need help, or want to report a bug, please open an issue on the GitHub repository.

## 📈 Performance

All utility functions are optimized for performance and have minimal overhead. The package is designed to be tree-shakeable, so only the functions you import will be included in your bundle.

---

**Made with ❤️ by Muzzamil Hassan**
