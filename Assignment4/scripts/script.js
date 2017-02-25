//Main object declaration
var Main = {};

// In
Main.Vehicle = function (make, model, year, engine, hp, tq) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.hp = hp;
    this.tq = tq;
}

// declare prototype get function for the Main.Vehicle objects
Main.Vehicle.prototype.getVehicle = function () {
    return this.year + " " + this.make + " " + this.model + "<br>" +
        this.engine + " - Horse Power: " + this.hp + " Torque: " + this.tq;
}

// declare prototype set functions for the Main.Vehicle objects
Main.Vehicle.prototype.setVehicleReq = function (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Main.Vehicle.prototype.setVehiclePower = function (engine, hp, tq) {
    this.engine = engine;
    this.hp = hp;
    this.tq = tq;
}

// The following code defines an object and using a prototype setter to fill in the rest of the information.
Main.myCar = new Main.Vehicle("Volkswagen", "Golf GTI", 2010);
Main.myCar.setVehiclePower("2.0 TSI (EA888 Gen1)", 350, 380);

Main.maybeNextCar = new Main.Vehicle("Volkswagen", "Golf R", 2016);
Main.maybeNextCar.setVehiclePower("2.0 TSI (EA888 Gen3)", 500, 415);

Main.carGoal = new Main.Vehicle("Audi", "RS7", 2027);
Main.carGoal.setVehiclePower("4.0 TFSI V8", 750, 900);

// JS code only executes after the page has been loaded.
window.onload = function () {
    // send the results of the getVehicle function for each object and sends it to HTML according to elemend ID
    document.getElementById("item1").innerHTML = "<h3>Current car:</h3>" + Main.myCar.getVehicle();
    document.getElementById("item2").innerHTML = "<h3>Hopeful next car</h3>" + Main.maybeNextCar.getVehicle();
    document.getElementById("item3").innerHTML = "<h3>Future car</h3>" + Main.carGoal.getVehicle();
}
