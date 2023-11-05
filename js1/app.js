// "use strict"

// let ism = 'Ulugbek';
// let soyadi = 'Kara';
// let yash = 23 ;
// console.log(ism);
// console.log(soyadi);
// console.log(yash);




// Arifmetika (arifmetic) operatorlari
// let a=5, b=10;
// console.log(a+b); //15
// console.log(a-b); //-5
// console.log(a*b); //50
// console.log(a/b); //0.5
// console.log(a%b); //5
// console.log(a++); //5
// console.log(a); //6
// console.log(++a); //7
// console.log(a); //7
// console.log(b--); //10
// console.log(b); //9
// console.log(--b); //8
// console.log(b); //8




//Solishtirish (comparison) operatorlari
// let a=5, b=10, c="5";
// const z=a;
// console.log(a==c); //true
// console.log(a===c); //false
// console.log(a==z); //true
// console.log(a===z); //true
// console.log(a!=b); //true
// console.log(a!=z); //false
// console.log(a>b); //false
// console.log(a<b); //true
// console.log(a>=b); //false
// console.log(a<=b); //true




//Tayinlash (assigment) operatorlari
// let a=5, b=10, c=15;

// console.log(a); //5 
// a=b;
// console.log(a); //10
// a+=b;
// console.log(a); //20
// a-=b;
// console.log(b); //10
// c*=b;
// console.log(c); //150
// c/=5;
// console.log(c); //30
// b%=2;
// console.log(b); //0




//Stirng belgillar ketma-ketligidan tashkil topgan malumot turi.
// let ism = 'Ulug\'bek'; //agar buni ichida 1talik (') ishlatsak shunday yozamiz 'Ulug\'bek' 
// console.log(ism);

// let soyadi = "Kara"; //agar buni ichida 2talik (") ishlatsak shunday yozamiz "Ulug\"bek" 
// console.log(soyadi);




//Birlashtirish (Concatenation)
//Qöshish (+) operatoridan foydalangan holda stringlarni qöshish yani concatenation qilish imkoniyati mavjud
// let ism = 'Uluğbek';
// let message = 'Salam ' + ism +' !';
// console.log(message);




//ES6 template literals korinishida string yaratish imkoniyatini taqdim etadi va ular backtick (` `) belgisidan foydalanib yaratiladi.
// let ism = 'Uluğbek';
// let message = `Salam ${ism}`;
// console.log(message);




//Mantiqiy operatorlar
//Boolean logic- asosiy 3 operatordan tashkil topgan AND, OR va NOT
//AND (va) operatori-agar barcha qiymatlar True'dan tashkil topgan bolsa, natijaviy qiymat True boladi, aks holda False qiymati yuzaga keladi.
//OR (yoki) operatori-agar hech bolmasa bir qiymat True'dan tashkil togan bolsa, natijaviy qiymat True boladi, aks holda False qiymati yuzaga keladi.
//NOT (yöq) operatori-berilgan qiymat True bolsa False, False bolsa True qiymati yuzaga keladi. Boshqacha qilib etganda berilgan qiymatni teskarisiga ogirib beradi.
//Mantiqiy operatorlar belgilari. AND belgisi(&&), OR belgisi(||), NOT belgisi(!)
// const yosh = 10;
// const a = yosh > 18; //false
// const b = yosh < 20; //true

// // AND operatori
// console.log(a && b); //false

// // OR operatori
// console.log(a || b); //true

// // NOT operatori
// console.log(!a); //true
// console.log(!b); //false

// //Mashq
// const htmlPassed = false;
// const cssPassed = true;
// let message = '';

// if (htmlPassed && cssPassed){
//     message = 'Siz Bootstrap kursini boshlashingiz mumkin';
// } else if (htmlPassed || cssPassed){
//     message = 'İltimos ikkinchi kursni ham tugating';
// } else{
//     message = 'İltimos birinchi ikkala kursni ham tugatib chiqing';
// }

// console.log(message);

//Funksiya va uni elon qilish
// function meningFunksiyam(son1,son2){
//     return son1 + son2;
// }

// console.log(meningFunksiyam(10,20));//30
// const result = meningFunksiyam(30, 40) //70
// console.log(result+10); //80

//Funksiyalarni elon qilish turlari 3 ga bolinadi
//1.Function declaration, 2.Fonction expressin, 3.Arrow function

//1.Function declaration-function kalit sozi yordamida elon qilinadi va berilgan scope boyivha korinishga ega boladi
// console.log(kvadrat(2)); //4

