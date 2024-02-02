const form=document.getElementById("formId")

const campo1=document.getElementById("campoA")
const campo2=document.getElementById("campoB")

form.addEventListener('submit',function(e){
    e.preventDefault()
    if (campo1.value<campo2.value) {
        alert("Valor aceito. O valor de A é menor que o valor de B")
    } else {
        alert("Valor inválido. O valor de A deve ser menor que o valor de B")
    }
})