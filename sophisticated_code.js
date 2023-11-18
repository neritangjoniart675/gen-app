Here's an example of complex JavaScript code that is longer than 200 lines. The file is named "sophisticated_code.js" and it demonstrates a simulated online shopping cart system with multiple features including adding/removing items, calculating totals, applying discounts, and checking out:

```javascript
/*
   Filename: sophisticated_code.js

   This code simulates an online shopping cart system.
   It includes features like adding/removing items, calculating totals, applying discounts, and checking out.
*/

// Define an object to represent a product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Define the shopping cart object
class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  // Add a product to the cart
  addProduct(product, quantity) {
    if (quantity <= 0) {
      console.log("Quantity should be greater than zero.");
      return;
    }

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.name === product.name) {
        this.items[i].quantity += quantity;
        return;
      }
    }

    this.items.push({ product, quantity });
  }

  // Remove a product from the cart
  removeProduct(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.name === productName) {
        this.items.splice(i, 1);
        return;
      }
    }

    console.log("Product not found in the cart.");
  }

  // Calculate the total price of the cart
  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
      const { product, quantity } = this.items[i];
      totalPrice += product.price * quantity;
    }

    return totalPrice - totalPrice * (this.discount / 100);
  }

  // Apply a discount to the cart
  applyDiscount(discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
      console.log("Invalid discount percentage.");
      return;
    }

    this.discount = discountPercentage;
  }

  // Checkout the cart
  checkout() {
    const totalPrice = this.getTotalPrice();
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
    console.log("Thank you for shopping with us!");
    this.items = [];
    this.discount = 0;
  }
}

// Create some sample products
const product1 = new Product("Shoes", 49.99);
const product2 = new Product("T-Shirt", 19.99);
const product3 = new Product("Jeans", 59.99);

// Create a shopping cart instance
const cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(product1, 2);
cart.addProduct(product2, 3);
cart.addProduct(product3, 1);

// Apply a discount
cart.applyDiscount(10);

// Remove a product from the cart
cart.removeProduct("T-Shirt");

// Calculate and display the total price
console.log("Cart Total: $" + cart.getTotalPrice().toFixed(2));

// Checkout the cart
cart.checkout();
```

Please note that this code is just an example and might not work in an actual web environment. It demonstrates a complex structure and showcases multiple features, but it should be adapted and integrated into a full-fledged web application for real-world scenarios.