// function kvadrat(son){ //bu funksiyamizi elon qilishdan oldin ham ishlatish imkoniyati mavjud.
//     return son*son;
// }

// console.log(kvadrat(10)); //100

//2.Function expression-function kalit sozi yordamida elon qilinadi va malum bir ozgaruvchiga tenglab qoyish orqali elon qilinadi
// const kvadrat = function (son) {
//     return son+son;
// }
// console.log(kvadrat(10));

//Arrow function-function expression yozishning qisqaroq korinishi. bunday turdagi funksiyalarni yozishni turli xil yollari mavjud.
//1.function expressionga juda oxshash bolib, faqatgina arrow(=>) kalit soziga ega boladi.
// const kvadrat = (son) =>{
//     return son*son;
// }
// console.log(kvadrat(10)); //100

//2.agar funksiya tana qismi bir statementdan iborat bolsa return kalit sozi yozmaslik mumkin.
// const kvadrat = son => son*son;
// console.log(kvadrat(10)); //100

//3.agar funksiya hechqanday parametraga ega bolmasa
// const print = () => console.log("Printing...");
// print(); //Printing...

//4.ikki yoki undan kop parametrlarga ega bolgan funksiya uchun, parametrlar qavslar ichida bolishi shart
// const volume = (a, b, c) => a * b * c;
// console.log(volume(1, 2, 3)); //6




//Funksiyalar boyicha amaliyot

//Juft yoki toq.  
//? berilgan sonni juft yoki toq ekanligini aniqlab beradigan funksiya tuzing

//Function declaration
// function evenOrOddDec(number){
//     if (number % 2 === 0){
//         console.log(`${number} is even`);
//     } else{
//         console.log(`${number} is odd`);
//     }
// }

// evenOrOddDec(2);

//Function expression
// const evenOrOddDec = function (number){
//     if (number % 2 === 0){
//         console.log(`${number} is even`);
//     } else{
//         console.log(`${number} is odd`);
//     }
// }

// evenOrOddDec(2);

//Arrow function
// const evenOrOddDec = number =>{
//     if (number % 2 === 0){
//         console.log(`${number} is even`);
//     } else{
//         console.log(`${number} is odd`);
//     }
// }

// evenOrOddDec(3);

//İkki sondan kattasi
//? berilgan ikki sondan kattasini qaytaradigan funksiya yozing 

//Function declaration
// function maxDec(number1, number2){
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }
// console.log(maxDec(10,5));

//Function expression
// const maxExp = function (number1, number2){
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }
// console.log(maxExp(4,5));

//Arrow function
// const maxArrow = (number1, number2) => {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }
// console.log(maxArrow(55,96));


//Berilgan sonni teskarisiga ogirish
//? Berilgan sonni teskarisiga ogirib qaytaradigan funksiya yozing

//Function declaration
// function reverseDec(number){
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number (reversedStr);
// }
// console.log(reverseDec(85));

//Function expression
//  const reverseExp = function (number){
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number (reversedStr);
// }
// console.log(reverseExp(98));

//Arrow function
// const reverseArrow = number => {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number (reversedStr);
// }
// console.log(reverseArrow(5884));




//Array-bir vaqtning ozida bir necha qiymatlarni ozida saqlashi mumkin bolgan obyekt. quyda languages nomli 3 elementdan tashkkil topgan array korsatilgan.
//Misol:
// const languages = ['js', 'java', 'go'];

//Array yaratish 2 xil usulda amalga oshadi

//.Array literal korinishida
//!Array yaratishning eng oson usuli array literal hisoblanadi, tortburchak qavslar([]) dan foydalanib yaratiladi.
// const languages = ['js', 'java', 'go'];

//.New kalit sozidan foydalanib
//Javascript dasturlash tilidan array'larni (new) kalit sozidan foydalanib HAM YARATİSH İMKONİYATİ BOR
// const languages = new Array ('js', 'java', 'go');

//Array oz ichida turli xil qiymatlarni saqlashi mumkin
//bosh array:
// const emptyArray = [];

//sonlar array'i:
// const sonArray = [1,2,9,-2];

//stringlar array'i:
// const stringArray = ['Javascript', 'Java', 'Go'];

//aralash qiymatlardan tashkil topgan array:
// const mixArrar = ['Javascript', 2, false, null];


