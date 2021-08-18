let sumArr = (arr) => {
    let result = arr.map(ele => {
        let sum = 0
        for (let i = 0; i < ele.length; i++) {
            sum = sum + ele[i]
        }
        return (sum)
    })
    return(result)
}

describe('Testing challenge 4', () => {
    test(' write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.', () => {
        expect(sumArr([[1, 2, 3], [3, 5, 7], [1, 7, 10]])).toStrictEqual([6, 15, 18]);
        expect(sumArr([[0, 1, 5], [-4, 7, 2], [-3, 12, 11]])
        ).toStrictEqual([6, 5, 20]);

    });
});