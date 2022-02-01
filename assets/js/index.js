function Car(manufacture, model, color, releaseYear, fuelConsumption, volume) {

    this.drive = function () {
      return 'Drive';
    }

    this.manufacture = manufacture;
    this.model = model;
    this.color = color;
    this.releaseYear = Number(releaseYear);
    this.fuelConsumption = Number(fuelConsumption);
    this.volume = Number(volume);

    return this;

  }




const car1 = new Car('Audi', 'A7', 'black', 2018, 10.2, 69);