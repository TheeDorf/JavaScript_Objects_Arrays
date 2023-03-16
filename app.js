console.log("Hello World!\n==========\n");

// Exercise 1 Section
const arrSum = [2,22,12,17,18,39,129];

let sum=0;
for (let i=0; i < arrSum.length; i++){
    sum += arrSum[i];
   
}
console.log(sum);




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title= "The Outsiders"
book.author = "S.E. Hinton"
book.pages = 192
book.readCount = 2

book.info = function(){
    return `${book.title} by ${book.author}, ${book.pages} pages, read ${book.readCount} times.`
};

console.log(book.info());