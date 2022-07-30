import Produto from "./classes/Produto.js"
import Pedido from "./classes/Pedido.js"

window.onload = () => {

    const produto1 = new Produto("Produto1", 100.00, true, 10)
    const pedido = new Pedido(20000, "Anderson")
    pedido.adicionarProduto(produto1)
    console.log(pedido)

}