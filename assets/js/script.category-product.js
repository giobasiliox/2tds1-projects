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
const categorieslist = new CategoryService();

function createCategory(){

}