//Arraydan elementni olish
//Array elementlarini uning indexlaridan foydalanib olish mumkin.
//!Array elementlarining raqamlanishi 0 dan boshlanadi
//Misol:
// const helloArray = ['h', 'e', 'l', 'f', 'k'];
// //birinchi elemen
// // console.log(helloArray[0]); //h

// //uchinchi element
// console.log(helloArray[2]); //l


//Arrayga element qoshish 
// Arrayga element qodhish uchun ( push() ) yoki ( unshift() ) array metodlaridan foydalanish mumkin

//psuh() metodi yordamida array oxiriga element qoshish mumkin:
// const languages = ['js', 'java'];
// languages.push('go');
// console.log(languages);//['js', 'java', 'go'];

//unshift() metodi yordamida array boshiga element qoshish mumkin
// const languages = ['js', 'java'];
// languages.unshift('go');
// console.log(languages);//['go', 'js', 'java'];


//Array elementni ozgartirish
//Array indexlaridan foydalanib uning element qiymatini ozgartirish imkoniyati mavjud:
// const languages = ['js', 'java', 'go'];
// languages[1] = 'swift';
// console.log(languages); //['js', 'swift', 'go']


//Array elementni ochirish
//pop() metodidan foydalanib array ichidagi oxirgi elementni ochirish imkoniyati mavjud. Method ochirilgan elementni qaytaradi:
// const languages = ['js', 'java', 'go', 'swift'];
// console.log(languages);
// const deleteLanguages = languages.pop();
// console.log(languages); ['js', 'java', 'go'];
// console.log(deleteLanguages); //swift 

//shift() metodidan foydalanib array ichidagi birinchi elementni ochirish imkoniyati mavjud. Method ochirilgan elementni qaytaradi:
// const languages = ['js', 'java', 'go', 'swift'];
// console.log(languages);
// const deleteLanguages = languages.shift();
// console.log(languages); ['js', 'java', 'go'];
// console.log(deleteLanguages); //swift 


//Array uzunligini aniqlash
//Array uzunligi yani uning ichidagi elementlar sonini aniqlash uchun (lenght) xossasidan foydalaniladi:
// const languages = ['js', 'java', 'go']
// console.log(languages.length); //3





//Array methods
//Javascript dasturlash tilida array bn ishlashi osonlashtiradigan maxsus methodlar mavjud.
//Array methodlari:
//1.concat() - 2 yoki undan ortiq arraylarni birlashtirib natijani qaytaradi. (immutable (ozgarmas)).
//2.indexOf() - arrayni ichidan elementni izlab uning joylashgan ornini (index) qaytaradi. (immutable (ozgarmas)).
//3.find() - birinchi bolib shartni bajargan array elementini qaytaradi. Array ichidagi elementni qidirishda foydalaniladi. (immutable (ozgarmas)). 
//4.findIndex() - birinchi bolib shartni bajargan array elementini joylashgan ornini (index) qaytaradi. Array ichidagi elementni joylashgan joyini topishda foydalaniladi. (immutable (ozgarmas)).
//5.forEach() - har bir element uchun berilgan funksiyani chiqaradi. (immutable (ozgarmas)).
//6.map() - har bir massiv elementi uchun berilgan funksiyani chiqarib yangi array yaratadi. (immutable (ozgarmas)).
//7.filter() - berilgan shartni bajargan elementlarni saralab olib yangi massiv yaratadi. (immutable (ozgarmas)). 
//8.includes() - massivda korsatilgan element mavjudligigni tekshiradi. (immutable (ozgarmas)).
//9.push() - otgan darsda otdik 
//10.unshift() - otgan darsda otdik 
//11.pop() - otgan darsda otdik
//12.shift() - otgan darsda otdik
//13.sort() - elementlarni alfavit tartibida, satrlar sifatida va osish tartibida tartiblaydi.
//14.slice() - massivning korsatigan qismini tanlab qaytaradi. (immutable (ozgarmas)).
//15.splice() - massivdagi mavjud elementlarni olib tashlaydi yoki almashtiradi va yoki yangi elementlarni qoshadi.

//Misollar:
//concat()
// const array1 = [1,4];
// const array2 = [2,3,7];
// const result = array1.concat (array2);
// console.log(result); //[1,4,2,3,7]

// //find()
// const findValue = (number) => number === 2;
// const foundValue = result.find (findValue);
// console.log(foundValue); //2

// //filter()
// const filterValues = number => number > 5;
// const filteredValues = result.filter(filterValues);
// console.log(filteredValues); //7

