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

    calcularTotal() {
        let total = 0
        this.listaProdutos.map((produto) => {
            total += parseFloat(produto.preco) * parseInt(produto.quantidade)
            return total
        })
        return total
    }

}

export default Pedido