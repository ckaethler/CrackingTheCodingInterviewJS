// ----------------------------------------------------------------------------
// SOLUTION
const isRotation = (str1 = "", str2 = "") => {
    if (str1.length !== str2.length || str1.length < 0) return false
    str1 = str1.concat(str1);
    console.log(str1);
    return isSubstring(str1, str2);
}

const isSubstring = (str1="", str2="") => {
    return str1.includes(str2);
}

// ----------------------------------------------------------------------------
// TESTS
str1 = "erbottlewat";
str2 = "waterbottle";

console.log(isRotation(str1, str2));