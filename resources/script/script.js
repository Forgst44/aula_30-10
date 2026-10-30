let form = document.querySelector("form");
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
let message = document.querySelector("span");
form.addEventListener("submit", (e) => {

    e.preventDefault();
    let email = inputEmail.value
    let password = inputPassword.value
    if (validarUsuario(email, password)) {
        console.log("Usuarío validado com sucesso")
        console.log(email, password)
    }
    else {
        console.log("Erro");
        console.log(email, password)
    }

});

let emailFicticio = "sixservecon67@gmail.com";
let passwordFicticio = "1234567";

function validarUsuario(email, senha) {
    if (email === emailFicticio && senha === passwordFicticio) {
        return true
    }
    else if (email === "" || senha === "") {
        message.innerText = "Não deixe campos vazios";
        message.style.color = "red";
        return false
    }
    else if (senha.length < 8) {
        message.innerText = "senha muito curta";
        message.style.color = "red";
        return false;
    }

}