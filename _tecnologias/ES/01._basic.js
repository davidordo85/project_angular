const data = [{ price: 12 }, { price: 32 }, { price: 56 }];
data.push({ price: 68 });
calculatePrice(12);
calculatePrice();

function calculatePrice(iva = 22) {
  {
    let finishIva = 1 + iva / 100;
    console.log(finishIva);
    let priceFinish;
    data.forEach((elem) => {
      priceFinish = elem.price * finishIva;
      showPrice(priceFinish);
    });
  }

  function showPrice(priceFinish) {
    console.log(
      `
            The final price is:
            ${priceFinish.toFixed(2)}`
    );
  }
}
