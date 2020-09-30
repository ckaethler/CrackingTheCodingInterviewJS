// ----------------------------------------------------------------------------
// SOLUTION
const stringCompression = (str="") => {
    if (str.length <= 2) return str; // base case

    let str_arr = new Array();
    let char_count = 0;
    str_arr.push(str[0]); // starts immediately with first char

    for (let i = 0; i < str.length; i++) {
        let last_char = str_arr[str_arr.length-1]; // last unique character
        if (str[i] === last_char) char_count++;
        else if (str[i] !== last_char) {
            str_arr.push(char_count, str[i]); // records count & new character
            char_count = 1; // resets count
        }
    }
    str_arr.push(char_count); // records final char count
    return (str_arr.length < str.length) ? str_arr.join('') : str;
}

// ----------------------------------------------------------------------------
// TESTS
string1 = "aabcccccaaa";
answer_string1 = "a2b1c5a3";


console.log(stringCompression(string1));
console.log("Answer: ", answer_string1);

console.log(stringCompression("aa"));
console.log(stringCompression("aab"));