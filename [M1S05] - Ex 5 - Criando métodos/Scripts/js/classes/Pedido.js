import Produto from "./Produto.js"

class Pedido {
    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido
        this.nomeCliente = nomeCliente
        this.dataPedido = new Date().toLocaleDateString()
        this.estaPago = false
        this.listaProdutos = Array()
    }

    adicionarProduto(produto)
    {
        if(produto instanceof Produto) {
            this.listaProdutos.push(produto)
        }
    }

}

export default Pedido