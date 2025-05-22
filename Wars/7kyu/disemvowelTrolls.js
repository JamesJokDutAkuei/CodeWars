// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
function disemvowel(str) {
    const vowels = ['a', 'i', 'e', 'o', 'u',  'A', 'E', 'I', 'O', 'U'];
    let store = '';
    for(const char of str) {
        if(!vowels.includes(char)){
            store += char;
        }
    }
    return store;
}

console.log(disemvowel("This website is for losers LOL!"));
