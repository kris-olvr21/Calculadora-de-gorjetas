function calculateTip(event){
    event.preventDefault(); // Para de recarregar a página quando o botão é clicado (previne o default)
    let bill = document.getElementById('bill').value; // Puxa o valor de dentro do input
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('numOfPeople').value;

    if(bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores")
        return;
    }

    if(numOfPeople == "" | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none"; // Esconde "Gorjeta total", só aparece quando preenchido todos os campos e com o clique do botão
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip); // addEventListener escuta a função (parâmetro 1: tipo submit; parâmetro 2: nome da função calculateTip)