// //map()
// const mapValues = number => 'Son: ' + number;
// const mappedValues = result.map(mapValues);
// console.log(mappedValues); //['Son: 1', 'Son: 4', 'Son: 2', 'Son: 3', 'Son: 7']

// //sort()
// const sortValues = (number1, number2) => number1 - mumber2;
// result.sort();
// console.log(result); //[1,2,3,4,7]






//Object'lar
//JavaScript-bir nechta malumotlar toplanishi saqlashga imkon beruvchi malumot turi (data-type).
// const dasturchi ={
//     ism: 'Uluğbek',
//     yosh: 24
// } 
//  console.log(dasturchi);

//Object elon qilish (yaratish)
//!Obyektlar figuralik qavslar ({}) yordamida yaratilib, har bir xossasi (property), kalit:qiymat korishiga ega boladi.
// const dasturchi ={
//     ism: 'Uluğbek',
//     yosh: 24
// } 
//  console.log(dasturchi);


//Object xossasini olish
//!xossaning qiymatini kallit yordamida olish mukin
//1. Dot(.) yani nuqta belgisidan foydalanib
// const dasturchi = {
//     ism: 'Ulugbek',
//     yosh: 24
// }
// console.log(dasturchi.ism);

//2. Qavs ([]) belgisidan foydalanib
// const dasturchi = {
//     ism: 'Ulugbek',
//     yosh: 24
// }
// console.log(dasturchi['isim']);


//Nested (ichma-ich) objectlar
//!Object ichida boshqa objectni saqlashi mumkin
// const dasturchi = {
//     ism: 'Ulugbek',
//     yosh: 24,
//     manzil:{
//         mamlakat:'Uzbekistan',
//         shahar: 'Tashkent',
//         uy: 152
//     }
// }
// console.log(dasturchi.manzil);
// console.log(dasturchi.manzil.shahar);


//Object methodlari
//!Object oz ichida funksiyalar saqlashi mumkin va ular methodlar deb nomlanadi
// const dasturchi = {
//     ism: 'Ulugbek',
//     yohs: 24,
//     salomlashish: function() {
//         console.log('Salom');
//     }
// }

// console.log(dasturchi.salomlashish());


//this kalit sozi
//!Method ichida obyektning xususiyatlarini ishlatish uchun this kalit sozidan foydalaniladi
// const dasturchi = {
//     ism: 'Ulugbek', 
//     yosh: 24,
//     salomlashish: function() {
//         console.log('Salom! Mening ismim ' + this.ism);
//     }
// }
// console.log(dasturchi.salomlashish());


//Maxsus methodlar 
//1. Bobject.keys()
// const dasturchi = {
//     ism: 'Ulugbek',
//     yosh: 24
// }
// console.log(Object.keys(dasturchi));

//2. Object.values()
// const dasturchi = {
//     ism: 'Ulugbek',
//     yosh: 24
// }
// console.log(Object.values(dasturchi));






// if / else 
//Conditional statemen- Javascript dasturlash tilida berilgan shartga kkora malum bir oqimni ishga tushirish 
//boshqacha qilib aytganda berişgan shartga kora malum bir harakatni bajarishga aytiladi
//Misol:
//Agar fodalanuvchiroyhatdan otgan bolsa
  // -shaxsiy kabinetga yonaltirish 
//Aks holda 
  // -Royhatdan otish sahifasiga yonaltirish

//Javascript dasturlash tilida 2 asosiy conditional statemenlar mavjud:
// !if - 3 qisimga bolinadi 
//1.if, 2.if/else, 3.if/else/if/else
// !switch

//1. if statement qavs ichida berilgan shartga kora qaror qabul qiladi:
//agar shart rost (true) bolsa if bloki ishga tushadi,aks holda blok ichidagi kod otakizb yuboriladi
// const number = 2;
// if (number > 0){
//     console.log('Berilgan son musbat');
// }
// console.log("ifdan keyingi qator");

//2.if statement shart ixtiyoriy ravishda else qismga ega bolishi mumkin: 
//agar shart rost bolsa (true) bolsa if blokki ishga tushadi, aks holda else blokki ishga tushiriladi
// const number = -2;
// if (number > 0){
//     console.log('berligan son musbat');
// } else {
//     console.log('berilgan son manfiy');
// }
// console.log('if/elsedan keyingi qator');

