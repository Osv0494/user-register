const movPag = document.querySelector(".movPag");
const btn_forwardCard2 = document.querySelector(".sigPag");

const btn_backCard1 = document.querySelector(".back-pag1");
const btn_forwardCard3 = document.querySelector(".forward-pag3");
const btn_backCard2 = document.querySelector(".back-pag2");
const btn_forwardCard4 = document.querySelector(".forward-pag4");
const btn_backCard3 = document.querySelector(".back-pag3");
const btn_end = document.querySelector(".end");
const progressText = document.querySelectorAll(".steps p");
const progressCheck = document.querySelectorAll(".steps .iconRight");
const num = document.querySelectorAll(".steps .num");
let allForm = document.querySelector(".form-all");
let cont = 1;

/*---------------------Validaciones card1---------------------*/
//1-Validando Name:
let names = document.querySelector("#names");
let nameError = document.querySelector("#name-error");
names.addEventListener("input", () => {
  errorShowHide(
    names.value.length < 2,
    nameError,
    "* debe tener 2 o mas caracteres",
    names
  );
});

//2-Validando ApellidoP
let apellidoP = document.querySelector("#apellido1");
let lastName1Error = document.querySelector("#lastName1-error");
apellidoP.addEventListener("input", () => {
  errorShowHide(
    apellidoP.value.length < 2,
    lastName1Error,
    "* debe tener 2 o mas caracteres",
    apellidoP
  );
});

//2-Validando ApellidoM
let apellidoM = document.querySelector("#apellido2");
let lastName2Error = document.querySelector("#lastName2-error");
apellidoM.addEventListener("input", () => {
  errorShowHide(
    apellidoM.value.length < 2,
    lastName2Error,
    "* debe tener 2 o mas caracteres",
    apellidoM
  );
});

//Funcion para mostrar y ocultar errores
function errorShowHide(ask, varError, textError, input) {
  if (ask) {
    varError.innerText = textError;
    input.style.borderColor = "#DA2A33";
    return false;
  } else {
    varError.innerText = "";
    input.style.borderColor = "lightgrey";
    return true;
  }
}

/*-----------------------------{Btn forward}-------------------------*/
/*---------------------Validaciones card1---------------------*/

btn_forwardCard2.addEventListener("click", function (e) {
  e.preventDefault();
  //valorando si es true o falce names
  const namesValidation = errorShowHide(
    names.value.length < 2,
    nameError,
    "* debe tener 2 o mas caracteres",
    names
  );
  //valorando si es true o falce apellidoP
  const apellidoPValidation = errorShowHide(
    apellidoP.value.length < 2,
    lastName1Error,
    "* debe tener 2 o mas caracteres",
    apellidoP
  );
  //valorando si es true o falce apellidoM
  const apellidoMValidation = errorShowHide(
    apellidoM.value.length < 2,
    lastName2Error,
    "* debe tener 2 o mas caracteres",
    apellidoM
  );
  if (
    namesValidation === true &&
    apellidoPValidation === true &&
    apellidoMValidation === true
  ) {
    forwardCard2("-25%");
  }
});
/*---------------------Validaciones card2---------------------*/
//1-Validando birthdate
let birthdate = document.querySelector("#birthdate");
let birthdateError = document.querySelector("#birthdate-error");
birthdate.addEventListener("input", () => {
  errorShowHide(
    birthdate.value === "",
    birthdateError,
    "*seleccione una fecha",
    birthdate
  );
});
//2-Validando sexo
let sexo = document.querySelector("#sexo");
let sexoError = document.querySelector("#sexo-error");
sexo.addEventListener("input", () => {
  errorShowHide(
    Number(sexo.value) < 0,
    sexoError,
    "*seleccione una de las opciones",
    sexo
  );
});
btn_forwardCard3.addEventListener("click", function (e) {
  e.preventDefault();
  const birthdateValidation = errorShowHide(
    birthdate.value === "",
    birthdateError,
    "*seleccione una fecha",
    birthdate
  );
  const sexoValidation = errorShowHide(
    Number(sexo.value) < 0,
    sexoError,
    "*seleccione una de las opciones",
    sexo
  );
  if (birthdateValidation === true && sexoValidation === true) {
    forwardCard3();
  }
});
/*---------------------Validaciones card3---------------------*/
//1-Validando email
let RegExpEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let email = document.querySelector("#email");
let emailError = document.querySelector("#email-error");
email.addEventListener("input", () => {
  errorShowHide(
    RegExpEmail.test(email.value) === false,
    emailError,
    "*ingrese un correo valido",
    email
  );
});
//2-Validando contact number
let RegExpNumPhon = /[0-9]{10}/;
let numPhon = document.querySelector("#numPhon");
let numPhonError = document.querySelector("#numPhon-error");
numPhon.addEventListener("input", () => {
  errorShowHide(
    RegExpNumPhon.test(numPhon.value) === false,
    numPhonError,
    "*ingrese un numero de telefono valido",
    numPhon
  );
});

