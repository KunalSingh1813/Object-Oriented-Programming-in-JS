class Product {
 //data members
    #name;
    #price;
    #category;
    #description;
    #rating;

    // constructor(productName, productPrice, productCategory, productDescription, productRating){
    //     this.name = productName;
    //     this.price=productPrice;
    //     this.category=productCategory;
    //     this.description=productDescription;
    //     this.rating=productRating;
    // }

    //getter setter
    get description(){
        return this.#description;
    }

    set description(d){
        if(d.length===0){
            console.log("invalid desc");
            return;
        }
        this.#description=d;
    }

    //member functions
    addToCart(){
        console.log("Product added to cart");
    }

    removeFromCart(){
        console.log("Product removed from cart");
    }

    displayProduct(){
        console.log("Product Displayed");
    }

    buyProduct(){
        console.log("Product bought");
    }
}

let iphone = new Product();
iphone.description = "this is a description"
console.log(iphone.description);