const birthYears = [2000, 2005,2010, 2012, 1989, 1999, 2004];

const ages = birthYears.map(year => 2025 - year).filter(age => age >=18);

console.log(ages);  