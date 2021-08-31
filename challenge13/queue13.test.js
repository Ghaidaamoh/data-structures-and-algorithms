'use strict';
const Stack=require('./stack-13')

class Queue{
    validate_brackets(val) {
        let string1 = new Stack();
        for (let i = 0; i < val.length; i++) {
            let x = val[i];
            if (x == '(' || x == '[' || x == '{') {
                string1.push(x);
                continue;
            }
            if (string1.stackLength() == 0)
                return false;
            let check;
            switch (x) {
                case ')':
                    check = string1.pop();
                    if (check == '{' || check == '[')
                        return false;
                    break;
                case '}':
                    check = string1.pop();
                    if (check == '(' || check == '[')
                        return false;
                    break;
                case ']':
                    check = string1.pop();
                    if (check == '(' || check == '{')
                        return false;
                    break;
            }
        }
        return (string1.stackLength() == 0);
    }
}

let testVal=new Queue()
describe('Challenge 13 ', () => {
    test('It should check balance brackets Method  ', () => {
        expect(testVal.validate_brackets('()')).toStrictEqual(true);
        expect(testVal.validate_brackets('{]}]')).toStrictEqual(false);
        expect(testVal.validate_brackets('{()}')).toStrictEqual(true);
    });
});