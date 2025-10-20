// function occurences(text, character){
//     // let count = 0;
//     // for (var i = 0; i < text.length; i++){
//     //     if (text.charAt(i) === character){
//     //         count++;
//     //     }
//     // }
//     // return count;
        //SAU
//     return text.split(character).length - 1;
// }

//SAU prin expresie lambda
let occurences = (text, character) => text.split(character).length - 1;

console.log(occurences("sample text", "e"));