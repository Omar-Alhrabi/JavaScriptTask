console.log("task '1'")
function smallest (...numbers){
return Math.min(...numbers)
}
console.log(smallest(10,11,8,4));

//
console.log("task '2'")

function sortString(string){
  let arr =string.split('')

  arr.sort();
  
  let sortedStr = arr.join('')

  return sortedStr;

}
let mystr = "hello";
let sortedString = sortString(mystr)
console.log(sortedString);

//
console.log("task '3'")

let result = 1
for(let i = 1; i <= 8; i++) {
    result *= i;
}  
console.log(result);

//
console.log("task '4'")
function oddOrEven(n)
{
return  9 % 2==0 ?  "even": "odd"
}
console.log(oddOrEven(0));

//
console.log("task '5'")

function addUp(num) {
let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += i;
}
return sum;
}


let result1 = addUp(8);
console.log(result1); 

//
console.log("task '6'")

function arrayStatistics(arr) {
if (arr.length === 0) {
return "The array is empty.";
}

let min = Math.min(...arr);

let max = Math.max(...arr);

let length = arr.length;

let sum = arr.reduce((acc, val) => acc + val, 0);
let avg = sum / length;

let stats = [min, max, length, avg];

return stats;
}

let myArray = [7, 13, 3, 77, 100];
let result2 = arrayStatistics(myArray);
console.log(result2); 

//
console.log("task '7'")

function countWords(str) {
return str.trim().split(/\s+/).length
}
console.log( countWords(" hello from CodingAcademy! "));
      
//

console.log("task '8'")

function multiplyByLength(arr) {
    return arr.map((e)=>{return e*arr.length})
    }
    console.log(multiplyByLength([4,2,5]));
    
    //
    console.log("task '9'")

    function endsWith(str1, str2) {
    
        if (str1.slice(-str2.length) === str2) {
            return true;
        } else {
            return false;
        }
    }

   
    let str1 = "CodingSchool";
    let str2 = "Ac";
    let result4 = endsWith(str1, str2);
    console.log(result4); 

    //
    console.log("task '10'")

    function repeatCharacter(str){
        return  str.split('').map(char => char.repeat(2)).join('');
    }
    console.log(repeatCharacter("coding"));

    //
    console.log("task '11'")
    
    function findIndex(arr, element) {
       
        let index = arr.indexOf(element);

       
        return index;
    } 
    let myarray = ['Ali', 'Mazen', 'Ayham', 'Murad'];
    let element = ['Ali'];
    let index = findIndex(myArray, element);
    console.log(index ); 