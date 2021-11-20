const button = document.getElementById("botonlogin");
const label = document.getElementById("error");
const mailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

button.addEventListener("click", () => {
  const mail = mailElement.value;
  const password = passwordElement.value;

  if (mail && password) {
    const objetoBody = {
      mail: mail,
      password: password,
    };

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoBody),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
       debugger;

        if (!response.error) {
          localStorage.setItem("token", response.token);

          label.textContent= "Logueo exitoso!";
          label.style.color="#234f1e";
        } else {
          label.textContent="Logueo fallido";
          label.style.color="#FF0000";
        }
      });
  } else {
    label.textContent="Falta completar campos";
    label.style.color="#FF0000";
  }
});
