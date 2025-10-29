class Software{
    constructor(name){
        this.name = name;
    }

    run(){
        console.log(`${this.name} is running`);
    }
}

const s0 =  new Software('some softwear');
s0.run();

class Plugin{
    constructor(description){
        this.description = description;
    }
}
const p0 = new Plugin('some plugin');

class Browser extends Software{
    constructor(name){
        super(name);
        this.plugins = [];
    }

    addPluggin(p){
        this.plugins.push(p);
    }

}
const b1 = new Browser('some browser');
b1.addPluggin(p0);
b1.run();