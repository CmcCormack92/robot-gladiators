var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function (enemyName) {

  while (enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
      var ConfirmSkip = window.confirm("Are you sure you want to quit?");

      if (ConfirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = Math.max(0, playerMoney - 10);
        console.log(playerName + " now has " + playerMoney + " player money remaining!");
        break;
      }
    }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.")
    }
  }
};

var startGame = function () {
  //Reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyNames = enemyNames[i];
      enemyHealth = randomNumber(40, 60)
      fight(pickedEnemyNames);

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

var endGame = function () {
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " dollars.");
  } else {
    window.alert("You've lost your robot in batttle!");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiator's! Come back soon!");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

  switch (shopOptionPrompt) {

    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling the player's health by 20 for 7 dollars");
        playerMoney = playerMoney - 7;
        playerHealth = playerHealth + 20;
        break;
      } else {
        window.alert("You don't have enough money!");
      }

    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading the player's attack by 6 for 7 dollars.");
        playerMoney = playerMoney - 7;
        playerAttack = playerAttack + 6;
        break;
      } else {
        window.alert("You don't have enough money!");
      }

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

var randomNumber = function(min, max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


startGame();





