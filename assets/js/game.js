var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {

  while (enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
      var ConfirmSkip = window.confirm("Are you sure you want to quit?");

      if (ConfirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log(playerName + " now has " + playerMoney + " player money remaining!")
        break;
      }
    }

    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      for (i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
          window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

          var pickedEnemyNames = enemyNames[i];
          enemyHealth = 50;
          fight(pickedEnemyNames);
        } else {
          window.alert("You have lost your robot in battle! Game Over!");
          break;
        }
      }
    }
  }
}



  for (i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }
    var pickedEnemyNames = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyNames);
  }

  window.alert("game over!!!!")




