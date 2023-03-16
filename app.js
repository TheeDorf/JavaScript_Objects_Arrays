console.log("Hello World!\n==========\n");

// Exercise 1 Section
const arrSum = [2,22,12,17,18,39,129];

let sum=0;
for (let i=0; i < arrSum.length; i++){
    sum += arrSum[i];
   
}
console.log(sum);




// Exercise 2 Section

const book = {
title: "The Outsiders",
author: "SE Hinton",
noOfPages:192,
haveRead: true,
readCount: 2,
info: function(){
   return ( 
    `${this.title},
    ${this.author},
    ${this.noOfPages},
    ${this.haveRead},
    ${this.readCount}`)
} 
};


book.info = function(){
    console.log(`${this.title} by ${this.author}, ${this.noOfPages} pages, read ${this.readCount} times.`)
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, read ${this.readCount} times.`

    
}
book.info()





// //  ex 3

let sentence = "The quick brown fox jumps over the lazy dog.";
let arr1 = sentence.split(" ");

for (let i = 0; i < arr1.length; i++) {
    let sentence = arr1[i];
    
}

console.log(arr1)





