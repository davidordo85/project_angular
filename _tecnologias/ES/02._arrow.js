let data = { price: 12, iva: 1.16 };

data.calculateIvaAsync = function () {
  setTimeout(() => {
    let priceFinal = this.price * this.iva;
    console.log(`
       Using a classic function: 
       The price final is ${priceFinal.toFixed(2)}
       `);
  }, 1000);
};

data.calculateIvaAsync();
