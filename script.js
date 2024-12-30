//your JS code here. If required.
const div = document.querySelector(".form-group");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const btn = document.querySelector("#submit");
const table = document.querySelector(".table")
const tbody = document.querySelector("#book-list")
btn.addEventListener("click", (e)=>{
	// let a = title.value
	// let b = author.value
	// let c = isbn.value
	const td = `<td>${title.value}</td>
			<td>${author.value}</td>
			<td>${isbn.value}</td>
			<td><button class="cancelbtn">x</button><td>`
	const tr = document.createElement("tr")
	tr.innerHTML = td
	tbody.appendChild(tr)
	const cancelbtn = document.querySelectorAll(".cancelbtn")
	// console.log(cancelbtn)
	
	// cancelbtn[i].addEventListener("click", (e)=>{
	// 	console.log(e)
	// })
})