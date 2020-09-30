// ----------------------------------------------------------------------------
// SOLUTION
const isPermutationPalindrome = (str="") => {
    let charCount = new Map();
    let oddCount = 0;

    for (let i = 0; i < str.length; i++) {
        let current_char = str[i].toLowerCase();

        if (str[i] === " ") {}// do nothing
        else if (charCount.has(current_char)) {
            let current_count = charCount.get(current_char) + 1;
            charCount.set(current_char, current_count);
        }
        else charCount.set(current_char, 1);
    }

    for (let value of charCount.values()) {
        if(value % 2 === 1) oddCount++;
    }

    return Boolean(oddCount <= 1);
}

// ----------------------------------------------------------------------------
// EXAMPLES / TESTS
const palindrome_test_1 = ["palindrome", false];
const palindrome_test_2 = ["Taco cat", true];
// console.log("Expected Output:\t", palindrome_test_1[1]);
// console.log("Actual Output:\t", isPermutationPalindrome(palindrome_test_1[0]));
console.log("Expected Output:\t", palindrome_test_2[1]);
console.log("Actual Output:\t", isPermutationPalindrome(palindrome_test_2[0]));