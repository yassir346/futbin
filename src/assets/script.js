async function fetchPlayers() {
  let dataFromJson = await fetch("../players.json");
  let json = await dataFromJson.json();
  let players = json.players;

  displayData(players);
}


const playersContainer = document.getElementById('players-container');

function displayData(players) {
    players.forEach(player => {
      const div = document.createElement('div');
      div.classList.add('player-card');
      div.innerHTML = `
      <img src="
      ${player.photo}"/>
      <p>${player.name}</p>
      
      `;
      playersContainer.appendChild(div);
    });
}

fetchPlayers();


