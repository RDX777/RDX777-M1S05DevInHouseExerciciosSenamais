function montaCard(listaPedidos, pedido){

    var div = document.createElement("div")
    div.id = pedido.numeroPedido
    div.classList = "card-pedido"

    var divTitulo = document.createElement("div")
    divTitulo.classList = "card-titulo"

        var numeroPedido = document.createElement("h2")
        numeroPedido.innerText = `Pedido n.: ${pedido.numeroPedido}`
        numeroPedido.classList = "numero-pedido"
        divTitulo.appendChild(numeroPedido)

        var dataPedido = document.createElement("h2")
        dataPedido.innerText = `Data: ${pedido.dataPedido}`
        dataPedido.classList = "data-pedido"
        divTitulo.appendChild(dataPedido)
    
    div.appendChild(divTitulo)

    var nomeClientePedido = document.createElement("label")
    nomeClientePedido.innerHTML = `<strong>Cliente:</strong> ${pedido.nomeCliente}`
    div.appendChild(nomeClientePedido)

    var valorTotalPedido = document.createElement("label")
    valorTotalPedido.innerHTML = `<strong>Valor Total:</strong> R$ ${pedido.calcularTotal()}`
    div.appendChild(valorTotalPedido)

    var estaPagoPedido = document.createElement("label")
    estaPagoPedido.innerHTML = `<strong>Esta Pago:</strong> ${pedido.estaPago ? "Sim" : "Não"}`
    div.appendChild(estaPagoPedido)

    var produtosPedido = document.createElement("label")
    produtosPedido.innerHTML = "<strong>Produtos:</strong> "
    div.appendChild(produtosPedido)

    var listaProdutosPedido = montaListaPedido(pedido.listaProdutos)
    

    div.appendChild(listaProdutosPedido)

    listaPedidos.appendChild(div)

}

function montaListaPedido(listaProdutos){

    var listaProdutosPedido = document.createElement("ul")

    Object.keys(listaProdutos).forEach(index => {
        var itemListaProdutosPedido = document.createElement("li")
        itemListaProdutosPedido.innerHTML = `${listaProdutos[index].nome} 
            - Quantidade: ${listaProdutos[index].quantidade} 
            - Valor Un: R$ ${listaProdutos[index].preco}`
        listaProdutosPedido.appendChild(itemListaProdutosPedido)
    })

    return listaProdutosPedido

}

export { montaCard }