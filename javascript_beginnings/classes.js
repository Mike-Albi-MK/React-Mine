// CLASSES

/*
    - Manufacturing objects with the same structure
    - Creating instances with the `new` keyword
    - The `Date`class (short mention)
    - Constructing an object: The `constructor()` method, instance and `this` */

// CONSTRUCTOR

    /* JavaScript is not really an object oriented programming language.  But it has its ways to use it, implement ways to bend it like this.
    
    A constructor is a function that acts as a blueprint. Like a cookie cutter. We use it to modify various instances.
    A constructor is used to initialize an object instance (to cut cookies).
    An instance is another version of the object (a cookie).

    Constructor names conventionally start with a capital letter.*/

    //Constructor (cookie cutter)

    function User(name){
        //Let's create some properties
        
        this.name = name; //we need "this" to transfer these properties on the instances we will create
        //An instance is an object containing data and behaviour described by the constructor
        this.isAdmin = false;
    }

    //this is our basic constructor, we created a function and passed a key value

    //INSTANCE (cookie)
        /* Set up a variable and give it the "powers" of the User constructor */
        const userInstance = new User("Mary");
        console.log(userInstance);
        //Output: User { name: 'Mary', isAdmin: false }

        console.log(userInstance.name); //Output: Mary
        console.log(userInstance.isAdmin); //Output: false

    //Adding a method to the constructor

        function User2(name){
            this.name = name;
            this.sayHi = function(){
                console.log(`My name is ${this.name}`)
            };
        }

        let john = new User2("John");
        john.sayHi(); //Output: My name is John

        let jill = new User2("Jill");
        jill.sayHi(); ////Output: My name is John

        //Both outputs (John and Jill) are printed because they don#t interfere wit each other. It's because we use `this`

    //TASK:
    /*
        create a constructor called Vehicle( type, speed )
 Assign the values "type" and "speed" to properties ( see User2 example )
 Create a property called "move" and assign a method to it that will log ( I am a <vehicle type> and I am moving at <speed>)
 Create a property called "stop" and assign a method to it that will log (I am a <vehicle type> and I stopped moving)
 Create a new instance and call the move and stop methods on it */

        function Vehicle(type, speed){
            this.vehicleType = type;
            this.speed = speed;
            this.move = function(){
                console.log(`I am a ${this.vehicleType} and I am moving at ${speed}`)
            };
            this.stop = function(){
                console.log(`I am a ${this.vehicleType} and I stopped moving`)
            };
        }

        let trabi = new Vehicle("Trabi", "62 mph");
        console.log(typeof trabi); //Output: object
        trabi.move();

        let rocketShip = new Vehicle("Rocketship", "28,000 km per hour");
        rocketShip.move();

        let catamaran = new Vehicle("Catamaran", "up to 30 knots");
        catamaran.move();

        trabi.stop();
        catamaran.stop();
        rocketShip.stop();


//CLASSES

        /*
        The concept of class was introduces with ECMA2015.
        In reality classes are just special functions.
        
        SYNTAX:
        
        class className {
            constructor(){
                
            }
            
            method1(){...};
            method2(){...};
        }*/

        class Usera {
            constructor (name){ //"name" is what we need to pass when creating an instance
                this.name = name;

                //The constructor kicks in as soon as we create a new instance
                console.log("constructor");
            }


            //Adding a method
            //All instances will receive this method
            sayHi(){
                console.log(this.name);
            };
        }

        //Instance
        const userInst = new Usera ("Mike"); //As soon as we use "new User" the constructor is called
        //Output: constructor

        console.log(userInst);
        //Output: Usera { name: 'Mike' }

        userInst.sayHi(); //Output: Mike




/*create a class called Vehicle
    Its constructor will take type and speed
    The class contains 2 methods.. move() and stop()
    move() will log: " vehicle ( type ) is moving at a speed of ( speed )kph "
    stop() will log " vehicle ( type ) slowing down gently till it stops " */
class Vehicles {
    constructor (type, speed){
        this.type = type;
        this.speed = speed;
    }
    move(){
        console.log(`${this.type} is moving at a speed of ${this.speed} mph`);
    }
    stop(){
        console.log(`${this.type} is slowing down gently till it stops`);
    }
}
const mercedes = new Vehicles("Mercedes-AMG GT 63 S E", "196");
mercedes.move();
mercedes.stop();

const bentley = new Vehicles("Bentley", "208");
bentley.move();
bentley.stop();

const camaro = new Vehicles("Camaro", "198");
camaro.move();
camaro.stop();

const pickup = new Vehicles("Pickup van", "60")
pickup.move();
pickup.stop();


//TASK

/*/*
Create a Pizza class accepting 1 param (pizzaId)
The class contains the following 

priceObj = [
            { id: 1, product: "margherita", ingredients: ["tomato", "mozzarella", "basilicum"], price: 7.50 },
            { id: 2, product: "marinara", ingredients: ["tomato", "oregano", "garlic"], price: 5.75 },
            { id: 3, product: "veggy", ingredients: ["eggplants", "peppers", "zucchini", "basilicum"], price: 9.99 }
]; 

getItem() Method - retrieves all details based on product id 
print() Method - logs following message "you have selected pizza <product>. it contains <ingredients> and costs <price> euros"
balance() Method - logs following message "you paid <amount>. your change is <change>"       

Example usage
const pizza1 = new Pizza( 2 ); 2 represents product id
As soon as you create your instance you should receive this example message in the terminal 
"You have selected pizza marinara. 
 It contains tomato,oregano,garlic and costs 5.75 euros"

Once you execute the balance method you will receive the following message 
You paid 43 euros. Your change is 37.25

IMPORTANT!! the only method you should call on the instance is balance(). Nothing else.
pizza1.balance( 43 ); // 43 represents amount paid in.


HOW TO RUN (EXAMPLE)
const pizza1 = new Pizza( 2 );
pizza1.balance( 43 ); 

RESULT
You have selected pizza marinara. 
It contains tomato,oregano,garlic and costs 5.75 euros
You paid 43 euros. Your change is 37.25
*/

class Pizza {

    static priceObj = [
        { id: 1, product: "margherita", ingredients: ["tomato", "mozzarella", "basilicum"], price: 7.50 },
        { id: 2, product: "marinara", ingredients: ["tomato", "oregano", "garlic"], price: 5.75 },
        { id: 3, product: "veggy", ingredients: ["eggplants", "peppers", "zucchini", "basilicum"], price: 9.99 }
]; 

constructor(productId){
    const pizza = Pizza.priceObj.find(item => item.id === productId);
    if (pizza) {
    this.product = pizza.product;
    this.ingredients = pizza.ingredients;
    this.price = pizza.price;
    } else {
        console.log(`Invalid product id: ${productId}`);
    }
}

    getItem(){
        return Object.keys(priceObj);
    };
    print(){
        console.log(`"You have selected pizza ${this.product}. it contains ${this.ingredients} and costs ${this.price} euros"`);
    };
    balance(paid){
        if (this.price === undefined) {
            console.log(`Can't calculate balance. Pizza is not selected`);
        }
        
        const change = paid - this.price;
        console.log(`You paid ${paid} euros. Your change is ${change.toFixed(2)} euros.`)
    };
}

const pizza1 = new Pizza(3);
pizza1.print(3);
pizza1.print(3);
pizza1.balance(65);