//3.if/else statement odatda ikki holatdan birini ishga tushirish uchun ishlatilinadi. Agar siz ikktadan kop bolgan holatlarni oz ichiga oladigan shart yozmoqchi bolsangiz
//if/elseif statementdan foydalanishingiz mumkin: agar birinchi shart rost bolsa birinchi blok ishga tushadi, aks holda ikkinchi blok shartga tekshiriladi.
// const number = 2;
// if (number > 0){
//     console.log('berilgan son musbat');
// } else if (number === 0){
//     console.log('berilgan son 0');
// } else{
//     console.log('berilgan son manfiy');
// }






//Switch
//!Javascript dasturlash tilida qaror qabul qilishda switch statmentidan foydalaniladi.
//switch statment berilgam ifodani baholab, shunga togri keluvchi kod blokni ishga tushurib yuboradi
// const number = 2;
// let output;

// switch (number) {
//   case 1:
//     output = 'bir';
//     break;
//   case 2:
//     output = 'ikki';
//     break;
//   default:
//     output = 'topilmadi'
//     break;    
// }
// console.log(`Qiymat: ${output}`);






//For
//!Javascript dasturlash tilida for loopidan malum bri kod blokini bir necha bor ishga tushirish imkoniyati mavjud.
//Ummumiy korinishi
//for(boshlangichIfoda; tekshuruvSharti; ifodaniYangilash) {for loop kod bloki (tanasi)}
//*Boshlangich ifoda- ozgaruvchi(lar)ni elon qilish uchun yoziladi va bir marta ishga tushdi.

//*Tekshuruv sharti- berilgan shart tekshiriladi va agar u rost (true) bolsa belgilangan kod blok
//ishga tushiriladi, aks holda yani yolgon (false) bolgan holatda foor lop tugatiladi.

//İfodani yangilash- tekshuruv sharti rost bolgan holatda, boshlangich ifoda yangilanadi.

//Misollar:
//foor loopdan foydalanib "salom dunyo" yozuvini 10 martda ekranga chiqaring
// for (let i = 0; i < 10; i++){
//   console.log('Salom dunyo!');
// }

//foor loopdan foyadalanib 1 dan 10 ga bolgan sonlar yigindisini hisoblang
// let sum = 0;

// for (let i = 1; i <= 10; i++){
//   sum += i; //sum = sum + i
// }

// console.log(`Summa: ${sum}`);


//Break - statement yordamida berilgan malum bir shart bajarilgan holatda loopni toxtatish imkoniyati mavjud
//birdan 5 gacha bolgan sonlarni consolega chiqaruvchi loop
// for (let i=1; i<=5; i++){
//   //break condition
//   if (i===3){
//     break;
//   }
//   console.log(i);
// }


//Continue statement yordamida berilgan loopning joriy takrorlanishi (interatsiya) otkazib yuborish imkoniyati mavjud
////birdan 5 gacha bolgan sonlarni consolega chiqaruvchi loop
// for (let i=1; i<=5; i++){
//   //continue condition
//   if(i===3){
//     continue;
//   }
//   console.log(i);
// }








//While
//!Javascript dasturlash tilida malum bir blok kodni bir necha marta shga tushirish uchun while statementdan foydalanish mumkin. 
//U for loop bilan vazifasi deyarli bir xil bolib, faqatgina yozilishida (syntax) farqi bor.
//Umumiy korinishi/ while (tkshuruvSharti) {qaytaraladigan blok kodi (tanasi)}
//Tekshuruv sharti - while loop berilgan tekshuruv shartini tekshirib koradi va agar ifoda rost bolsa berilgan kod blokni ishga tushiradi, aks holda oz ishini toxtatadi.

//Misollar:
//!while loopdan foydalanib "Salom dunyo" yozuvuni 10 martta ekranga chiqaring
// let i = 0;

// while (i < 10){
//   console.log('Salom dunyo!');
//   i++;
// }

//While loopdan foydalanib 1dan 10 ga bolgan sonlar yigindisi hisoblang
// let i = 1, sum = 0;

// while (i <= 10) {
//   sum += i;
//   i++;
// }

// console.log(`Summa: ${sum}`);


//do/while
//do/while statement while loopga juda ham oxshash bolib, faqatgina farqi do/whli kamida bir martta ishga tushishi kafolatlangan.
//Ummiy korinishi: do{qaytaraladigan blok kodi (tanasi)}while (tekshuruvSharti)

//Misollar:
//!do/while loopdan foydalanib "Salom dunyo" yozuvuni 10 martta ekranga chiqaring
// let i = 0;

// do{
//   console.log('alom dunyo');
//   i++
// }while (i < 10)

