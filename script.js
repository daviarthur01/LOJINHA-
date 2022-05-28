let vet = []

function adiciona(){
    let item = document.getElementById("input1").value

    vet[vet.length] = item

    document.getElementById("input1").value  = ""

    document.getElementById("tela").innerText = vet
}