const users = [
  {
    user: "guilherme",
    password: "guilherme"
  },
  {
    user: "thiago",
    password: "thiago"
  },
  {
    user: "admin",
    password: "admin"
  }
]

let botao = document.getElementById('send');
botao.addEventListener('click', function login() {
  let takeUser = document.getElementById('user').value;
  let takePassword = document.getElementById('password').value;
  let validateLogin = false;

  for (let i in users) {
    if (users[i].user == takeUser && users[i].password == takePassword) {
      validateLogin = true;
      console.log("entrou no for e no if")
      break
    }
  }

  if (validateLogin == true) {
    location.href = "index.html";
  }
  else {
    alert("erro")
  }
})


//else {
  //if (users[i].user != takeUser || users[i].password != takePassword) {
 //   alert("Usuário ou senha inválido")
//  }
//}