const [inputLogin, inputSenha] = document.querySelectorAll("input");
const btn = document.querySelector(".btn-desativar");  
const riotImg = document.querySelector(".riot-img");

function change(){
    if(inputLogin.value && inputSenha.value.length >= 8){
        btn.classList.add("btn-opacity");
        riotImg.classList.add("riot-scale")
        btn.removeAttribute("disabled");
    }else{
        btn.setAttribute("disabled", "disabled");
        btn.classList.remove("btn-opacity");
        riotImg.classList.remove("riot-scale")
    }
}

inputSenha.addEventListener("input", change);