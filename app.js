//! TASK 1
// class Car {
//     constructor(brand, model, color, year, speed, fuelCapacity, km, fuelFor1Km,currentFuel) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.year = year;
//         this.speed = speed;
//         this.fuelCapacity = fuelCapacity;
//         this.km = km;
//         this.fuelFor1Km = fuelFor1Km;
//         this.currentFuel = currentFuel;
//     }

//     ShowInfo() {
//         console.log(`
//           Brand: ${this.brand}
//           Model: ${this.model}
//           Color: ${this.color}
//           Year: ${this.year}
//           Speed: ${this.speed} km/h
//           Fuel Capacity: ${this.fuelCapacity} liters
//           Kilometers Driven: ${this.km} km
//           Fuel Consumption: ${this.fuelFor1Km} liters/km
//           Current Fuel: ${this.currentFuel} liters
//         `);
//     }

//     AddFuel(fuel) {
//         if (this.currentFuel + fuel > this.fuelCapacity) {
//             this.currentFuel += fuel
//             console.log("Yanacaq çənində yetirili qədər yer yoxdur.");
//         } else {
//             console.log("Yanacaq uğurla əlavə edildi.");
//         }
//     }

//     Drive(kmToDrive) {
//         const fuelNeeded = kmToDrive * this.fuelFor1Km;
//         if (fuelNeeded > this.currentFuel) {
//             console.log("Yetiriləcək yanacaq yoxdur.");
//         } else {
//             console.log("Ünvanə çatdınız.");
//         }
//     }

// }
// const myCar = new Car("BMW", "X7", "BLACK", 2023, 180, 60, 5400, 0.12);

// console.log(myCar.ShowInfo());
// console.log(myCar.AddFuel(20));
// console.log(myCar.Drive());


//! TASK 2 
class Product {
    constructor(name, price, count) {
        this.Name = name;
        this.Price = price;
        this.Count = count;
        this.TotalIncome = 0;
    }

    Sell(quantity) {
        if (this.Count > 0) {
            this.Count -= quantity;
            this.TotalIncome += this.Price * quantity;
        } else {
            console.log("Üzr istəyirik, bu məhsul artıq bitib.");
        }
    }
}

class Milk extends Product {
    constructor(name, price, count, volume, fatRate) {
        super(name, price, count);
        this.Volume = volume;
        this.FatRate = fatRate;
    }
}

const milk = new Milk("Süt", 2.5, 10, 1, 3.5);

milk.Sell(5);

console.log("Məhsul məlumatları:");
console.log("Ad:" + milk.Name);
console.log("Qiymət:" + milk.Price + "AZN");
console.log("Say:" + milk.Count);
console.log("Ümumi gəlir:" + milk.TotalIncome + "AZN");
console.log("Həcm:" + milk.Volume + "litr");
console.log("Yaq rətisi:" + milk.FatRate + "%");
