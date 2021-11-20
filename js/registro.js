const button = document.getElementById("botonregistro");
const label = document.getElementById("error");
const mailElement = document.getElementById("mail");
const passwordElement = document.getElementById("password");
const celElement = document.getElementById("cel");
const addrsElement = document.getElementById("addrs");
const nameElement = document.getElementById("name");
const lastnameElement = document.getElementById("lastname");

button.addEventListener("click", () => {
  const mail = mailElement.value;
  const password = passwordElement.value;
  const cel = celElement.value;
  const addrs =addrsElement.value;
  const name = nameElement.value;
  const lastname = lastnameElement.value;

  if (mail && password && cel && addrs && name && lastname ) {
    const objetoBody = {
      mail: mail,
      password: password,
      cel: cel,
      name:name,
      lastname:lastname,
      addrs: addrs
    };

    fetch("http://localhost:3000/auth/registro", {
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
          label.textContent= "¡Registro exitoso!";
          label.style.color="#234f1e";
        } else {
          label.textContent="Registro fallido";
          label.style.color="#FF0000";
        }
      });
  } else {
    label.textContent="Falta completar campos";
    label.style.color="#FF0000";
  }
});
