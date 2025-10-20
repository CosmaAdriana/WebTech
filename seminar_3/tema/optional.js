const getAvreage = (array) => {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}

const at = [10,20,30,40,50];
console.log("Media este:", getAvreage(at));