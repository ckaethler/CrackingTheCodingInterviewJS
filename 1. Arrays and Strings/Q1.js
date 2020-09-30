// ----------------------------------------------------------------------------
// QUESTION 1 SOLUTION
const isUniqueString = (str="") => {
    if (str.length > 256) {
        return false;
    }

    str_map = {};
    for(let i  = 0; i < str.length; i++) {
        if (str_map[str[i]]) return false;
        else str_map[str[i]] = true;
    }

    return true;
}

// ----------------------------------------------------------------------------
// TESTS
const test1 = "abccdhfhjek";
const test2 = "asbcdefhijk";

console.log("Test 1 expected answer: false\nActual answer:" + isUniqueString(test1));
console.log("Test 2 expected answer: true\nActual answer:" + isUniqueString(test2))