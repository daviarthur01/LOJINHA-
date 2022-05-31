let vet = []

function adiciona() {
    let item = document.getElementById("input1").value

    if (item == "") {
        alert("adicione um item!")
    } else {
        if (vet.indexOf(item) < 0) {
            vet.push(item)
            limpar()
            imprimir()
        } else {
            alert("item já adicionado")
        }
        limpar()
    }
}

function remover(){
    let remover = document.getElementById("remover").value
    let indice = vet.indexOf(remover)
   if(remover ==""){
       alert("nenhum item à remover")
       limpar()
   }if(indice <0){
    alert("item não encontrado")
    limpar()
   }else{
    vet.splice(indice,1)
    imprimir()
    limpar()
   }
}

function limpar() {
    document.getElementById("input1").value = ""
} function imprimir() {
    document.getElementById("tela").innerText = vet.join(" | ")
}