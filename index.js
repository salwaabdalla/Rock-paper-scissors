img_array = [
  "images/rock.jpeg",
  "images/paperhand.jpeg",
  "images/scissors.jpeg",
];
document.querySelector("button").addEventListener("click", function () {
  var player1 = Math.random();
  player1 = Math.floor(Math.random() * img_array.length);
  var player2 = Math.random();
  player2 = Math.floor(Math.random() * img_array.length);
  document.querySelector(".img1").src = img_array[player1];
  document.querySelector(".img2").src = img_array[player2];
  if (
    img_array[player1] === "images/rock.jpeg" &&
    img_array[player2] === "images/paperhand.jpeg"
  ) {
    document.querySelector("h1").innerHTML = "Player 2 won:)";
  } else if (
    img_array[player1] === "images/rock.jpeg" &&
    img_array[player2] === "images/scissors.jpeg"
  ) {
    document.querySelector("h1").innerHTML = "Player 1 won:)";
  } else if (
    img_array[player1] === "images/paperhand.jpeg" &&
    img_array[player2] === "images/scissors.jpeg"
  ) {
    document.querySelector("h1").innerHTML = "Player 2 won:)";
  } else if (
    img_array[player1] === "images/paperhand.jpeg" &&
    img_array[player2] === "images/rock.jpeg"
  ) {
    document.querySelector("h1").innerHTML = "Player 1 won:)";
  } else if (
    img_array[player1] === "images/scissors.jpeg" &&
    img_array[player2] === "images/rock.jpeg"
  ) {
    document.querySelector("h1").innerHTML = "Player 2 won:)";
  } else if (
    img_array[player1] === "images/scissors.jpeg" &&
    img_array[player2] === "images/paperhand.jpeg"
  ) {
    document.querySelector("h1").innerHTML = "Player 1 won:)";
  } else {
    document.querySelector("h1").innerHTML = "It is a draw click again to play";
  }
});
