class Parent {
    constructor(name){
        this.Parent = 'Khaza abdul monib & Laily Akhter';
    }
}
class Child extends Parent {
    constructor(name){
        super();
        this.name1 = name;
    }
    getfullName(){
        return this.name1+ ' '+this.Parent;
    }
}

const baby1 = new Child('minhaz');
const baby2 = new Child('miraz');
console.log(baby1.getfullName());
console.log(baby2.getfullName());