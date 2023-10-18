let ativa = document.querySelector(".ativa")
let campo = document.querySelector(".menu ul")
let fecha = document.querySelector(".fecha")


ativa.addEventListener("click", () => {
   if( campo.classList.contains("aparece")){
    campo.classList.remove("aparece")
   }
   else{
    campo.classList.add("aparece")
   }
   
})

fecha.addEventListener("click", () => {
    campo.classList.remove("aparece")
})

/* 
ativa.addEventListener("mouseover", () => {
     campo.classList.add("aparece")
 })
ativa.addEventListener("mouseout", () => {
    campo.classList.remove("aparece")
})
*/