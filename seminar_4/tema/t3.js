function expGen(){
    const cache = {};

    const putere = (baza, exponent) => {
        if (!cache[baza]) {
            cache[baza] = [];
        }
        
        if(cache[baza][exponent] != undefined){
            console.log(`found ${baza} ^ ${exponent}`);
            return cache[baza][exponent];
        } 
        console.log(`calculated ${baza}^${exponent}`);
        if(exponent == 0 ){
            cache[baza][0] = 1;
            return 1;
        }
        if(exponent == 1){
            cache[baza][1] = baza;
            return baza;
        }

        const rez = baza * putere(baza, exponent - 1);
        cache[baza][exponent] = rez;
        return rez;
    }
        return putere;
}

const exp = expGen();
console.log(exp(2, 2));
console.log('---');
console.log(exp(2, 3));
console.log('---');
console.log(exp(3, 2));
console.log('---');
console.log(exp(3, 3));
