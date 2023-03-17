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
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, read ${this.readCount} times.`
   
} 
};


book.info = function(){
    console.log(`${this.title} by ${this.author}, ${this.noOfPages} pages, read ${this.readCount} times.`)
    

    
}
book.info()





// //  ex 3

let sentence = "The quick brown fox jumps over the lazy dog";
let arr1 = sentence.split(" ");

for (let i = 0; i < arr1.length; i++) {
    let letters = arr1[i].split("");
    letters.reverse();
    arr1[i] = letters.join("");
    
}
let lettersReverse = arr1.join(" ");
console.log(lettersReverse)


//  OTHER WAY TO DO ABOVE
// let sentence = "The quick brown fox jumps over the lazy dog";
// function reverseWord (sentence) {
//     let result = [];
//     let words = sentence.split(" ");
//     console.log("These are the words split", words);
//     for (let i = 0; i < words.length; i++) {
//         let letters = words[i].split("");
//         console.log("Here are the letters split", letters);
//         for (let j = letters.length - 1; j >= 0; j--) {
//             result.push(letters[j]);
//         }
//     }
//     console.log("This is after the push for result", result)
//     return result
// }

// console.log(reverseWord(sentence));

//  ex4
// let cup = {
//     shape:"round",
//     content: "empty",
//     height: 25
// }


// ex 4 
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
const head1 = csvData.split("\n")[0].split(",")[0]
const head2 = csvData.split("\n")[0].split(",")[1]

const data = csvData.split("\n").slice(1)
myArr = []
const myObj = {
    [head1]: "",
    [head2]: ""
}

data.forEach((val) => {
    let dataVal =val.split(",")
    console.log(dataVal)
    let dataObj = Object.create(myObj);
    dataObj[head1]= dataVal[0];
    dataObj[head2]= dataVal[1];
    myArr.push(dataObj)
    
});
console.log(myArr);