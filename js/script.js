
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