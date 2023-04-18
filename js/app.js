import { valida } from "./validaciones.js";


const inputs = document.querySelectorAll("input");

inputs.forEach(input=>{
    input.addEventListener("blur", (input)=>{
        valida(input.target)
    })

})

const formulario= document.querySelector(".contacto__formulario");
const enviarEmail= document.querySelector("#enviar__formulario")

console.log(enviarEmail)

function enviar(event){  
  event.preventDefault()
  const name=document.querySelector("[name=nombre]").value
  const email=document.querySelector("[name=email]").value
  const subject=document.querySelector("[name=asunto]").value
  const message = document.querySelector("[name=mensaje]").value

  enviarEmail.setAttribute(
    "href",
    `mailTo:estebancandio@gmail.com?subject=${subject}&body=${message +` mensaje enviado por: ${name}`}`
  )
  
  enviarEmail.click()

}

formulario.addEventListener("submit", enviar)