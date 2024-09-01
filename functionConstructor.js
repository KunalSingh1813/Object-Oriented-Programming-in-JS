//This is a function constructor
//It was used earlier when class based blueprinting was not done
//Therefore classes are justy wrappers on function in Javascript

function Product(n,p,d){
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function(){
        console.log("Name: ", this.name, "Price: ",this.price, "Description:",this.description);
    }
}

let a = new Product("ASUS Vivobook", 75000 , "Asus laptop with OLED display");
a.displayProduct();