//<iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style="width: 100%;height: 100%;border: 0px;" src="https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb"> </iframe>


const gameDataUrl = "./gameData.json";
const gameContainer = document.getElementById('Game-container');

const gameDataFetcher = fetch(gameDataUrl)
  .then(response => response.json())
  .then(games => {
    games.forEach((game) => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = game.thumbnail;
      img.alt = 'thumbnail';

      const title = document.createElement('h1');
      title.className = 'title';
      title.textContent = game.title;

      card.appendChild(img);
      card.appendChild(title);

      card.addEventListener('click', () => {
        const url = `gameDetails.html?gameId=${game.id}&gameLink=${encodeURIComponent(game.gameLink)}`;
        window.open(url, '_blank');
      });

      gameContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


const searchBox = {
  searchInput: document.getElementById('search-input'),
  gamesData: [], // Array to store game data

  // Function to render games based on search keyword
  renderGames(searchKeyword) {
    gameContainer.innerHTML = ''; // Clear the existing game elements

    this.gamesData.forEach((game) => {
      if (game.title.toLowerCase().includes(searchKeyword.toLowerCase())) {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = game.thumbnail;
        img.alt = 'thumbnail';

        const title = document.createElement('h1');
        title.className = 'title';
        title.textContent = game.title;

        card.appendChild(img);
        card.appendChild(title);

        card.addEventListener('click', () => {
          const url = `gameDetails.html?gameId=${game.id}&gameLink=${encodeURIComponent(game.gameLink)}`;
          window.open(url, '_blank');
        });

        gameContainer.appendChild(card);
      }
    });
  },

  initialize(gameDataUrl) {
    fetch(gameDataUrl)
      .then(response => response.json())
      .then(data => {
        this.gamesData = data;

        this.renderGames('');

        this.searchInput.addEventListener('input', () => {
          const searchKeyword = this.searchInput.value.trim();
          this.renderGames(searchKeyword);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },
};

searchBox.initialize("./gameData.json");

  
 