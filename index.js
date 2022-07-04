

function togglePassword() {
  let inputValue = document.getElementById("password");
  if (inputValue.type === "password") {
    inputValue.type = "text";
  } else {
    inputValue.type = "password";
  }
}

