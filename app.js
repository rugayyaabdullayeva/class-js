class Car {
    constructor(brand, model, color, year, speed, fuelCapacity, km, fuelFor1Km) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.fuelCapacity = fuelCapacity;
        this.km = km;
        this.fuelFor1Km = fuelFor1Km;
        this.currentFuel = fuelCapacity;
    }

    ShowInfo() {
        console.log(`
          Brand: ${this.brand}
          Model: ${this.model}
          Color: ${this.color}
          Year: ${this.year}
          Speed: ${this.speed} km/h
          Fuel Capacity: ${this.fuelCapacity} liters
          Kilometers Driven: ${this.km} km
          Fuel Consumption: ${this.fuelFor1Km} liters/km
          Current Fuel: ${this.currentFuel} liters
        `);
    }

    AddFuel(fuel) {
        if (this.currentFuel + fuel > this.fuelCapacity) {
            this.currentFuel += fuel
            console.log("Yanacaq çənində yetirili qədər yer yoxdur.");
        } else {
            console.log("Yanacaq uğurla əlavə edildi.");
        }
    }

    Drive(kmToDrive) {
        const fuelNeeded = kmToDrive * this.fuelFor1Km;
        if (fuelNeeded > this.currentFuel) {
            console.log("Yetiriləcək yanacaq yoxdur.");
        } else {
            console.log("Ünvanə çatdınız.");
        }
    }

}
const myCar = new Car("BMW", "M8", "BLACK", 2023, 180, 60, 5400, 0.12);