//For yoki while
//Agar bizga berilgan kod blokni necha martta ishga tushirishimiz oldindan malum bolsa unday holatlarda foor loopdan foydalangan maqul

//Agar bizga berilgan kod blokni necha marta ishga tushirishimiz nomalum bolsa unday holatlarda while loopdan foydalangan maqul







//Oqim boshqaruvi boyicha amaliyot
//Korsatilgan chegaradagi raqamni toping
//? Kiritilgan son berilgan chegara (range) ichidaligini aniqlovchi dastur tuzing
// const inRange = (min, max, number) => {
//   if (number >= min && number <= max){
//     console.log(`Berilgan ${number} soni ${min} va ${max} orasida`);
//   } else {
//     console.log(`Berilgan son ${min} va ${max} orasida emas`);
//   }
// }

// const minRange = 10;
// const maxRange = 30;
// const giveNumber = 20;

// console.log(inRange(minRange, maxRange, giveNumber));


//? Berilgan ikki son ustida korsatilgan arifmetik amalni bajaring va natijasini consolega chiqaring
// const simpleCalculator = (num1, num2, oper) => {
//   switch (oper) {
//     case "add":
//       console.log(`Yigindisi: ${num1+num2}`);
//       break;
//     case "subtract":
//       console.log(`Ayirmasi: ${num1-num2}`);
//       break;
//     case "multiply":
//       console.log(`kopaytmasi: ${num1*num2}`);
//       break;
//     case "divide":
//       console.log(`Bolinmasi: ${num1/num2}`);
//       break;
//     default:
//       console.log('Aniqlanmagan amal');  
//   }
// }

// const a = 20;
// const b = 5;
// const operation = "add"
// console.log(simpleCalculator(a, b, operation));


//? Berilgsn massivdagi eng katta qiymatga ega bolgan elementni ekranga chiqaruvchi dastur yozing
// const getLargestElemnt = (array) => {
//   let largest = array[0];
//   for (let i=1; i < array.length; i++){
//     if (array[i] > largest) {
//       largest = array[i];
//     }
//   }
//   return largest;
// }

// const nums = [6, 51, 7, 63, 37, 673, 38, 349, 127];
// const result = getLargestElemnt(nums);
// console.log(`Eng katta elemnt: ${result}`);







//Element tanlab olish
//Element section- HTML hujjatdagi elementlarni bir necha yol bilan tanlab olish imkoniyati mavjud bular DOM API orqali amalga oshadi
//Element(lar)ni tanlab olish yollari:
//1-getElementById - elementni ID orqali tanlab olish
//2-getElementsByName - elementlarni nomi orqali tanlab olish 
//3-getElementsByClassName - elementlarni class nomi orqali tanlab olish
//4-getElementsByTagName - elementlarni tag nomi orqali tanlab olish
//5-querySelector - CSS selektor orqali tanlab olish


//1-getElementByID() - metodi orqali HTML hujjatimizdagi elementni ID orqali tanlab olish imkoniyati mavjud
//document.getElementById('idNomiShuYergaYoziladi')
// const heading1 = document.getElementById('box');
// console.log(heading1);

//2-getElementsByName() - metodi orqali HTML hujjatimizdagi elementlarini nomi tanlab olish imkoniyati bor
//document.getElementsByName('elementNomiShuYergaYoziladi')
// const inputEls = document.getElementsByName('username');
// const inputEl = inputEls[0]
// console.log(inputEl);

//3-getElementsByClassName() - metodi orqali HTML hujjatimizdagi elementlarni class nomi orqali tanlab olish imkoniyati mavjud
//document.getElementsByClassName('elementNomiShuYergaYoziladi')
// const headings = document.getElementsByClassName('heading');
// console.log(headings);
// headings[1].remove();

//4-getElementsByTagName() - metodi orqali HTML hujjatimizdagi elementlarni tag nomi orqali tanlab olish imkoniyati mavjud
//document.getElementsByTagName('elementNomiShuYergaYoziladi')
// const headings = document.getElementsByTagName('h1')
// console.log(headings);

//5-querySelector - metodi orqali HTML hujjatimizdagi elementni CSS selektor orqali tanlab olish imkoniyati mavjud
//document.querySelector('CSSSelektorShuyergaYoziladi')
// const heading1 = document.querySelector('#box');
// console.log(heading1);

//querySelectorAll - metodi  orqali HTML hujjatimizdagi elementlarni Css selektor orqali tanlab olish imkoniyati mavjud
//documnet.querySelectorAll('CSSSelektorShuyergaYoziladi')
// const headings = document.querySelectorAll('h1')
// console.log(headings);






