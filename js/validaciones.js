export function valida(input){
    
    const tipoDeInput= input.dataset.tipo
    console.log(tipoDeInput)

    if(input.validity.typeMismatch){
        input.nextElementSibling.classList.remove("contacto__input__tema__email")
        input.nextElementSibling.classList.add("contacto__input__tema__email__invalido")
    }
    
    if (input.validity.valid){
        input.parentElement.classList.remove("contacto__container__invalid");
        input.parentElement.querySelector(".contacto__input__error").innerHTML="";

    }else{
        input.parentElement.classList.add("contacto__container__invalid");
        input.parentElement.querySelector(".contacto__input__error").innerHTML= mostrarMensajeDeError(tipoDeInput, input);
    }
    
    validarBoton()
}

export function validarBoton (){
    const btn = document.querySelector("[name=boton]")
    const nombre=document.querySelector("[name=nombre]").validity.valid
    const email=document.querySelector("[name=email]").validity.valid
    const asunto=document.querySelector("[name=asunto]").validity.valid
    const mensaje = document.querySelector("[name=mensaje]").validity.valid

    if(nombre && email && asunto && mensaje){
        btn.classList.remove("contacto__boton__desabilitado")
        btn.classList.add("contacto__boton")
    }else{
        btn.classList.remove("contacto__boton")
        btn.classList.add("contacto__boton__desabilitado")
    }
}

const tipoDeErrores=[
    "valueMissing",
    "typeMismatch",
    "tooLong",
]

const mensajeDeError={
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio",
        tooLong:"El campo nombre debe tener un maximo de 50 caracteres"
    },
    email:{
        valueMissing:"El campo correo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    asunto:{
        valueMissing:"El campo asunto no puede estar vacio",
        tooLong:"El campo asunto debe tener un maximo de 50 caracteres"
    },
    mensaje:{
        valueMissing:"El campo mensaje no puede estar vacio",
        tooLong:"El campo mensaje debe tener un maximo de 300 caracteres"
    }
}


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje="";
    tipoDeErrores.forEach(error =>{
        if(input.validity[error]){
            mensaje=mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}
