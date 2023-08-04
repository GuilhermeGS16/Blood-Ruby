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

let rubyValue = 0;

function addRuby(){
  document.getElementById('ruby-number').value++;
}

function activeError(){
  document.getElementById("error-off").setAttribute('id','error-on')
}

function login() {
  let takeUser = document.getElementById('user').value;
  let takePassword = document.getElementById('password').value;
  let validateLogin = false;

  for (let i in users) {
    if (users[i].user == takeUser && users[i].password == takePassword) {
      validateLogin = true;
      break
    }
  }

  if (validateLogin == true) {
    location.href = "index.html"
  }
  else {
    activeError()
  }
}


