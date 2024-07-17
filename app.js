// function phoneNumber(number){

//     let num = number.slice(1).replace(/[^0-9]/gi, "");

//  if(number.startsWith("+7") && number.length==12 && num.length==11) {
//     return true;
//  }
//  else{ 
    
//     return false;
//  }
    
    
   
// }

// console.log(phoneNumber("+79947026061"));

// function capitalizeWords(text) {

//     let eachWord = text.split(" ");

//     let word1 = eachWord[0][0].toUpperCase() + eachWord[0].slice(1);
//     let word2 = eachWord[1][0].toUpperCase() + eachWord[1].slice(1);
//     let word3 = eachWord[2][0].toUpperCase() + eachWord[2].slice(1);
//     let word4 = eachWord[3][0].toUpperCase() + eachWord[3].slice(1);
//     let word5 = eachWord[4][0].toUpperCase() + eachWord[4].slice(1);

//     let result = word1 + " " + word2 + " " + word3 + " " +word4 + " " + word5;
    

//     return result
   
    
// }

// console.log(capitalizeWords("this is my beautiful world."));

// function lucky(ticket) {

//     let num = String(ticket).split("");

//     let result = +num[0] + +num[2] + +num[3] == +num[3]+ +num[4]+ +num[5];

//     return result 
// }

// console.log(lucky(222222));

// function numCounter(text) {
    
//     let result = text.replace(/[^a-z]/gi, "").length;
//     return result
// }

// console.log(numCounter("ich bin mir stolz darauf522/%"));

// let num = +prompt("Istenilen bir eded daxil edin");

// while (num<999) {

    
//     if( (num + num)%2==0){

//         console.log(num); 
//     }
    
//     num+=num;
    
    
    
// // } 

// let num =0;
// while (num<999) {

//     if(num>99){

//         console.log(num); 
//     }
//     num+=10

    
// }


// let sum = 1;
// for ( let i = 1;i<10;i++ ){

//     sum= sum * i;
//     console.log(i);
// }
// console.log(sum);

// let a = "Hello,World,";
// for(let i = 0; i<a.length; i++){
    
//     if(a[i]=="o"){
//         break;
//     }
//     console.log(a[i]);
    
// }

// let num = 8;
// let sum =0;
// while (num<100) {
//     num+=2;
//     sum = sum+num;
//     console.log(num);
// }
// console.log(sum);

// let num = 9;
// let sum =0;
// while (num<99) {
//     num+=2;
//     sum = sum+num;
//     console.log(num);
// }
// console.log(sum);

// let num = 8;
// let sum = 0;
// while (num<100) {
//     num+=2;
//     sum = sum+num;
//     console.log(num);
// }
// console.log(sum);

let a = prompt("Her hansi bir arqument daxil edin.");

for(let i = 0 ; i<a.length;i++){

    let num = a.slice(0).replace(/[^0-9]/gi,"");

    if(a[i] == num){
        
        console.log("reqem var.");
        break;
        
    }
   
    
}



let ant = "Hello World,my name is Nijat";


for(let i = 0; i < ant.length; i++){

    console.log(ant[i]);

    if(ant[i] == ","){
    
    break;
    }
    
   
}
console.log(ant.indexOf(","));

// let text = "Hello NIKKI How are , you?";

// console.log(text[text.length-1]);
// console.log(text.charAt(14));
// console.log(text.indexOf("K"));
// console.log(text.indexOf("y"));
// console.log(text.lastIndexOf("o"));




// let num = 0;
// let sum = 0;

// while (num<98) {

//     num+=2;
//     sum=sum+num;
//     console.log(num);
// }
// console.log(sum);





