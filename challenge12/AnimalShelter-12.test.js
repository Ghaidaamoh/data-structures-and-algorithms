'use strict';
const Stack = require('./stack-12')
const Node = require('./node-12')
class AnimalShelter {
    constructor() {
        this.dog = new Stack(),
            this.cat = new Stack()
    }
    enqueue(animal) {
        if (animal.pref === 'cat') {
            let ele = this.cat.push(animal)
            return (ele)
        } else if (animal.pref === 'dog') {
            let newele = this.dog.push(animal)
            return (newele)
        }
    }

    dequeue(pref) {
        if (pref === 'cat') {
            let deleteCat = this.cat.pop()
            return (deleteCat)
        }
        else if (pref === 'dog') {
            let deletedog = this.dog.pop()
            return (deletedog)
        } else {
            return null
        }
    }
}

let newAnimal = new AnimalShelter()
let cat1=new Node('cat','lolo')
let cat2=new Node('cat','soso')
let cat3=new Node('cat','sherry')

let dog1=new Node('dog','murjan')
let dog2=new Node('dog','max')
let dog3=new Node('dog','ibby')

describe('Challenge 11_pseudoqueue ', () => {
    test('It should check enqueue Method for cat ', () => {
        expect(newAnimal.enqueue(cat1)).toStrictEqual('lolo NULL');
        expect(newAnimal.enqueue(cat2)).toStrictEqual('soso lolo NULL');
        expect(newAnimal.enqueue(cat3)).toStrictEqual('sherry soso lolo NULL');
    });
    test('It should check enqueue Method for dog', () => {
        expect(newAnimal.enqueue(dog1)).toStrictEqual('murjan NULL');
        expect(newAnimal.enqueue(dog2)).toStrictEqual('max murjan NULL');
        expect(newAnimal.enqueue(dog3)).toStrictEqual('ibby max murjan NULL');
    });
    test('It should check dequeue Method newAnimal', () => {
        expect(newAnimal.dequeue('cat')).toStrictEqual('lolo');
        expect(newAnimal.dequeue('cat')).toStrictEqual('soso');
        expect(newAnimal.dequeue('cat')).toStrictEqual('sherry');

        expect(newAnimal.dequeue('dog')).toStrictEqual('murjan');
        expect(newAnimal.dequeue('dog')).toStrictEqual('max');
        expect(newAnimal.dequeue('dog')).toStrictEqual('ibby');

        expect(newAnimal.dequeue('bird')).toStrictEqual(null);
    });
});