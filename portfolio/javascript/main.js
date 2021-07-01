
console.log('Hello from js')

let firstname = ' anastasia'

console.log('Me name is' + firstname)

firstname = 10

console.log(typeof 'jrughke')
console.log(typeof 10)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)

let x = 20
let y = 15
if (x <= y){ //10>=15 => false
	// if true 
	console.log ('x is greater than' + y)
} else if (x == 20){
	console.log ('x is equal to 20')
} else {
	console.log('x is smaller than 15' + y)
}

/*
<= >= 
== - сравнение
!= - лево не должно быть равно право
*/

x = 'fkjerif'
if (typeof x == 'string')
{
	console.log ('type of x is string')
} else if (typeof x == 'number') {
	console.log ('type of x is number')
}

//					0        1        2
let colors = ['red', 'green', 'blue'] // object
//                      3

 // console.log (typeof colors)
 console.log ( colors[1], ' items count = ', colors. lenght )
 // chaining

 /*https://developer.mozilla.org/en-US/*/

 //increment evlichenie na 1: index++
 //decrement umenshenie na 1: index--
 
 for(let index = 0; index <= 2; index++){
	console.log( 'index = ', index, 'value = ', colors[index] )
 }

 //functions

 //void
 function multiply(x, y){ //void
	 console.log('(fn1) result = ', x*y)
 }

 function multiply2 (x = 15, y = 15, ...z){

	for (let index = 0; index < z.length; index++) {
		console.log (z[index]);
		
	}
	return x*y //any
}

multiply(10, 10)

let result = multiply2(1,1, 2,3,5,56,7,8,9)
console.log (result*result)

//find html element
let btn = document.getElementById('btn')
let divResult = document.getElementById('test')
let divHeight = 25;
//add event listener
btn.addEventListener('click', function(){
	//multiply(2,3)
	//divResult.innerText = 'Hello from addEventListener' + multiply2(2,3)
	divResult.innerHTML = '<b class="red">Result</b>' + multiply2(2,3)

	divHeight += 10
	divResult.style.height = divHeight + 'px'
})





//Multiply table

function multiplyNumbers (row, col){ //void
	return row*col
}

function generateMultiplyTable(cols = 10, rows = 10)
{
	let td = ``
	let tr = ``
	let table = ``

	for (let indexCol = 1; indexCol <= cols; indexCol++) {
		//console.log ('index (c) =', index)
		td= ``
		for (let indexRow = 1; indexRow <= rows; indexRow++) {
			console.log ('result (', indexRow, '*', indexCol, '): ', multiplyNumbers(indexRow, indexCol))
			td += `<td>${multiplyNumbers(indexRow, indexCol)}</td>`
		}
		tr += `<tr>${ td }</tr>`
		
	}
	table += `<table class="table table-bordered table-striped">${ tr }</table>`
	console.log (table)

	let multiplyResult = document.getElementById('multiplyResult')
	multiplyResult.innerHTML = table
}

//' one row
//` multirow
/*
let html = `<b> ${  } </b>` //multirow
let html = '<b>' + firstname + '</b>' 
console.log (html)
*/

let btnGenerate = document.getElementById('btnGenerate')
btnGenerate.addEventListener('click', function(){
	//logic
	let colCount = document.getElementById ('colCount').value
	let rowCount = document.getElementById ('rowCount').value
	generateMultiplyTable(colCount, rowCount)

})