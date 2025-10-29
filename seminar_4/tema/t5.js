const incraseSalary = (salary, increase) => {
    if (typeof salary !== 'number' || typeof increase !== 'number') {
        throw new Error('Error');
    } else{
        console.log(salary + (salary * increase) / 100);
    }
}

try{
    incraseSalary(1000, 10);
    incraseSalary(1000, 'zece');
} catch(err){
    console.warn(err.message);
}