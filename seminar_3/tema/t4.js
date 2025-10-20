const reduce = (array, reducer, initialValue) =>{
    let accumulator = initialValue;
    for(const element of array){
        accumulator = reducer(accumulator, element);
    }   
    return accumulator; 
}

const numbers  = [1,2,3,4,5,];

const sum = reduce(numbers, (acc, val) => acc + val, 0);
console.log("Sum: ", sum);

const product = reduce (numbers, (acc, val) => acc * val, 1);
console.log("Product: ", product);