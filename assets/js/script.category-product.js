//Cada categoria possui vários produtos
//Cada produto é pertencente a uma categoria

class Category{
    constructor(id,name){
        this.id= id;
        this.name= name;
        this.products= [];
    }
}

class Product{
    constructor(id, name, price, category){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
    }
}
class CategoryService{
    constructor(){
        this.categories= [];
        this.nextCategoryId= 1;
    }

    addCategory(name){
        const id= this.nextCategoryId;
        this.nextCategoryId ++;

        const category = new Category(id, name);
        this.categories.push(category);
    }
}

    class ProductService{
        constructor() {
            this.products=[];
            this.nextProductiId= 1;
    }

    addProduct(name, price, category){
        const id= this.nextProductiId;
        this.nextProductiId++;

        const product = new Product(name, price, category);
        this.products.push(product);
    }
}
const categorieslist = new CategoryService();

function createCategory(){
    const categoryName= "Candies";

    categorieslist.addCategory(categoryName);

    console.log(categorieslist.categories);
}