//Elementlarni ozgartirish 
//1-Element matnini ozgartirish:
//!Tanlab olingan element matnini ozgartirish uchun elementning maxsus (textContent) attributidan foydalanishimiz mumkin.
// const element = document.getElementById('box')
// element.textContent = 'Yangi matn' 


//2-Element qiymatini ozgartirish
//!Tanlab olingan element qiymatini ozgartirish uchun elementning maxsus (value) attributidan foydalanishimiz mumkin
// const inputElement = document.getElementById('username');
// console.log(inputElement);
// // inputElement.value = 25;
// inputElement.placeholder = 'Yangi placeholder'


//3-Elementni tanasini ozgartirish
//!Tanlab olingan elementni tanasini boshqa HTML element bilan almashtirish uchun elementning (innerHTML) attributidan foydalanishimiz mumkin.
// const heading = document.getElementById('box');
// heading.innerHTML = '<h5>Sarlavha</h5>';






//Elementlarni qoshish va ochirish
//1-Element yaratish
//!Javascript dasturlash tilida DOM APIning (createElement()) methodini chiqarish orqali yangi element yaratish imkoni mavjud
//Umummiy korinishi  document.createElement(tagNomi, options)
//Misol:
// const paragraph = document.createElement('p');
// console.log(paragraph);

//!DOM API orqali text yaratish uchun uning (createTextNode() methodidan foydalanishimiz mumkin)
// const text = document.createTextNode('Bu yerda xatbosh')
// console.log(text);


//2-Element qoshish
//!DOM APIning (appendChild()) methodi chaqirish orqali elementlarni ozaro qoshish imkoniyati mavjud
//Ummumiy korinishi ( element.appendChild(anotherElement) )
//Misol:
// const paragraph = document.createElement('p');
// const text = document.createTextNode('Buyerda xatboshi yozilgan');
// paragraph.appendChild(text);

// const box = document.getElementById('box');
// box.appendChild(paragraph)

// console.log(paragraph);

//!DOM API orqali berilgan node elementning parent (ota-ona) va child (farzand) elementlarni korish imkoniyati mavjud.
//Paretni korish uchun berilgan elementning ( parentelement ) yoki ( parentNode ) atributiga murojat qilishimiz mumkin.
//Childrenlarni korish uchun esa ( children ) yoki ( childNodes ) atributiga murajat qilish kerak boladi
//Misol:
// const paragraph = document.createElement('p');
// const text = document.createTextNode('Buyerda xatboshi yozilgan');
// paragraph.appendChild(text);

// const box = document.getElementById('box');
// box.appendChild(paragraph)

// console.log(box.parentElement);
// console.log(box.children);


//Element ochirish
//!Javascript dasturlash tilida DOM APIning ( remove() ) methodini chaqirish orqali korsatilgan elementni DOMdan olib tashlash imkoniyati mavjud.
//Misol:
// const paragraph = document.getElementById('box');
// paragraph.remove()








//Hodisalar (events)
//Event (hodisalar) - foydalanuvchi yoki brauzerning ozi tomonidan amalga oshirilishi mumkin bolgan brauzerda sodir boladigan hodisalar
//Misol uchun: 
//*Sahifa yuklandi (page load) hosisasi
//*Foydalanuvchi tugmani bosish hodisasi
//*Foydalanuvchi toldirilgan formani jonatish hodisasi
//!Hodisalar yuz berganda unga javob berish (javascript funksiyani ishga tushurish) orqali veb sahifamizni interaktiv qilishimiz mumkin
//Elementlarga hodisalarni boglashni uchta usuli mavjud:
//1-Inline event handlers
//2-Event handler properties
//3-Event listeners


//1-Inline event handler
//Event HTML tegining atributi sifatida funksiya bilan korsatib otiladi va foydalaniladigan funksiya esa script qismida yozilib otiladi
//Umumiy korinishi:
//<element eventName = "JavascriptFunction()">Content</element>
//Misol:
//<div>
  //<h1 id="heading">Sarlavha</h1>
  //<button onclick="changeHeading()">Sarlavhani ozgartirish</button>
//</div>

// const changeHeading = () => {
//   const heading = document.getElementById('heading');
//   heading.textContent = 'Yangi sarlavha'
// }

//!Inline eventlar ishlatish osn bolishsaga qaramay odatda ular faqatgina organish jaroyida ishlatib otiladi. Kop loyihalarda inline eventlar orniga boshqa usuldan foydalanishadi

