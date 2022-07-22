let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let charset = 'abcdefghijlmnopqrstuvxwyz1234567890ABCDEFGHIJLMNOPQRSTUVXWYZ'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}

function generatePassword() {
  let pass = ''

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  containerPassword.classList.remove('hide')
  password.innerHTML = pass
  novaSenha = pass
}

function copyPassword() {
  alert('Senha Copiada com Saucesso!!!')
  navigator.clipboard.writeText(novaSenha)
}
