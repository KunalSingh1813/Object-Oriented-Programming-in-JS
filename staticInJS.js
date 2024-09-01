//static variables are associated with the class and 
//not associated with the objects

class Product{

    static x = 10;

    constructor(name, price){
        this.name=name;
        this.price=price;
    }
}

let p1 = new Product("Iphone",10000);
console.log(p1.x);    //won't be accessible with the object
console.log(Product.x); //will be accessible with the class