import Produto from "./classes/Produto.js"
import Pedido from "./classes/Pedido.js"
import {montaCard} from "./render.js"

window.onload = () => {

    const produto1 = new Produto("Arroz", 100.00, true, 5)
    const produto2 = new Produto("Feijão", 200.00, true, 1)
    const produto3 = new Produto("Carne Bovina", 10.01, true, 4)
    const produto4 = new Produto("Carne de Flango", 5.20, false, 1)
    const produto5 = new Produto("Farinha de trigo", 180.91, true, 2)
    
    const pedido1 = new Pedido(20220001, "Cliente Numero Um")
    pedido1.adicionarProduto(produto1)
    pedido1.adicionarProduto(produto2)
    pedido1.adicionarProduto(produto3)

    const pedido2 = new Pedido(20220002, "Cliente Numero Dois")
    pedido2.adicionarProduto(produto4)
    pedido2.adicionarProduto(produto5)

    var listaPedidos = document.getElementById("lista-pedidos")

    montaCard(listaPedidos, pedido1)   
    montaCard(listaPedidos, pedido2)

}