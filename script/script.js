// Array de frases
var frases = [
    "Venha",
    "fazer",
    "parte."
];

var index = 0;
var fraseElement = document.getElementById("frase");
var cores = ["#ccf654","white"];
var coreVez = 0;

function OnInit(){
    let isLogado = window.localStorage.getItem('Nome');

    if(isLogado == undefined || isLogado == 'undefined'){
        document.getElementById('login').style.display = "block";
        document.getElementById('sair').style.display = "none";
    }else{
        document.getElementById('login').style.display = "none";
        document.getElementById('sair').style.display = "block";
    }

    if(document.getElementById('custom-card') != undefined){
        document.getElementById('custom-card').style.backgroundColor = 'black';
    }

    setInterval(function() {
        if(document.getElementById('pisca-pisca') != undefined){
            document.getElementById('pisca-pisca').style.backgroundColor = cores[coreVez];
            coreVez +=1;
    
            if(coreVez > 1){
                coreVez = 0;
            }
        }        
    }, 100);
};


function Logar(event){
    event.preventDefault(); 

    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if (username.value === 'admin' && password.value === '12345') {
        alert('Login bem-sucedido!');
        localStorage.setItem("Nome",username.value);
        location.href = window.location.pathname.replace("login","index");
    } 
    else {
      alert('Nome de usuário ou senha inválidos!');
      username.value = "";
      password.value = "";
    }
};

function Cadastrar(event){
    event.preventDefault(); 

    alert('Cadastro feito com sucesso!')
    localStorage.setItem("Nome",username.value);
    location.href = window.location.pathname.replace("register","index");
};

function Deslogar(){
    window.localStorage.setItem('Nome',undefined);
    location.reload()
}


function exibirProximaFrase() {
    fraseElement.textContent = frases[index];
    index = (index + 1) % frases.length;
}

function ChangeColor(){
    document.getElementById('custom-card').style.backgroundColor = document.getElementById('color').value;
} 

// Exibe a primeira frase
exibirProximaFrase();

// Atualiza a frase a cada 3 segundos
setInterval(exibirProximaFrase, 500);