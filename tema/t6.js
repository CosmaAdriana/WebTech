const sampleString = 'The Quick Brown Fox Jumps Over The Lazy Dog';

const getLetterFrequencies = (text) => {
    const result = {};
    let totalLetters = 0;


    for (let char of text) {
        if (char !== ' ') { 
            totalLetters++;

            if (char in result) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    for (let char in result) {
        result[char] /= totalLetters;
    }

    return result;
};

console.log(getLetterFrequencies(sampleString));
