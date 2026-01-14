export const cart = [];

export function addToCart(productId)
{
  let matchingItem;

  // есть ли такой товар в корзине
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId)
    {
      matchingItem = cartItem;
    }
  });

  if (matchingItem)
  {
    matchingItem.quantity++;
  }
  else
  {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}