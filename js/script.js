
// ? Task #1
// ? Multiplying Numbers in a String

// function multiplyNums(nums) {
// 	let arr = nums.split(",").map(elem => Number(elem));
// 	return arr.reduce((acc, cur) => acc * cur)
// }

// ? Task #2
// ? Online Shopping

// function freeShipping(order) {
// 	let res = Object.values(order);
// 	let finalRes =  res.reduce((acc, cur) => Number(acc) + Number(cur))
	
// 	return finalRes > 50 ? true : false
// }

// ? Task #3
// ? Find Unique Positive Numbers from Array

// function uniqueArr(arr) {
// 	let res = arr.filter(elem => elem > 0)
// 	return res.filter((el, i) => res.indexOf(el) === i);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInput = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = uniqueArr(myInput.value.trim().split(" "));
// }

// ? Task #4
// ? War of Numbers

// function warOfNumbers(arr) {
// 	let even = arr.filter(elem => elem % 2 === 0);
// 	let odd = arr.filter(elem => elem % 2 !== 0);
// 	let evenSum = even.reduce((acc, cur) => Number(acc) + Number(cur));
// 	let oddSum = odd.reduce((acc, cur) => Number(acc) + Number(cur));
// 	return Math.abs(evenSum - oddSum);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInput = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = warOfNumbers(myInput.value.trim().split(" "));
// }

// ? Task #5
// ? Sum of the Items in an Array

// function sumArray(arr) {
// 	let myArr = arr.flat(Infinity);
// 	return myArr.reduce((acc, cur) => Number(acc) + Number(cur));
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInput = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = sumArray(myInput.value.trim().split(" "));
// }

// ? Task #6
// ? Remove Duplicates from an Array

// function removeDups(arr) {
// 	return arr.filter((elem, index) => arr.indexOf(elem) === index)
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInput = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = removeDups(myInput.value.trim().split(" "));
// }

// ? Task #7
// ? Capitalize the First Letter of Each Word

// function makeTitle(str) {
// 	let arr = str.split(" ");
// 	let res = arr.map(elem => elem[0].toUpperCase() + elem.slice(1, elem.length));
// 	return res.join(" ")
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => { 
//     let inp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = makeTitle(inp.value);
// }

// ? Task #8
// ? Is the Word an Isogram?

// function isIsogram(str) {
// 	let arr = str.toLowerCase().split("").sort()
// 	return arr.every((elem, index) => arr.indexOf(elem) === index)
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => { 
//     let inp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = isIsogram(inp.value);
// }

// ? Task #9
// ? Parity Bit Validation

// function validateBinary(b) {
// 	let arr = b.split("");
// 	let res = arr.filter(elem => Number(elem) === 1)
// 	if(res.length % 2 === 0)
// 		return true;
// 	return false;
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => { 
//     let inp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = validateBinary(inp.value);
// }

// ? Task #10
// ? Emphasise the Words

// function emphasise(str) {
// 	let arr = str.split(" ");
// 	let res = arr.map(elem => typeof elem === "string" && elem.length > 0 ? elem[0].toUpperCase() + elem.slice(1, elem.length).toLowerCase() : elem)
// 	return res.join(" ");
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => { 
//     let inp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = emphasise(inp.value);
// }

// ? Task #11
// ? Remove the Letters ABC

// function removeABC(str) {
// 	let regex = /[abc]/gi;
// 		if(!str.includes('a') && !str.includes('b') && !str.includes('c'))
// 			return null;
// 		return str.replace(regex, "");
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => { 
//     let inp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = removeABC(inp.value);
// }

// ? Task #12
// ? Reverse Words Starting With a Particular Letter

// function specialReverse(s, c) {
// 	let myArr = s.split(" ");
// 	let res = myArr.map(elem => elem.startsWith(c) ? (elem.split('').reverse()).join('') : elem )
// 	return res.join(" ")
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => { 
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     res.innerHTML = specialReverse(firstInp.value, secondInp.value);
// }

// ? Task #13
// ? Let's Sort This Array!

// function ascDesNone(arr, str) {
// 	if(str === "Asc")
// 		return arr.sort((a,b) => a-b);
// 	if(str === "Des")
// 		return arr.sort((a,b) => b-a)
// 	if(str === "None")
// 	return arr;
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let res = document.querySelector('.result');

//     res.innerHTML = ascDesNone(firstInp.value.trim().split(" "), secondInp.value);
// }

// ? Task #14
// ? Instant JAZZ

// function jazzify(arr) {
// 	return arr.map(elem => elem[elem.length -1] === "7" ? elem : elem + "7")
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = jazzify(firstInp.value.trim().split(" "));
// }

// ? Task #15
// ? Sum of Number Elements in an Array

// function numbersSum(arr) {
// 	let res = arr.filter(elem => typeof elem === 'number');
// 	if(res.length !== 0)
// 		return 0;
// 	return res.reduce((acc, cur) => Number(acc) + Number(cur));
// }

// ? Task #16
// ? Even or Odd: Which is Greater?

// function evenOrOdd(str) {
// 	let even  = str.split("").filter(elem => Number(elem) % 2 === 0)
// 	let odd = str.split("").filter(elem => Number(elem) % 2 !== 0)
	
// 	let evenSum = even.reduce((acc, cur) => Number(acc) + Number(cur));
// 	let oddSum = odd.reduce((acc, cur) => Number(acc) + Number(cur));
// 		if(oddSum > evenSum)
// 			return `Odd is greater than Even`;
// 		else if(evenSum > oddSum)
// 			return `Even is greater than Odd`;
// 		return `Even and Odd are the same`;
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = evenOrOdd(firstInp.value);
// }

// ? Task #17
// ? Remove Repeated Characters

// function unrepeated(str) {
// 	let arr =  str.split("").filter((elem, index) =>  str.split("").indexOf(elem) === index)
// 	return arr.join("")
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = unrepeated(firstInp.value);
// }

// ? Task #18
// ? Harshad Number

// function isHarshad(n) {	
// 	let arr = n.toString().split("").reduce((acc, cur) => Number(acc) + Number(cur));
// 	if(n % arr === 0)
// 		return true;
// 	return false;
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = isHarshad(firstInp.value);
// }

// ? Task #19
// ? Shhh Be Quiet Function

// function shhh(sentence) {
// 	let arr = sentence.split(" ").map(elem => elem.toLowerCase());
// 	let c = arr.join(" ")
// 	if(sentence.length === 0)
// 		return `"", whispered Edabit.`;
// 	return `"${c[0].toUpperCase()}${c.slice(1, c.length)}", whispered Edabit.`;
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = shhh(firstInp.value);
// }

// ? Task #20
// ? Clear the Fog

// function clearFog(str) {
// 	if(!str.match(/[fogFOG]/g))
// 		return "It's a clear day!";
// 	return str.replace(/[fogFOG]/g, "");
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = clearFog(firstInp.value);
// }