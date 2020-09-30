// ----------------------------------------------------------------------------
// SOLUTION
const UrlEncodeWhitespaces = (str="") => {
    let url_str = new Array();
    str = str.trim();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") url_str.push("%20"); 
        else url_str.push(str[i]);
    }
    return url_str.join('');
}

// ----------------------------------------------------------------------------
// EXAMPLES AND TESTS
const string1 = "Mr John Smith"
const string1_A = "Mr%20John%20Smith";

console.log("Expected answer: \t", string1_A);
console.log("Actual Output: \t\t", UrlEncodeWhitespaces(string1));