const sum = (numere, div) => {
    return numere.filter((nr)=>nr%div == 0).reduce((sum,nr) => sum + nr, 0)

}

const numere = [10, 15, 20, 25, 30, 35, 40, 45, 50] 
const div = 5

const result = sum(numere, div)
console.log("result: ", result)