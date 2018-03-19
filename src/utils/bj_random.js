export const getRandomNumbers = (num, max) => {
    let numbers = [];
    
    for(let i=1; i <= num; i++) {
        let n = Math.floor(Math.random() * max) + 1;    
        numbers.push(n);
    }
    
    return numbers;
    
}