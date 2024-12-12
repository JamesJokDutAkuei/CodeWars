//Creat a function that takes a sting and converts all the vowels in odd positions from lower to upper case.

function james(str){
    let vowels = ["a", "e", "i", "o", "u"]
    return str.split("").map((sty, index) => {
       //((vowels.includes(str)) && (index % 2 === 1)) ? sty.toUpperCase() : sty;
       if (vowels.includes(sty) && index % 2 === 1){
           return sty.toUpperCase()
       }
        return sty;
    }).join("")
}
console.log(james("i am a guy"))

//output: "i am A guy"

~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
ownVowelsCapitalization.js[+] [unix] (01:59 01/01/1970)                                                                                                                                                    2,1 All
-- INSERT --

