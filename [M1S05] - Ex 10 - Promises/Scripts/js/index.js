function mostraHora() {
  setInterval(() => {
    var hora = new Date()
    console.log(`${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`)
  },2000)

  }

mostraHora()