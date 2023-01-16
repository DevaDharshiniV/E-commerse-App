

const VerifyLogin = () => {
  const loginEmail = document.getElementById("login-email");
  const loginPassWord = document.getElementById("login-password");
  validatePassword(loginPassWord);
  // console.log(loginEmail.value);
  // console.log(loginPassWord.value);
}

const validatePassword = (password) => {
  //check empty password field
  var pw = password.value;
  if (pw == "") {
    document.getElementById("message").innerHTML = "**Fill the password please!";
    password.focus();
    return false;
  }

  //minimum password length validation
  if (pw.length < 8) {
    document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
    password.focus();
    return false;
  }

  //maximum length of password validation
  if (pw.length > 15) {
    document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
    return false;
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
