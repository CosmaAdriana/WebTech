const formatText = (text, words) => {
    let result = text;
    for(let key in words){
        const placeholder = `{${key}}`;
        result = result.replaceAll(placeholder, words[key]);
    }
    return result;
}

const text = "un {animal} este {descriere}"
const word = {
    animal: "calut",
    descriere: "dragut"
}

console.log(formatText(text, word));