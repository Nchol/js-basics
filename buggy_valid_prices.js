// kamu diminta untuk "fixing bugs" dari code dibawah ini
// sehingga function ini bisa mereturn boolean jika "price-nya" valid.

function hasValidPrice(product) {
	return (product && product.price && product.price >= 0)
}


hasValidPrice({ "product": "Milk", price: 1.50 }) // true
hasValidPrice({ "product": "Cheese", price: -1 }) // false
hasValidPrice({ "product": "Eggs", price: 0 }) // true
hasValidPrice({ "product": "Cerials", price: '3.0' }) // false
hasValidPrice() ➞ false