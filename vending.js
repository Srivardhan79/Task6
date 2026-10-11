function vendingMachine() {
    let again = true;
    while (again) {
        console.log("===== VENDING MACHINE =====");
        console.log("1. Water Bottle - Rs.20");
        console.log("2. Chips - Rs.30");
        console.log("3. Chocolate - Rs.50");
        console.log("4. Juice - Rs.40");
        console.log("5. Biscuits - Rs.25");
        let choice = Number(prompt("Enter item number (1-5):"));
        let item = "";
        let price = 0;
        if (choice == 1) {
            item = "Water Bottle";
            price = 20;
        } 
        else if (choice == 2) {
            item = "Chips";
            price = 30;
        } 
        else if (choice == 3) {
            item = "Chocolate";
            price = 50;
        } 
        else if (choice == 4) {
            item = "Juice";
            price = 40;
        } 
        else if (choice == 5) {
            item = "Biscuits";
            price = 25;
        } 
        else {
            alert("Invalid item number!");
        }
        if (price > 0) {
            let money = Number(
                prompt("Enter your money:")
            );
            if (isNaN(money) || money < 0) {
                alert("Enter a valid amount!");
            } 
            else if (money < price) {
                alert("Insufficient balance!");
            } 
            else {
                let change = money - price;
                alert(
                    "Item: " + item +
                    "\nPrice: Rs." + price +
                    "\nChange: Rs." + change
                );
                for (let i = 3; i >= 1; i--) {
                    console.log(i);
                }
                console.log("Your item is ready!");
                for (let i = 1; i <= choice; i++) {
                    let pattern = "";
                    for (let j = 1; j <= i; j++) {
                        pattern = pattern + j + " ";
                    }
                    console.log(pattern);
                }
            }
        }
        again = confirm("Do you want to buy another item?");
    }
    alert("Thank you for using the vending machine!");
}
vendingMachine();