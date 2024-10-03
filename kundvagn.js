function removeItem(button) {
  // Hämta raden som ska tas bort
  const cartItem = button.parentElement;
  const cartItemsContainer = document.getElementById('cart-items');

  // Ta bort varan från kundvagnen
  cartItemsContainer.removeChild(cartItem);

  // Uppdatera totalsumman
  updateTotal();
}

function updateTotal() {
  const totalElement = document.querySelector('.total');
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;

  cartItems.forEach((item) => {
    const priceText = item.querySelector('.item-price').innerText;
    const price = parseInt(priceText.replace(' kr', ''), 10);
    total += price;
  });

  totalElement.innerText = 'Total: ' + total + ' kr'; // Uppdatera med korrekt totalsumma
}
