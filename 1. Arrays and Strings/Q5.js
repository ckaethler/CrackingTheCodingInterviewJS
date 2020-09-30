// ----------------------------------------------------------------------------
// SOLUTION
const onlyOneEdit = (str1="", str2="") => {
    if (Math.abs((str1.length - str2.length) > 1)) return false;

    let edit_found = false;
    let j = 0; // second string runner

    for (let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[j]) {
            if(edit_found) return false;
            if (str1.length > str2.length) i++;
            else if (str1.length < str1.length) j++;
            // if different characters, do nothing
            edit_found = true;
        }
        j++;
    }
    return true;
}

// ----------------------------------------------------------------------------
// TESTS
console.log(onlyOneEdit("pale", "ple"), true);
console.log(onlyOneEdit("pales", "pale"), true);
console.log(onlyOneEdit("pale", "bale"), true);
console.log(onlyOneEdit("pale", "bake"), false);
