
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