btn_forwardCard4.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValidation = errorShowHide(
    RegExpEmail.test(email.value) === false,
    emailError,
    "*ingrese un correo valido",
    email
  );
  const numPhonValidation = errorShowHide(
    RegExpNumPhon.test(numPhon.value) === false,
    numPhonError,
    "*ingrese un numero de telefono valido",
    numPhon
  );
  if (emailValidation === true && numPhonValidation === true) {
    forwardCard4();
  }
});
/*---------------------Validaciones card4---------------------*/
//1-Validando User
let user = document.getElementById("user");
let userError = document.getElementById("user-error");
user.addEventListener("input", () => {
  errorShowHide(
    user.value === "",
    userError,
    "*este campo no puede quedar vacio",
    user
  );
});
//2-Validando password
let RegExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
let password = document.getElementById("password");
let passwordError = document.getElementById("password-error");
password.addEventListener("input", () => {
  errorShowHide(
    RegExpPassword.test(password.value) === false,
    passwordError,
    "8-15 caractetres,A-z,numeros y caracter especial",
    password
  );
});

btn_end.addEventListener("click", function (e) {
  e.preventDefault();
  const userValidation = errorShowHide(
    user.value === "",
    userError,
    "*este campo no puede quedar vacio",
    user
  );
  const passwordValidation = errorShowHide(
    RegExpPassword.test(password.value) === false,
    passwordError,
    "8-15 caractetres,A-z,numeros,caracter especial",
    password
  );
  if (userValidation === true && passwordValidation === true) {
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
    let timerInterval;
    Swal.fire({
      title: "Cargando",
      html: "<b></b>",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    })
      .then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      })
      .then(() => {
        Swal.fire({
          title: "Registro Finalizado",
          text: "Gracias por crear tu Cuenta.",
          icon: "success",
          confirmButtonText: "Continuar",
          width: "90%",
          padding: "1rem",
          background: "#fff",
          backdrop: true,
          position: "center",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          stopKeydownPropagation: false,
          showConfirmButton: false
        });
      });
    setTimeout(() => {
      clean();
      location.reload();
    }, 4000);
  }
});

/*Btn back */
btn_backCard1.addEventListener("click", function (e) {
  e.preventDefault();
  backCard1("0%");
});
btn_backCard2.addEventListener("click", function (e) {
  e.preventDefault();
  backCard2();
});
btn_backCard3.addEventListener("click", function (e) {
  e.preventDefault();
  backCard3();
});
//-----------------*funciones para pasar de pagina adelante----------------*//
//1-Pasar de card1 a card2
function forwardCard2(posit) {
  movPag.style.marginLeft = posit;
  num[cont - 1].classList.add("active");
  progressCheck[cont - 1].classList.add("active");
  progressText[cont - 1].classList.add("active");
  cont += 1;
}
//1-Pasar de card2 a card3
function forwardCard3() {
  forwardCard2("-50%");
}
//1-Pasar de card3 a card4
function forwardCard4() {
  forwardCard2("-75%");
}

//-----------------*funciones para pasar de pagina hacia atras----------------*//
//1-Regrezar desde card2 a card1
function backCard1(posit) {
  movPag.style.marginLeft = posit;
  num[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  cont -= 1;
}
//1-Regrezar desde card3 a card2
function backCard2() {
  backCard1("-25%");
}
//1-Regrezar desde card4 a card3
function backCard3() {
  backCard1("-50%");
}
function clean() {
  names.value = "";
  apellidoP.value = "";
  apellidoM.value = "";
  birthdate.value = "";
  sexo.value = -1;
  email.value = "";
  numPhon.value = "";
  user.value = "";
  password.value = "";
}
//------------------------mensage final---------//
