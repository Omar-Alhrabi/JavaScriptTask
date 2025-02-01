 //1
 console.log("task '1'")
 let arr = [ 1, 2, 3, 4, 5]
 arr.forEach(myfun);

 function myfun(value ,index,  array){
     if (value > 4) {
      array.push(6); 
         }
 }
console.log(arr);

 //2
 console.log("task '2'")
 let arr1 = [ 1, 2, 3, 4, 5];
 let arr2 = arr1.map(myfun1)

 function myfun1(value , index , array){
     return value * 2;
 }

 console.log(arr1,arr2)

 //3
 console.log("task '3'")
 let arr3 = [ 1, 2, 3, 4, 5];
 let arr4 = arr3.filter(myfun2)

 function myfun2(value , index , array){
      return(value % 2 == 0)
 }
 console.log( arr3, arr4)
 
 //4
 console.log("task '4'")
 let arr5 = [ 1, 2, 3, 4, 5];
 let arr6 = arr5.reduce(myfun3)

 function myfun3(total, value , index , array){
     return value + total ;
 }
 console.log( arr5, arr6)

 //5
 console.log("task '5'")
 let arr7 = ["banana", "apple" ,"cherry"];
 let arr8 =  arr7.sort()

 console.log(arr7 , arr8)

 //6
 console.log("task 'A'")
 let array = ["apple" ,"banana", "cherry"];
 array.reverse()
 console.log(array)
 
 //7
 console.log("task 'B'")
 let array1 = [1 , 2, 3];
 let array2 = [4 , 5, 6];
 let concat = array1.concat(array2);
 console.log(concat)

 //8
 console.log("task 'C'")
 let array5 = [1, 2, 3, 4, 5, 6] ;
 array5.splice(1,2);
 console.log(array5);
 //9
 console.log("task 'D'")
  let array3 = [1, 2, 3, 4, 5, 6] ; 
 let array4 = array3.slice(1 , 2);
 console.log(array4);

 //10
 console.log("task 'E'")
 let array8 = [1, 2, 3, 4, 5, 6] ;
 let array9 =  array8.indexOf(1) + 1;

 console.log(array9);

 //11
 console.log("task 'F'")
 let array6 = [1, 2, 3, 4, 5, 6] ;

 let array7 =  array6.join();
 console.log(array7);
 //12
 console.log("task 'G'")
 let arrays = "12345";
 console.log(arrays.split(""));
 
 //13
 console.log("task '7'")
 let arrays1 = [1, 2, 3, 4, 5, 6] ;
 console.log(arrays1 , arrays1.length);
 
 //14
 console.log("task '8'")
 let arrays2 = [1, 2, 3, 4, 5] ;
 for (let arrays3 of arrays2 ) {
  console.log(arrays3);
 }
 
 //15
 console.log("task '9'")
 for (let arrays4 in arrays2){
     console.log(arrays4);
 }
 
 //16
 console.log("task '10'")
 console.log(Array.isArray(arrays2));

 //17
 console.log("task '11'")
 console.log(Array.of(arrays2));
