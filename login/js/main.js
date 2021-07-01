// getElementByID = querySelector

let btnLogin = document.querySelector ('input[name="log in"]')

btnLogin.addEventListener ('click', function (){
	let inputUsername = document.querySelector ('input[name="username"]')
	let inputPassword = document.querySelector ('input[name="password"]')

let errorMessages = []

	if(inputUsername.value.toString().trim().length <= 3)
	{
		console.log('username length error')
		errorMessages [0] = 'username length error'
		// add error class to object
		inputUsername.classList.add('error')
		document.getElementById('usernameError').style.display = 'block'
	} 
	if (inputPassword.value.toString().trim().length <= 3)
	{
		console.log('password length error')
		errorMessages [1] = 'password length error'
		// add error class to object
		inputPassword.classList.add('error')

		//if (errorMessages.lenght >=1)
	}

	let modalWindow = document.getElementById ('errorModal')
	let modalWindowTitle = modalWindow.querySelector('h5[class="modal-title"]')
	let modalWindowBody = modalWindow.querySelector('div[class="modal-body"]')

	modalWindowTitle.innerText = 'Error'
	modalWindowBody.innerHTML = `<ul><li>${ errorMessages.join('</li><li>')}</li></ul>`


	var myModal = new bootstrap.Modal(modalWindow)
	myModal.show()
})

