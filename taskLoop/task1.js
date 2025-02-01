console.log(" task '1' ")
        let i = 0;
        while ( i < 10){
            i++;
            console.log(i)
        }
        //

        console.log(" task '2' ")
        for (let x = 1; x <= 5; x++) {        
             console.log(x)
            }
        //

         console.log(" task '3' ")
         for (let y = 1; y <= 10; y++) {        
             y++;
             console.log(y)
         }
         //
         console.log(" task '4' ")

         let sum = 0;   
         for (let z = 1; z <= 10; z++) {        
              sum += z;
         }
         console.log(`The sum of numbers from 1 to 10 is: ${sum}`);

         //

         console.log(" task '5' ")
         
         function LargestNum(array) {
        if (array.length === 0) {
        return "Array is empty.";
        }

        let largest = array[0];

        for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
        largest = array[i];
        }
        }

         return largest;
            }
    let numbers =  [1, 2, 3, 4, 5];
    let largestNumber = LargestNum(numbers);
    console.log(`The largest number in the array is: ${largestNumber}`);

    //

    console.log(" task '6' ")

    let sum2 = 0;
    let number =  [1, 2, 3, 4, 5]; 
    for (let i = 0; i < number.length ; i++) 
        sum2 += number[i];
     console.log(`The average is ${sum2/number.length}`);
    //

    console.log(" task '7' ")

    let sum3 = 1;   
         for (let z = 1; z <= 5; z++) {        
              sum3 *= z;
         }
         console.log(`The factorial of a number 5 is: ${sum3}`);
         
     //
     console.log(" task '8' ") 

     function fibon(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
    }

    console.log(fibon(8));
     
    //
    console.log(" task '9' ")

        function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
    }

    let limit = 20;
    PrimeNumbers(limit);
    function PrimeNumbers(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
        console.log(i);
        }
    }
    }
    //

    console.log(" task '10' ")
    const array = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j])
    }
    }

    //
    console.log(" task '11' ")

    for (let m = 5; m >= 1; m--) { 
        console.log(m)
            }
    
    //
    console.log(" task '12' ")
    for (let m = 6; m >= 1; m--) { 
        m--;
        console.log(m)
            }

    //

    console.log(" task '13' ")

    const frequency = (arr, item) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }
        return count;
    };

    const a = [1, 2, 3, 2, 1, 2, 3, 1];
    console.log(frequency(a, 2)); 

    //
    console.log(" task '14' ")

    const heros = [
            {name: 'Iron Man', power: 'Tech'},
            {name: 'Spider-Man', power: 'Spider abilities'},
            {name: 'Thor', power: 'Godly powers'},
            {name: 'Hulk', power: 'Super strength'}
        ];

        const newHeros = heros.map((hero, index) => ({
            hero: hero.name,
            power: hero.power,
            id: index
        }));
        console.log(JSON.stringify(newHeros, null, 2))

        //
        console.log(" task '15' ")

        function filterLongWords(inputWords) {
         return inputWords.filter(word => word.length >= 7);
        }
        const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
        let longWords = filterLongWords(words);
        console.log(longWords);

        // 
        console.log(" task '16' ")
               const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const sumSquaredDivisibleBy5 = numbers1.reduce((sum, num) => {
            if (num % 5 === 0) {
                sum += num * num;
            }
            return sum;
        }, 0);
        console.log(`The sum of the squares of numbers divisible by 5 is ${sumSquaredDivisibleBy5}`);