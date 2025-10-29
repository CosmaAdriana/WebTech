class SirCrescator {
    #curent

    constructor(vi){
        if(vi%2==0){
            this.#curent = vi;
        }
        else{
            this.#curent = vi + 1;
        }
    }

    next(){
        const rezultat = this.#curent;
        this.#curent += 2;
        return rezultat;
    }
}

const sir = new SirCrescator(1);

for(let i = 0; i < 5; i++){
    console.log(sir.next());
}