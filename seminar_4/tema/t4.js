Number.prototype.times = function(apel){
    for(let i = 0; i < this; i++){
        apel(i);
    }
};

(3).times(() => {
  console.log("Apel de functie");
});