/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO

class Animal {
    constructor(name, age,isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
class Rabbit extends Animal {
    constructor() {
        super();
        this.isMammal = true;
        this.age = 2;
    }
    eat(name) {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor() {
        super();
        this.age = 4;
        this.isMammal = false;
    }
    fly(name) {
        return `${this.name} sedang terbang!`;
    }
}

var myRabbit = new Rabbit;
myRabbit.name = "Labi";
myRabbit.age = 2;
console.log(myRabbit.eat(myRabbit.name))

var myEagle = new Eagle;
myEagle.name = "Elo";
myEagle.age = 4;
/**
 * Hiraukan kode di bawah ini
 */

module.exports = {
  Animal, Rabbit, Eagle, myRabbit, myEagle,
};
