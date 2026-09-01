// JavaScript Logical 10 Problems Suite

const jsLogicProblems = [
  {
    id: "logic-1",
    num: 1,
    title: "Check Even or Odd Number",
    problem: "Write a JavaScript program to determine whether a given integer is Even or Odd.",
    example: {
      input: "num = 10",
      output: "10 is an Even number"
    },
    example2: {
      input: "num = 7",
      output: "7 is an Odd number"
    },
    logic: "An integer is divisible by 2 with no remainder if it is Even. If dividing the integer by 2 leaves a remainder of 1, it is Odd. In JavaScript, we use the modulus operator (`%`) to find the remainder of division by 2. If `num % 2 === 0`, it is Even; otherwise, it is Odd.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read or accept the input number `num`.",
      "Step 3: Check condition `if (num % 2 === 0)`.",
      "Step 4: If true, print/return that the number is 'Even'.",
      "Step 5: If false, print/return that the number is 'Odd'.",
      "Step 6: End."
    ],
    code: `function checkEvenOrOdd(num) {
  // Check if remainder when divided by 2 is 0
  if (num % 2 === 0) {
    return \`\${num} is an Even number\`;
  } else {
    return \`\${num} is an Odd number\`;
  }
}

// Test cases
console.log(checkEvenOrOdd(10)); // "10 is an Even number"
console.log(checkEvenOrOdd(7));  // "7 is an Odd number"`,
    outputDescription: "When provided 10, the remainder `10 % 2` is 0, returning '10 is an Even number'. When provided 7, `7 % 2` is 1, returning '7 is an Odd number'.",
    lineByLineExplanation: [
      "Line 1: `function checkEvenOrOdd(num)` declares a function taking a number parameter.",
      "Line 3: `if (num % 2 === 0)` calculates the remainder of division by 2 and strictly checks if it equals 0.",
      "Line 4: If the remainder is 0, returns template literal stating the number is Even.",
      "Line 6: Otherwise, returns template literal stating the number is Odd."
    ],
    timeComplexity: "O(1) - Constant time complexity as it performs a single modulo arithmetic operation.",
    spaceComplexity: "O(1) - Constant space complexity requiring no extra memory allocations.",
    edgeCases: "Negative even numbers like -4 return Even (-4 % 2 === 0 in JS). Zero (0) is classified as an Even number.",
    runnerConfig: {
      inputLabel: "Enter a number:",
      inputType: "number",
      defaultValue: 10,
      fnName: "checkEvenOrOdd",
      handlerCode: `function executeLogic(val) {
  const num = parseInt(val, 10);
  if (isNaN(num)) return "Please enter a valid integer.";
  return num % 2 === 0 ? (num + " is an Even number") : (num + " is an Odd number");
}`
    }
  },
  {
    id: "logic-2",
    num: 2,
    title: "Find Largest of Three Numbers",
    problem: "Write a JavaScript program that accepts three numbers and returns the greatest (maximum) among them.",
    example: {
      input: "a = 25, b = 78, c = 42",
      output: "78 is the largest number"
    },
    example2: {
      input: "a = 90, b = 15, c = 30",
      output: "90 is the largest number"
    },
    logic: "To find the largest of three numbers `a`, `b`, and `c`, we can compare `a` with both `b` and `c` using the logical AND (`&&`) operator. If `a >= b` and `a >= c`, then `a` is the largest. Otherwise, if `b >= c`, then `b` is the largest. If neither condition holds, `c` must be the largest. Alternatively, JavaScript provides `Math.max(a, b, c)`.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read three numbers `a`, `b`, and `c`.",
      "Step 3: If `(a >= b && a >= c)`, then `largest = a`.",
      "Step 4: Else if `(b >= a && b >= c)`, then `largest = b`.",
      "Step 5: Else, `largest = c`.",
      "Step 6: Return the largest number.",
      "Step 7: End."
    ],
    code: `function findLargestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return \`\${a} is the largest number\`;
  } else if (b >= a && b >= c) {
    return \`\${b} is the largest number\`;
  } else {
    return \`\${c} is the largest number\`;
  }
}

// Built-in alternative: Math.max(a, b, c)
const largestBuiltin = (a, b, c) => Math.max(a, b, c);

// Test cases
console.log(findLargestOfThree(25, 78, 42)); // "78 is the largest number"
console.log(findLargestOfThree(90, 15, 30)); // "90 is the largest number"`,
    outputDescription: "Compares 25, 78, and 42. Since 78 >= 25 and 78 >= 42, it returns '78 is the largest number'.",
    lineByLineExplanation: [
      "Line 1: Function declaration accepting three numeric arguments `a`, `b`, and `c`.",
      "Line 2: Checks if `a` is greater than or equal to both `b` and `c` using `&&`.",
      "Line 3: If true, returns `a` as the largest.",
      "Line 4: Else if `b` is greater than or equal to both `a` and `c`, returns `b`.",
      "Line 6: If neither is true, `c` is guaranteed to be the largest."
    ],
    timeComplexity: "O(1) - Constant time complexity with a maximum of 2 comparisons.",
    spaceComplexity: "O(1) - Constant auxiliary space.",
    edgeCases: "When all three numbers are equal (e.g. 5, 5, 5), `>=` ensures the condition evaluates correctly without errors.",
    runnerConfig: {
      inputLabel: "Enter 3 numbers (separated by comma):",
      inputType: "text",
      defaultValue: "25, 78, 42",
      fnName: "findLargestOfThree",
      handlerCode: `function executeLogic(val) {
  const parts = val.split(',').map(n => parseFloat(n.trim()));
  if (parts.length < 3 || parts.some(isNaN)) return "Please enter three valid numbers separated by commas (e.g. 25, 78, 42).";
  const [a, b, c] = parts;
  const max = (a >= b && a >= c) ? a : (b >= c ? b : c);
  return "Largest among (" + a + ", " + b + ", " + c + ") is: " + max;
}`
    }
  },
  {
    id: "logic-3",
    num: 3,
    title: "Reverse a String",
    problem: "Write a JavaScript function that takes a string as input and returns the string in reverse order.",
    example: {
      input: "str = 'JavaScript'",
      output: "'tpircSavaJ'"
    },
    example2: {
      input: "str = 'WebLearn'",
      output: "'nraeLbeW'"
    },
    logic: "A string in JavaScript is an indexed sequence of characters. We can reverse a string using two common techniques: 1) Loop-based: Traverse the string from the last character index (`str.length - 1`) down to 0, appending each character to a new reversed string. 2) Method chaining: Convert string to array using `split('')`, reverse the array using `reverse()`, and join back to a string using `join('')`.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read the input string `str`.",
      "Step 3: Initialize an empty string `reversed = ''`.",
      "Step 4: Start a loop from `i = str.length - 1` down to `i >= 0`, decrementing `i` by 1.",
      "Step 5: In each step, append `str[i]` to `reversed`.",
      "Step 6: When the loop ends, return `reversed`.",
      "Step 7: End."
    ],
    code: `// Approach 1: Iterative Loop (Optimal for logic building)
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Approach 2: Built-in Methods
function reverseStringBuiltin(str) {
  return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("WebLearn"));   // "nraeLbeW"`,
    outputDescription: "Iterates through 'JavaScript' backwards from index 9 to index 0, constructing and returning 'tpircSavaJ'.",
    lineByLineExplanation: [
      "Line 2: `let reversed = ''` initializes an empty accumulator string.",
      "Line 3: `for (let i = str.length - 1; i >= 0; i--)` loops backwards starting from the final character index.",
      "Line 4: `reversed += str[i]` appends the current character at index `i` to the result.",
      "Line 6: Returns the accumulated reversed string."
    ],
    timeComplexity: "O(N) - Linear time where N is the length of the string.",
    spaceComplexity: "O(N) - Linear space required to store the new reversed string.",
    edgeCases: "Single character strings ('A') and empty strings ('') return themselves safely without errors.",
    runnerConfig: {
      inputLabel: "Enter a string to reverse:",
      inputType: "text",
      defaultValue: "JavaScript",
      fnName: "reverseString",
      handlerCode: `function executeLogic(val) {
  if (!val) return "Please enter a string.";
  let rev = "";
  for (let i = val.length - 1; i >= 0; i--) {
    rev += val[i];
  }
  return "Original: " + val + "\\nReversed: " + rev;
}`
    }
  },
  {
    id: "logic-4",
    num: 4,
    title: "Check Palindrome String",
    problem: "Write a JavaScript function to check whether a given string or word is a Palindrome (reads the same forward and backward).",
    example: {
      input: "str = 'racecar'",
      output: "'racecar' is a Palindrome"
    },
    example2: {
      input: "str = 'hello'",
      output: "'hello' is NOT a Palindrome"
    },
    logic: "A string is a palindrome if it matches its reverse. We can compare characters from both ends moving inward using two pointers (left at 0, right at length - 1), or reverse the string and check if `reversedStr === originalStr`. We should also normalize case (`toLowerCase()`) for case-insensitive matching.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read input string and convert to lowercase: `str = str.toLowerCase()`.",
      "Step 3: Set `left = 0` and `right = str.length - 1`.",
      "Step 4: While `left < right`: check if `str[left] !== str[right]`. If not equal, return false.",
      "Step 5: Increment `left++` and decrement `right--`.",
      "Step 6: If loop completes without mismatch, return true (is Palindrome).",
      "Step 7: End."
    ],
    code: `function isPalindrome(str) {
  // Normalize string to lowercase
  const cleanStr = str.toLowerCase();
  
  // Two-pointer comparison
  let left = 0;
  let right = cleanStr.length - 1;
  
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return \`"\${str}" is NOT a Palindrome\`;
    }
    left++;
    right--;
  }
  
  return \`"\${str}" is a Palindrome\`;
}

// Test cases
console.log(isPalindrome("racecar")); // Palindrome
console.log(isPalindrome("Madam"));   // Palindrome
console.log(isPalindrome("coding"));  // NOT a Palindrome`,
    outputDescription: "For 'racecar', letters match from both ends (r=r, a=a, c=c), returning that it is a Palindrome. For 'coding', 'c' != 'g', immediately returning NOT a Palindrome.",
    lineByLineExplanation: [
      "Line 3: Converts string to lowercase for case-insensitive validation.",
      "Lines 6-7: Initializes `left` index at start (0) and `right` index at end (`length - 1`).",
      "Line 9: Loops while `left < right`.",
      "Line 10: Compares characters at `left` and `right`. If mismatch found, terminates early with false.",
      "Lines 13-14: Moves pointers inward (`left++`, `right--`)."
    ],
    timeComplexity: "O(N) - Inspects at most N/2 character pairs.",
    spaceComplexity: "O(1) - Constant auxiliary memory with the two-pointer approach.",
    edgeCases: "Single character strings ('a') and empty strings are palindromes by definition.",
    runnerConfig: {
      inputLabel: "Enter a word to test for palindrome:",
      inputType: "text",
      defaultValue: "racecar",
      fnName: "isPalindrome",
      handlerCode: `function executeLogic(val) {
  if (!val.trim()) return "Please enter a word.";
  const clean = val.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = clean.length - 1;
  let isPal = true;
  while (left < right) {
    if (clean[left] !== clean[right]) {
      isPal = false;
      break;
    }
    left++;
    right--;
  }
  return isPal 
    ? '"' + val + '" is a valid Palindrome! ✓' 
    : '"' + val + '" is NOT a Palindrome. ✗';
}`
    }
  },
  {
    id: "logic-5",
    num: 5,
    title: "Find Factorial of a Number",
    problem: "Write a JavaScript function that calculates the Factorial (n!) of a non-negative integer `n`.",
    example: {
      input: "n = 5",
      output: "Factorial of 5 is 120 (5 * 4 * 3 * 2 * 1)"
    },
    example2: {
      input: "n = 0",
      output: "Factorial of 0 is 1"
    },
    logic: "The factorial of a non-negative integer `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`. By mathematical definition, `0! = 1` and `1! = 1`. For `n > 1`, `n! = n * (n - 1) * ... * 1`. Factorials are only defined for non-negative integers.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read the number `n`.",
      "Step 3: If `n < 0`, return error (factorials undefined for negative numbers).",
      "Step 4: If `n === 0 || n === 1`, return 1.",
      "Step 5: Initialize `fact = 1`.",
      "Step 6: Loop from `i = 2` to `n`: multiply `fact = fact * i`.",
      "Step 7: Return `fact`.",
      "Step 8: End."
    ],
    code: `// Iterative Factorial Function
function calculateFactorial(n) {
  if (n < 0) return "Error: Factorial not defined for negative numbers";
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive Alternative:
// const factRecursive = n => (n <= 1 ? 1 : n * factRecursive(n - 1));

// Test cases
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(0)); // 1
console.log(calculateFactorial(7)); // 5040`,
    outputDescription: "For input 5: multiplies 1 * 2 * 3 * 4 * 5 to yield 120.",
    lineByLineExplanation: [
      "Line 2: Validates input to ensure `n` is non-negative.",
      "Line 3: Base cases: 0! and 1! immediately return 1.",
      "Line 5: Initializes accumulator `result = 1`.",
      "Line 6: `for (let i = 2; i <= n; i++)` iterates from 2 up to `n`.",
      "Line 7: `result *= i` multiplies running product by current number."
    ],
    timeComplexity: "O(N) - Loops N times from 2 to N.",
    spaceComplexity: "O(1) - Constant memory storage.",
    edgeCases: "Factorial of 0 is 1. Very large numbers (e.g. n > 170) return `Infinity` in standard JavaScript 64-bit float numbers unless using `BigInt`.",
    runnerConfig: {
      inputLabel: "Enter a positive integer (0-20):",
      inputType: "number",
      defaultValue: 5,
      fnName: "calculateFactorial",
      handlerCode: `function executeLogic(val) {
  const n = parseInt(val, 10);
  if (isNaN(n) || n < 0) return "Please enter a non-negative integer (0, 1, 2, ...).";
  if (n > 20) return "Please enter a number <= 20 to prevent integer overflow.";
  let res = 1;
  let steps = [];
  for (let i = n; i >= 1; i--) {
    res *= i;
    steps.push(i);
  }
  return n + "! = " + (steps.length ? steps.join(" × ") : "1") + " = " + res;
}`
    }
  },
  {
    id: "logic-6",
    num: 6,
    title: "Generate Fibonacci Series",
    problem: "Write a JavaScript program that generates and prints the first `N` terms of the Fibonacci sequence.",
    example: {
      input: "N = 8",
      output: "[0, 1, 1, 2, 3, 5, 8, 13]"
    },
    example2: {
      input: "N = 5",
      output: "[0, 1, 1, 2, 3]"
    },
    logic: "The Fibonacci sequence starts with `0` and `1`. Every subsequent term is the sum of the two preceding terms: `F(n) = F(n-1) + F(n-2)`. We initialize an array with `[0, 1]`, and use a loop to append the sum of the last two elements until we reach `N` elements.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read count of terms `n`.",
      "Step 3: If `n <= 0`, return empty array `[]`.",
      "Step 4: If `n === 1`, return `[0]`.",
      "Step 5: Initialize array `fib = [0, 1]`.",
      "Step 6: Loop from `i = 2` to `n - 1`: calculate `next = fib[i - 1] + fib[i - 2]` and append to `fib`.",
      "Step 7: Return `fib` array.",
      "Step 8: End."
    ],
    code: `function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextTerm = series[i - 1] + series[i - 2];
    series.push(nextTerm);
  }
  return series;
}

// Test cases
console.log(generateFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]`,
    outputDescription: "For N=8, generates the sequence starting with 0, 1, and iteratively adds previous two elements: 0, 1, 1, 2, 3, 5, 8, 13.",
    lineByLineExplanation: [
      "Line 2: Handles edge case when `n <= 0` by returning empty array.",
      "Line 3: Handles edge case for `n = 1` by returning `[0]`.",
      "Line 5: Initializes the first two standard Fibonacci numbers in an array `[0, 1]`.",
      "Line 6: Loops from index 2 up to `n - 1`.",
      "Line 7: Adds the previous two terms `series[i-1] + series[i-2]`.",
      "Line 8: Pushes the new term to the array."
    ],
    timeComplexity: "O(N) - Computes each term in a single pass.",
    spaceComplexity: "O(N) - Stores N terms in the result array.",
    edgeCases: "n = 1 returns [0]; n = 2 returns [0, 1]. Handles n <= 0 with empty array.",
    runnerConfig: {
      inputLabel: "Enter number of terms N (e.g. 8):",
      inputType: "number",
      defaultValue: 8,
      fnName: "generateFibonacci",
      handlerCode: `function executeLogic(val) {
  const n = parseInt(val, 10);
  if (isNaN(n) || n <= 0) return "Please enter a positive integer > 0.";
  if (n > 50) return "Please enter N <= 50 to prevent overflow.";
  if (n === 1) return "Fibonacci (1 term): [0]";
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return "Fibonacci (" + n + " terms):\\n" + fib.join(", ");
}`
    }
  },
  {
    id: "logic-7",
    num: 7,
    title: "Check Prime Number",
    problem: "Write a JavaScript function to check whether a given integer is a Prime number (divisible only by 1 and itself).",
    example: {
      input: "num = 17",
      output: "17 is a Prime number"
    },
    example2: {
      input: "num = 15",
      output: "15 is NOT a Prime number (divisible by 3 and 5)"
    },
    logic: "A Prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Numbers <= 1 are not prime. 2 is the only even prime number. For numbers > 2, we can test divisibility from `2` up to the square root of the number (`Math.sqrt(num)`). If any divisor evenly divides `num`, it is composite; otherwise, it is prime.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read number `num`.",
      "Step 3: If `num <= 1`, return false (not prime).",
      "Step 4: If `num === 2`, return true (2 is prime).",
      "Step 5: If `num % 2 === 0`, return false (even numbers > 2 are not prime).",
      "Step 6: Loop `i` from 3 to `Math.sqrt(num)` with step `i += 2`: if `num % i === 0`, return false.",
      "Step 7: If no divisor found, return true (is Prime).",
      "Step 8: End."
    ],
    code: `function isPrime(num) {
  // Numbers <= 1 are not prime
  if (num <= 1) return false;
  // 2 is the only even prime number
  if (num === 2) return true;
  // All other even numbers are composite
  if (num % 2 === 0) return false;

  // Check odd divisors up to square root of num
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false; // Found divisor
    }
  }

  return true; // No divisors found
}

// Test cases
console.log(isPrime(17)); // true (Prime)
console.log(isPrime(15)); // false (Composite)
console.log(isPrime(2));  // true (Prime)`,
    outputDescription: "17 is checked against odd divisors up to sqrt(17) (approx 4.12). No divisors exist, returning true. 15 is divisible by 3, immediately returning false.",
    lineByLineExplanation: [
      "Line 3: Eliminates numbers <= 1.",
      "Line 5: Identifies 2 as a prime number.",
      "Line 7: Filters out all other even numbers in O(1) time.",
      "Lines 10-14: Checks odd divisors up to `Math.sqrt(num)`. If `num % i === 0`, returns false.",
      "Line 16: Returns true if no divisors were found."
    ],
    timeComplexity: "O(sqrt(N)) - Highly optimized trial division inspecting only up to sqrt(N).",
    spaceComplexity: "O(1) - Constant auxiliary space.",
    edgeCases: "0, 1, and negative numbers return false. 2 returns true.",
    runnerConfig: {
      inputLabel: "Enter a positive integer:",
      inputType: "number",
      defaultValue: 17,
      fnName: "isPrime",
      handlerCode: `function executeLogic(val) {
  const num = parseInt(val, 10);
  if (isNaN(num)) return "Please enter a valid integer.";
  if (num <= 1) return num + " is NOT a Prime number (primes must be > 1).";
  if (num === 2) return "2 is a Prime number (the only even prime).";
  if (num % 2 === 0) return num + " is NOT a Prime number (divisible by 2).";
  
  let isP = true;
  let divisor = null;
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      isP = false;
      divisor = i;
      break;
    }
  }
  return isP 
    ? (num + " is a Prime number! ✓") 
    : (num + " is NOT a Prime number (divisible by " + divisor + "). ✗");
}`
    }
  },
  {
    id: "logic-8",
    num: 8,
    title: "Find Sum of Digits of a Number",
    problem: "Write a JavaScript function that calculates the sum of all individual digits in a given positive integer.",
    example: {
      input: "num = 12345",
      output: "Sum of digits is 15 (1 + 2 + 3 + 4 + 5)"
    },
    example2: {
      input: "num = 908",
      output: "Sum of digits is 17 (9 + 0 + 8)"
    },
    logic: "We can extract digits mathematically using modulo 10 (`num % 10`) to get the last digit, and integer division by 10 (`Math.floor(num / 10)`) to remove the last digit until the number reaches 0. Alternatively, convert the number to string, split into character digits, and accumulate using `.reduce()`.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read input integer `num` (use `Math.abs(num)` to handle negative inputs).",
      "Step 3: Initialize `sum = 0`.",
      "Step 4: While `num > 0`:",
      "         a. Extract last digit: `digit = num % 10`.",
      "         b. Add to sum: `sum += digit`.",
      "         c. Remove last digit: `num = Math.floor(num / 10)`.",
      "Step 5: Return `sum`.",
      "Step 6: End."
    ],
    code: `// Mathematical Digit Extraction
function sumOfDigits(num) {
  let n = Math.abs(num);
  let sum = 0;

  while (n > 0) {
    sum += n % 10;           // Extract last digit
    n = Math.floor(n / 10);  // Remove last digit
  }

  return sum;
}

// Alternative functional approach:
// const sumDigitsStr = n => Math.abs(n).toString().split('').reduce((acc, d) => acc + Number(d), 0);

// Test cases
console.log(sumOfDigits(12345)); // 15
console.log(sumOfDigits(908));   // 17`,
    outputDescription: "Extracts digits 5, 4, 3, 2, 1 successively and accumulates their sum: 5 + 4 + 3 + 2 + 1 = 15.",
    lineByLineExplanation: [
      "Line 2: `let n = Math.abs(num)` guarantees positive values.",
      "Line 3: `let sum = 0` initializes accumulator variable.",
      "Line 5: `while (n > 0)` continues as long as digits remain.",
      "Line 6: `n % 10` extracts the rightmost digit and adds to sum.",
      "Line 7: `Math.floor(n / 10)` strips the rightmost digit.",
      "Line 10: Returns final calculated sum."
    ],
    timeComplexity: "O(D) - Where D is the number of digits in the integer (equivalent to O(log10 N)).",
    spaceComplexity: "O(1) - Constant space.",
    edgeCases: "Single digit numbers like 7 return 7. Negative numbers (e.g. -45) have digits summed as 4 + 5 = 9 using Math.abs.",
    runnerConfig: {
      inputLabel: "Enter an integer (e.g. 12345):",
      inputType: "number",
      defaultValue: 12345,
      fnName: "sumOfDigits",
      handlerCode: `function executeLogic(val) {
  const raw = parseInt(val, 10);
  if (isNaN(raw)) return "Please enter a valid integer.";
  let n = Math.abs(raw);
  let sum = 0;
  let digits = [];
  while (n > 0) {
    let d = n % 10;
    digits.unshift(d);
    sum += d;
    n = Math.floor(n / 10);
  }
  return "Digits of " + raw + ": " + digits.join(" + ") + " = " + sum;
}`
    }
  },
  {
    id: "logic-9",
    num: 9,
    title: "Find Largest Number in an Array",
    problem: "Write a JavaScript function that finds and returns the largest (maximum) numeric element in an array.",
    example: {
      input: "arr = [14, 58, 20, 77, 91, 43]",
      output: "Largest element is 91"
    },
    example2: {
      input: "arr = [-10, -5, -20, -2]",
      output: "Largest element is -2"
    },
    logic: "Initialize a variable `max` with the first element of the array (`arr[0]`). Iterate through the remaining elements from index 1 to `length - 1`. If the current element `arr[i]` is greater than `max`, update `max = arr[i]`. When the loop finishes, `max` holds the greatest value in the array.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read array `arr`.",
      "Step 3: If array is empty, return null or error.",
      "Step 4: Set `max = arr[0]`.",
      "Step 5: Loop `i` from 1 to `arr.length - 1`.",
      "Step 6: If `arr[i] > max`, set `max = arr[i]`.",
      "Step 7: After loop terminates, return `max`.",
      "Step 8: End."
    ],
    code: `// Iterative traversal (Standard Algorithm)
function findMaxInArray(arr) {
  if (!arr || arr.length === 0) return null;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Built-in Spread alternative:
const findMaxBuiltin = arr => Math.max(...arr);

// Test cases
console.log(findMaxInArray([14, 58, 20, 77, 91, 43])); // 91
console.log(findMaxInArray([-10, -5, -20, -2]));        // -2`,
    outputDescription: "Initializes max = 14. Compares with 58 (max becomes 58), 20 (no change), 77 (max becomes 77), 91 (max becomes 91), 43 (no change). Final result is 91.",
    lineByLineExplanation: [
      "Line 2: Validates that array exists and contains at least one element.",
      "Line 4: Sets baseline `max = arr[0]` (Crucial: never initialize with 0, as negative arrays would fail!).",
      "Line 5: Iterates through array elements from index 1.",
      "Lines 6-8: If `arr[i] > max`, updates `max` with new largest value.",
      "Line 10: Returns largest element."
    ],
    timeComplexity: "O(N) - Single linear scan visiting each element once.",
    spaceComplexity: "O(1) - Constant auxiliary memory.",
    edgeCases: "Arrays containing all negative numbers (e.g. [-5, -2, -9]) work correctly because max is initialized to the first array element.",
    runnerConfig: {
      inputLabel: "Enter comma-separated numbers:",
      inputType: "text",
      defaultValue: "14, 58, 20, 77, 91, 43",
      fnName: "findMaxInArray",
      handlerCode: `function executeLogic(val) {
  const parts = val.split(',').map(n => parseFloat(n.trim()));
  if (parts.length === 0 || parts.some(isNaN)) return "Please enter valid comma-separated numbers.";
  let max = parts[0];
  for (let i = 1; i < parts.length; i++) {
    if (parts[i] > max) max = parts[i];
  }
  return "Array: [" + parts.join(", ") + "]\\nLargest Number: " + max;
}`
    }
  },
  {
    id: "logic-10",
    num: 10,
    title: "Count Vowels in a String",
    problem: "Write a JavaScript function that counts and returns the total number of vowels ('a', 'e', 'i', 'o', 'u') present in a given string.",
    example: {
      input: "str = 'Web Development'",
      output: "Total vowels: 5 ('e', 'e', 'e', 'o', 'e')"
    },
    example2: {
      input: "str = 'JavaScript'",
      output: "Total vowels: 3 ('a', 'a', 'i')"
    },
    logic: "Define a reference set or string of vowels `'aeiouAEIOU'`. Initialize a `count = 0`. Iterate through each character of the input string. If the vowel reference includes the current character (`vowels.includes(char)`), increment `count++`. Return `count` after inspecting all characters.",
    algorithm: [
      "Step 1: Start the program.",
      "Step 2: Read input string `str`.",
      "Step 3: Define `vowels = 'aeiouAEIOU'` and `count = 0`.",
      "Step 4: Loop through each character of `str`.",
      "Step 5: If `vowels.includes(str[i])`, increment `count++`.",
      "Step 6: Return `count`.",
      "Step 7: End."
    ],
    code: `function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

// Regex alternative:
// const countVowelsRegex = str => (str.match(/[aeiou]/gi) || []).length;

// Test cases
console.log(countVowels("Web Development")); // 5
console.log(countVowels("JavaScript"));      // 3
console.log(countVowels("Rhythm"));          // 0`,
    outputDescription: "In 'Web Development', counts letters e (x4) and o (x1), totaling 5 vowels. In 'Rhythm', no vowels exist, returning 0.",
    lineByLineExplanation: [
      "Line 2: Defines constant string `vowels` containing uppercase and lowercase vowel letters.",
      "Line 3: Initializes `count = 0`.",
      "Line 5: Loops through each character of the string.",
      "Line 6: `vowels.includes(str[i])` checks if current character is a vowel.",
      "Line 7: Increments counter.",
      "Line 11: Returns total count."
    ],
    timeComplexity: "O(N) - Where N is string length, as checking membership in a 10-char vowel string is O(1).",
    spaceComplexity: "O(1) - Constant auxiliary space.",
    edgeCases: "Strings without vowels (e.g. 'xyz', 'sky') correctly return 0. Handles mixed upper and lowercase letters seamlessly.",
    runnerConfig: {
      inputLabel: "Enter a sentence or word:",
      inputType: "text",
      defaultValue: "Web Development",
      fnName: "countVowels",
      handlerCode: `function executeLogic(val) {
  if (!val.trim()) return "Please enter some text.";
  const vowels = "aeiouAEIOU";
  let count = 0;
  let found = [];
  for (let char of val) {
    if (vowels.includes(char)) {
      count++;
      found.push(char);
    }
  }
  return "Input: \\"" + val + "\\"\\nVowels Found: " + count + " (" + found.join(", ") + ")";
}`
    }
  }
];

module.exports = jsLogicProblems;
