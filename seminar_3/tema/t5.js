const textFinal = (text, dictionary) => {
    const cuvinte = text.split("");

    const rezultat = cuvinte.map(cuvant => {
        if (dictionary.includes(cuvant)) {
            if(cuvant.length  > 2) {
                return cuvant[0] + "*".repeat(cuvant.length - 2) + cuvant[cuvant.length - 1];
            } else {
                return "*".repeat(cuvant.length);
            }
        }
        return cuvant;
    });
    return rezultat.join("");
}

    const text = "javascript este minunat"
    const censuredWords = ["este"]

    console.log(textFinal(text, censuredWords))