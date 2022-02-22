function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------- 1 -----------------------
/*
Palyginti du skaičius a ir b. Išvesti į konsolę, kuris
didesnis arba jie lygūs. 4t
*/

// let a = rndNum(0, 10)
// let b = rndNum(0, 10)

// if (a > b){
//   console.log(`A daugiau už B: A=${a}, B=${b}`);
// } else if (a < b) {
//   console.log(`B daugiau už A: B=${b}, A=${a}`);
// } else {
//   console.log(`Lygu: A=${a}, B=${b}`);
// }

// ----------------------- 2 -----------------------
/*
Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. 5t
*/

// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

// ----------------------- 3 -----------------------
/*
Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.
Išvesti juos konsolėje. 5t
*/

// for (let i = 0; i <= 5; i++){
//   console.log(i*2);
// }

// ----------------------- 4 -----------------------
/*
Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10.
Išvesti juos konsolėje. 5t
*/

// for (let i = 0; i < 5; i++){
//   console.log(rndNum(1, 10));
// }

// ----------------------- 5 -----------------------
/*
Naudojant ciklą, sugeneruoti atsitiktinius skaičius nuo 1 iki 10.
Paskutinis atspausdintas skaičius turi būti 5. 7t
*/

// while (true){
//   let x = rndNum(1, 10)
//   console.log(x);
//   if (x == 5){
//     break
//   }
// }

// ----------------------- 6 -----------------------
/*
Skuruti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų
skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant
sort funkcijos. 7t
*/

// let array = [];
// let ilgis = rndNum(20, 30);

// for (let i = 0; i < ilgis; i++) {
//   array.push(rndNum(10, 30));
// }

// let max = array[0];
// let max2 = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max2 = max;
//     max = array[i];
//   }
// }

// console.log("Pirma didžiausia reikšmė masyve: " + max);
// console.log("Antra didžiausia reikšmė masyve: " + max2);
// console.log(array);

// ----------------------- 7 -----------------------
/*
Sugeneruoti masyvą, kurio reikšmės atsitiktinės raidės A, B, C, D, o
ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. 7t
*/

// let string = "ABCD";
// let array = [];
// let ilgis = 100;

// let countA = 0;
// let countB = 0;
// let countC = 0;
// let countD = 0;

// for (let i = 0; i < ilgis; i++) {
//   let x = rndNum(0, 3);
//   let y = string.charAt(x);
//   array.push(y);
// }

// array.forEach((element) => {
//   if (element == "A") {
//     countA++;
//   } else if (element == "B") {
//     countB++;
//   } else if (element == "C") {
//     countC++;
//   } else if (element == "D") {
//     countD++;
//   }
// });

// console.log(array);
// console.log('A: ' + countA);
// console.log('B: ' + countB);
// console.log('C: ' + countC);
// console.log('D: ' + countD);

// ----------------------- 8 -----------------------
/*
Parašyti funkciją - lygieSuma. Funkcijos parametrai - du kintamieji.
Testų reikalavimai - abu kintamieji turi būti arba skaičiai arba
masyvai (negali būti vienas skaičius, kitas masyvas). Jei kintamieji
skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti
masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma
nelyginė. 10t
*/

// const lygineSuma = (a, b) => {
//   let sum = a + b;
//   if (
//     (typeof a === "number" && typeof b === "number") ||
//     (a === Array.isArray(a) && b === Array.isArray(b))
//   ) {
//     return true;
//   } if (sum % 2 != 0){
//     console.log("Nelyginė suma");
//   } 
//   if (true){
//     return sum
//   }
// } 

// console.log(lygineSuma(8, 2));

// ----------------------- 9 -----------------------
/*
Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį.
Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi
grąžinti ar pateiktas skaičius yra pirminis (Pirminis skaičius yra
tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos). 10t
*/

// const pirminisSkaicius = (a) => {
//   let b = 0
//   if (typeof a === "number"){
//     return b = true}
//    else if (a % a == 0 && a % 1 == 0){
//     return a
//   }
// }

// console.log(pirminisSkaicius(14));

// ----------------------- 10 -----------------------
/*
Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį -
masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti
telefono numerį tokiu formatu - "(XXX) XXX-XXXX"
*/

//  const telefonoNumeris = (array) => {
//   if (array === Array.isArray(array) && array.length == 10 && typeof array[i] === "number"){
// return (``)
//   }

//  }

//  console.log(telefonoNumeris(3708856224));









// PATAISYTI
//------------------------------------------------- 6 -----------------------------------------------------

// let masyvas = [];
// let ilgis = rand(20,30);

// for (let i = 0; i < ilgis; ++i){
//     masyvas[i] = rand(10,30);    // Abu variantai vienodai galimi
//     // masyvas.push(rand(10,30))
// }
// console.log(masyvas);
// for (let i = 0; i < ilgis; ++i){
//     for(let j = 0; j < ilgis; ++j) {
//         if (masyvas[i] < masyvas[j]){
//             let temp = masyvas[i];
//             masyvas[i] = masyvas[j];
//             masyvas[j] = temp;
//         }
//     }
// }
// console.log(masyvas);

// console.log(`Antra didžiausia reikšmė yra ${masyvas[ilgis-2]}`);
// let max = 0;
// let max2 = 0;
// for (let i = 0; i < ilgis; ++i){
//     if (masyvas[i] > max){
//         max2 = max;
//         max = masyvas[i];
//     } else if (masyvas[i] > max2){
//         max2 = masyvas[i];
//     }
// }
// console.log(`Antra didžiausia reikšmė yra ${max2}`);

//------------------------------------------------- 8 -----------------------------------------------------
// let a = [6, 4]
// let b = [8, 2, 5]

// const lygineSuma = (a, b) => {
// let sum = 0
//   if (typeof a == 'number' && typeof b == 'number')  {
//     sum = a + b
//   } if (sum % 2 != 0) {
//   sum = 'Suma nelyginė'
// } if (Array.isArray(a) == true && Array.isArray(b) == true){
//   sum = a.length + b.length
// }
// return sum
// }

// console.log(lygineSuma(a, b));

//------------------------------------------------- 9 -----------------------------------------------------
// const pirminisNumeris = (a) => {
//   let x = 0
//   for (let i = 2, s = Math.sqrt(a); i <= s; i++){
//     if (a % i === 0) {
//       x = `${a} nera pirminis`
//     } else  if (a % i !== 0){
//       x = 'Pirminis: ' + a
//     }
//   }
//   return x
// };

// console.log(pirminisNumeris(23));

//------------------------------------------------- 10 -----------------------------------------------------

// let a = [3, 7, 0, 8, 6, 8, 2, 9, 1, 4]

// const telefonoNumeris = (a) => {
//   let x = 0
//   if (Array.isArray(a) != true || a.length != 10){
//     x = 'Ne masyvas'
//   } else {
//   x = '('+a[0]+a[1]+a[2]+')'+' '+a[3]+a[4]+a[5]+'-'+a[6]+a[7]+a[8]+a[9]
// }
//   return x
// }

// console.log(telefonoNumeris(a));

//-----

// function telefonoNumeris(a){
//   if (!Array.isArray(a)){
//       return `Kintamasis nėra masyvas`;
//   }
//   if (a.length != 10){
//       return `Kintamojo ilgis nėra 10`;
//   }
//   for (let i = 0; i < 10; ++i) {
//       if (typeof(a[i]) !== 'number'){
//           return 'Ne visi masyvo elementai yra skaičiai';
//       }
//   }
//   return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
// }

// console.log(telefonoNumeris([4,5,6,4,5,3,2,1,4,8]));