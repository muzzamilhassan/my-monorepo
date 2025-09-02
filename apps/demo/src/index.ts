import { sum, multiply } from "@muzzamilhassan/mathsss";
import {
  capitalize,
  camelCase,
  randomInt,
  average,
  unique,
  chunk,
  flatten,
  shuffle,
  deepClone,
  mergeObjects,
  formatDate,
  daysBetween,
  delay,
  retry,
  isEmail,
  isUrl,
  isNumeric,
} from "@muzzamilhassan/utilsss";

console.log(sum(5, 7)); // 12
console.log(multiply(3, 4)); // 12

console.log(capitalize("hello")); // Hello
console.log(camelCase("hello_world-name")); // helloWorldName
console.log(randomInt(10, 20)); // 14 (random)
console.log(average([10, 20, 30])); // 20

console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(flatten([1, [2, 3], [4]])); // [1,2,3,4]

console.log(formatDate(new Date())); // Sep 2, 2025
console.log(daysBetween(new Date("2025-01-01"), new Date("2025-01-10"))); // 9

await delay(1000); // waits 1 second
await retry(() => fetch("https://api.github.com").then((r) => r.json()));

console.log(isEmail("test@mail.com")); // true
console.log(isUrl("https://example.com")); // true
console.log(isNumeric("123.45")); // true
