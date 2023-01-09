let contadorPrato = 0;
let valorPrato = 0

let contadorBebida = 0;
let valorBebida = 0;

let contadorSobremesa = 0;
let valorSobremesa = 0;

const contadorTotal = 3;

function converterNumero(precoString){

    let preco = precoString.replace("R$", "");
    preco = preco.replace(",", ".");
    preco = Number(preco);

    return preco;
 }

function selecionarPrato(pratoSelecionado){

    const tirarPrato = document.querySelector('.pratos .selecionado');

        if (tirarPrato !== null){
            tirarPrato.classList.remove("selecionado");
        }

    pratoSelecionado.classList.toggle("selecionado");
    contadorPrato = 1;
 
    pratoPedido = document.querySelector('.pratos .selecionado').textContent;
    const precoPrato = document.querySelector('.pratos .selecionado .preco').textContent.split(' ');

    valorPrato = pratoSelecionado.querySelector('.preco').innerHTML
    

    finalizarPedido()

    valorPrato = converterNumero(valorPrato)
    console.log(valorPrato)
}


function selecionarBebida(bebidaSelecionada){

    const tirarBebida = document.querySelector('.bebidas .selecionado');
        if (tirarBebida !== null){
            tirarBebida.classList.remove("selecionado");
        }

    bebidaSelecionada.classList.toggle("selecionado");
    contadorBebida = 1;

    bebidaPedida = document.querySelector('.bebidas .selecionado').textContent;

    const precoBebidas = document.querySelector('.bebidas .selecionado .preco').textContent.split(' ');

    valorBebida = bebidaSelecionada.querySelector('.preco').innerHTML    
   
    finalizarPedido()
    valorBebida = converterNumero(valorBebida)
    console.log(valorBebida)

}

function selecionarSobremesa(sobremesaSelecionada){

    const tirarSobremesa = document.querySelector('.sobremesas .selecionado');

        if (tirarSobremesa !== null){
            tirarSobremesa.classList.remove("selecionado");
        }

    sobremesaSelecionada.classList.toggle("selecionado");
    contadorSobremesa = 1;
    sobremesaPedida = document.querySelector('.sobremesas .selecionado').textContent;

    const precoSobremesa = document.querySelector('.sobremesas .selecionado .preco').textContent.split(' ');
    
    valorSobremesa = sobremesaSelecionada.querySelector('.preco').innerHTML


    finalizarPedido()
    valorSobremesa = converterNumero(valorSobremesa)
    console.log(valorSobremesa)
}

function finalizarPedido(){

    const pedidoFinalizado = document.querySelector('.botao');

        if ((contadorPrato + contadorBebida + contadorSobremesa) === contadorTotal){
            pedidoFinalizado.classList.add("finalizado");
            pedidoFinalizado.innerHTML = "Fechar pedido";
            pedidoFinalizado.disabled = false;
            pedidoFinalizado.addEventListener("click", enviarNoZap);
        }
}

function enviarNoZap(){
    
    const valorTotal = valorPrato + valorBebida + valorSobremesa;
    const pedidoCompleto = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoPedido}\n- Bebida: ${bebidaPedida}\n- Sobremesa: ${sobremesaPedida}\nTotal: R$ ${valorTotal.toFixed(2)}`;
    window.open(`https://wa.me/5535999999999?text=${encodeURIComponent(pedidoCompleto)}`);
}