function sleep ( valor ) {
    return new Promise ( (resolve) => { 
       setTimeout(() => {
            return resolve(valor)
       },3000)
    })
  }

sleep("Teste de texto").then((resolve) => {
    console.log(resolve)
})