//2-Inline event properties
//Inline event properties bundan oldingi usulga juda oxshash bolib asosiy farqi ndi hodisa roy berganda ishga tushadigan funksiya 
//inline atribut lorinishida emas balki tanlab olingan element uchun atribut korinishida beriladi. Yani funksiya korsatish javascript dasturimizda amalga oshadi.
//Umumiy korinishi:
// const element = document.getElementById('elementId');
// element.eventName = javascriptfunction;
//Misol:
//<div>
  //<h1 id="heading">Sarlavha</h1>
  //<button id="changeHeadingBtn">Sarlavhani ozgartirish</button>
//</div>

// const changeHeading = () => {
//   const heading = document.getElementById('heading');
//   heading.textContent = 'Yangi sarlavha';
// }

// const btn = document.getElementById ('changeHeadingBtn');
// btn.onclick = changeHeading;

//!Inline event properties usuli bundan oldingi usulimizdan yaxshiroq bolishiga qaramay uni bazi bir kamchiliklari mavjud. Masalan bir vaqtning ozida bir nechta handler qoshish imkoni yoq.


//3-Event listener - elementdagi hodisani tinglab turadi va shu hodisa yuz berganda kerakli funksiyani ishga tushirib yuboradi.
//Umumiy korinishi:
//element.addEventListeren(eventName, javascriptFunction);
//Misol:
//<div>
  //<h1 id="heading">Sarlavha</h1>
  //<button id="changeHeadingBtn">Sarlavhani ozgartirish</button>
//</div>

// const changeHeading = () => {
//   const heading = document.getElementById('heading');
//   heading.textContent = 'Yangi sarlavha'
// }

// const btn = document.getElementById('changeHeadingBtn');
// btn.addEventListener('click', changeHeading)

//Loyihalada odatda event listenerlardan foydalanishadi.














//Kop uchraydigan hodisalar
//!Javascript dasturimizda kop uchraydigan hodisalar bilan birga ishlaymiz:
//1-MouseEvents
//2-FormEvents
//3-KeyBoardEvents


//1-MouseEvents - eng kop ishlatiladigan hodisalar qatoriga kiradi.
//Hodisa va tavsifi
//* click - Sichqoncha bosilib va qoyib yuborganda ishga tushadi
//* dblclick - Elementga ikki marta bosilganda ishga tushadi
//* mouseenter - Sichqoncha elementni ustiga kelganda ishlaydi
//* mouseleave - Sichqoncha elementni tark etganda ishga tushadi
//* mousemove - Sichqoncha element ichida harakat qilganda ishga tushadi
//Misol:
// const notifyDoubleClick = () => {
//   console.log('Element ikki marta bosildi');
// }

// const btn = document.getElementById('btn');
// btn.addEventListener('dblclick', notifyDoubleClick)


//2-Form events - forma bilan ishlaganda yuz beradigan hodisalar
//Hodisa va tavsifi
//* submit - Form jonatishda (submit) ishga tushadi
//* focus - element focus bolganda ishga tushadi
//* blur - Element focus yoqotganda ishga tsuhadi


//3-Keyboard Events - klaviatura tugmachasini bosishqoyib yuborish va tugmani bosib turish kabi hodisalarni oz ichiga oladi
//Hodisa va tavsifi
//* keydown - Klaviatura tugmasi bosilganda ishga tushadi
//* keyup - Klaviatura tugmasi qoyib yuborilganda ishga tushadi
//* keypress - Klaviatura tugmasi bosilib turganda ishga tushadi
//Misol:
// document.addEventListener('keydown', event => {
//   console.log('key: ' + event.key);
//   console.log('code: ' + event.code);
// });











// //DOM boyicha amaliyot
// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// const generate = () => {
//   const minEl = documnet.getElementById('min');
//   const maxEl = documnet.getElementById('max');
//   const min = Number(minEl.value);
//   const max = Number(maxEl.value);
 
//   if (minEl.value === '' || maxEl.value === '') {
//     alert("Iltimos min va max qiymatlarini kirirting!")
//   }

//   if (min > max) {
//     alert("Min maxdan kichik bolishi kerak")
//     return;
//   }
  
//   const placeholderEl = document.querySelector('#placeholder');
//   placeholderEl.textContent = getRandomNumber(min, max);
// }

// const btnEl = document.getElementById('generate');
// btnEl.addEventListener('click', generate);
 
