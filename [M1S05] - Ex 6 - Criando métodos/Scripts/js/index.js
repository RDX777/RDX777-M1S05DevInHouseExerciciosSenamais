import Produto from "./classes/Produto.js"
import Pedido from "./classes/Pedido.js"

window.onload = () => {

    const produto1 = new Produto("Produto1", 100.00, true, 5)
    const produto2 = new Produto("Produto2", 200.00, true, 1)
    const produto3 = new Produto("Produto3", 10.01, true, 4)
    const produto4 = new Produto("Produto4", 5.20, false, 1)
    const produto5 = new Produto("Produto5", 180.91, true, 2)
    
    const pedido1 = new Pedido(20000, "Anderson")
    
    pedido1.adicionarProduto(produto1)
    pedido1.adicionarProduto(produto2)
    pedido1.adicionarProduto(produto3)
    
    console.log(pedido1.calcularTotal())

}