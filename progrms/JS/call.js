let  obj1 = {
    firstName: "kamalakar",
    lastname: "kathi",
    fullName: function(...args){
        console.log(`Hello ${this.firstName + this.lastname}`);
        console.log('additional args', args);
    }
    
}

let obj2 = {
    firstName: "Niharika",
    lastname: "Tiruveedula"
}

const getFullname = obj1.fullName();

console.log('undefined', getFullname);
obj1.fullName.call(obj2,"from", "Hyderabad");

// Real Usecases
//Centeralized logger service

const logger = {
    log(message){
        console.log(`${this.service} ${message}`);
    }
}

const authService = {
    service: "Authentication Service"
}

const computeService = {
    service: "Compute Service"
}


logger.log.call(authService, "authentication successfull");

logger.log.call(computeService, "computation for the product is completed");

console.log("==================================");


const analytics = {
    track(event){
        console.log(`${this.module} ${event}`);
    }
}


const dashboard={
    module: "dashboard"
}

const product={
    module: "product"
}


analytics.track.call(dashboard, "login completed");
analytics.track.call(product, "successfully fetched product details");

//constructure chaining(manual inheritance)

function Animal(name){
    this.name = name;
    this.isAlive = true;
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

const rex = new Dog("Rex", "German Shepherd");

console.log(rex.name);
console.log(rex.isAlive);
console.log(rex.breed);





