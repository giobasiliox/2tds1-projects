// const numbers = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);

// numbers.forEach((number, index)=>{
//     if (number % 2 == 0){
//         console.log(`O número ${number} está na posição ${index}`);
//     }
// })

class Car{
    constructor(marca, modelo){
        this.marca= marca;
        this.model= modelo;
    }
}

class Listacar{
    constructor(){
        this.cars= [];
    }

    adicionar(car){
        this.cars.push(car);
    }
}

const listaCars= new Listacar();

function createCar(){
    const marca= document.getElementById("nameMarca").value;
    const modelo= document.getElementById("modelcar").value;

    const car= new Car (marca, modelo);

    listaCars.adicionar(car);

    listaCars.cars.forEach((car)=>{
        console.log(`Marca: ${marca} Modelo: ${modelo}`)
    })
}


// cars.forEach((car)=>{
//     console.log(`Marca:${car.marca} 
// Modelo: ${car.modelo}`)
// }
// )
