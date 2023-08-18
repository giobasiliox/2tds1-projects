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
//CREUD =>
// C => create
    addCategory(name){
        const id= this.nextCategoryId;
        this.nextCategoryId ++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    //R=> read
    getCategoryCategoryById(id){
        return this.categories.find((category)=> category.id == id );
    }

    //U=> update
    UpdateCategory(id, name){
        const category= this.getCategoryCategoryById(id);
        category.name= name;
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

        const product = new Product(id,name, price, category);
        this.products.push(product);
        category.products.push(product);
    }

}
const categoriesList = new CategoryService();
const procutsList= new ProductService();

function createCategory(){
    const categoryName= "Candies";
    const categoryName1= "Shoes";
    const categoryName2= "Book";

    categoriesList.addCategory(categoryName);
    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);

    //console.log(categorieslist.categories);
    console.log("Categorias criadas!");
}

function createProduct(){
    const procutName= "Choco";
    const procutPrice= 0.50;
    const procutCategory =categoriesList.categories[0];

    procutsList.addProduct(procutName,procutPrice,procutCategory);

    //console.log(procutsList.products);
}

function findCategory(id){
    const category= categoriesList.getCategoryCategoryById(id);

    console.log(category.name);
}

function editCategory(id,name){
    categoriesList.UpdateCategory(id,name);

    console.log(categoriesList.categories);
}
