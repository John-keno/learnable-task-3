// Import the readline module to get user input
const readline = require("readline");

// Creates an interface to read and write from the console
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define some sample games and their prices
const games = [
  { title: "Call of duty Black ops 4", price: 300 },
  { title: "Hitman Absolution", price: 150 },
  { title: "Need for speed Carbon", price: 30 },
  { title: "Pro evolution Soccer (PES) 2023", price: 800 },
  { title: "God of War 4", price: 700 }
];

// Define a shopping cart object to store the selected games
const cart = [];

// Define a function to display the available games
const showGames = () => {
  console.log("Welcome to the Game shop!\n");
  console.log("Here are the Available games you can choose from:\n");
  // Loop through the games array and display the title and price of each game
  for (let i = 0; i < games.length; i++) {
    console.log(`${i + 1}. ${games[i].title} - $${games[i].price}`);
  }
};

// Define a function to add a game to the cart
const addToCart = (gameIndex) => {
  // Check if the game index is valid
  if (gameIndex >= 1 && gameIndex <= games.length) {
    // Get the game object from the games array
    const game = games[gameIndex - 1];
    // Push the game object to the cart array
    cart.push(game);
    // Display a confirmation message
    console.log(`You added ${game.title} to your cart.`);
  } else {
    // Display an error message
    console.log("Invalid index of game product. Please try again.");
  }
};

// Define a function to remove a game from the cart
const removeFromCart = (gameIndex) => {
  // Check if the game index is valid
  if (gameIndex >= 1 && gameIndex <= cart.length) {
    // Get the game object from the cart array
      const game = cart[gameIndex - 1];
      
    // Remove the game object from the cart array
      cart.splice(gameIndex - 1, 1);
      
    // Display a confirmation message
      console.log(`You removed ${game.title} from your cart.`);
      
  } else {
    // Display an error message
    console.log("Invalid index of game product. Please try again.");
  }
};

// Define a function to display the cart contents and total price
const displayCart = () => {
  // Check if the cart is empty
  if (cart.length == 0) {
    // Display a message
    console.log("Your cart is empty.");
  } else {
    // Display a header
    console.log("Here are the games in your cart:");
    // Initialize a variable to store the total price
    let total = 0;
    // Loop through the cart array and display the title and price of each game
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}. ${cart[i].title} - $${cart[i].price}`);
      // Add the price of the game to the total
      total += cart[i].price;
    }
    // Display the total price
    console.log(`Total: $${total}`);
  }
};

// Define a function to display the menu options and prompt the user for input
const displayMenu = () => {
  // Display the menu options
  console.log("What would you like to do?'\n");
  console.log("1. Add a game product to your cart");
  console.log("2. Remove a game product from your cart");
  console.log("3. View your cart");
  console.log("4. Checkout and exit");
  // Prompt the user for input
  prompt.question("\nEnter option number: ", (choice) => {
    // Parse the choice as a number
    choice = Number(choice);
    // Check the choice and perform the corresponding action
    switch (choice) {
      case 1:
        // Display the available games
        showGames();
        // Prompt the user for the game index to add
        prompt.question("\nEnter the Game product index to add: ", (gameIndex) => {
          // Parse the game index as a number
          gameIndex = Number(gameIndex);
          // Add the game to the cart
          addToCart(gameIndex);
          // Display the menu again
          displayMenu();
        });
        break;
      case 2:
        // Display the cart contents
        displayCart();
        // Prompt the user for the game product index to remove
        prompt.question("\nEnter the game product index to remove: ", (gameIndex) => {
          // Parse the game index as a number
          gameIndex = Number(gameIndex);
          // Remove the game from the cart
          removeFromCart(gameIndex);
          // Display the menu again
          displayMenu();
        });
        break;
      case 3:
        // Display the cart contents
        displayCart();
        // Display the menu again
        displayMenu();
        break;
      case 4:
        // Display the cart contents
        displayCart();
        // Display a goodbye message
        console.log("Thank you for shopping with us! hava a lovely Day");
        // Close the interface
        prompt.close();
        break;
      default:
        // Display an error message
        console.log("Invalid selection. Please try again.");
        // Display the menu again
        displayMenu();
        break;
    }
  });
};

// Start the application by displaying the menu
displayMenu();
