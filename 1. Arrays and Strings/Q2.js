// ----------------------------------------------------------------------------
// SOLUTION 1
// string sort helper function
const stringSort = (str="") => {
    return str.split('').sort().join('');
}

const isPermutation = (strA="", strB="") => {
    if (strA.length !== strB.length) {
        return false;
    }
    return stringSort(strA) === stringSort(strB);
}

// ----------------------------------------------------------------------------
// TESTS
const string1 = "crabs";
const string2 = "bracs";
const string3 = "trabs";
const string4 = "crabss";

console.log(isPermutation(string1, string2), true);
console.log(isPermutation(string1, string3), false);
console.log(isPermutation(string1, string4), false);

// ----------------------------------------------------------------------------
// SOLUTION 2
const isStringPermutation = (strA="", strB="") => {
    if (strA.length !== strB.length) return false;

    let letters = new Array(128).fill(0, 0, 128);

    for (let i = 0; i < strA.length; i++) letters[strA.charCodeAt(i)]++;
    for (let i = 0; i < strB.length; i++) {
        if (letters[strB.charCodeAt(i)] === 0) return false;
        letters[strB.charCodeAt(i)]--;
    }
    return true;
}

// ----------------------------------------------------------------------------
// TESTS
console.log(isStringPermutation(string1, string2), true);
console.log(isStringPermutation(string1, string3), false);
console.log(isStringPermutation(string1, string4), false);