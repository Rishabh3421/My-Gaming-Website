const gameDataUrl = "./gameData.json"; 

fetch(gameDataUrl)
  .then(response => response.json())
  .then(games => {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('gameId');
    const gameLink = params.get('gameLink');

    const gameDetails = games.find(game => game.id === parseInt(gameId));

    const gameTitleElement = document.getElementById('game-title');
    const gameDescriptionElement = document.getElementById('game-description');
    const gameIframe = document.getElementById('game-iframe');

    if (gameDetails) {
      gameTitleElement.textContent = gameDetails.title;
      gameDescriptionElement.textContent = gameDetails.description;
      gameIframe.src = gameLink;
    } else {
      alert("404 Error: Page not Found");
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
