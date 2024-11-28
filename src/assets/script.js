// générer les données à travers fichier json
async function fetchPlayers() {
  let dataFromJson = await fetch("../players.json");
  let json = await dataFromJson.json();
  let players = json.players;

  displayData(players);
}

fetchPlayers(); //Appeller la fonction.

// la fonction de l'implémentation des données dans l'HTML
const playersContainer = document.getElementById('players-container');

function displayData(players) {
    players.forEach(player => {
      const div = document.createElement('div');
      div.classList.add('player-card');
      div.innerHTML = `
      <div class="photo-name">
      <img src="
      ${player.photo}"/ >
      <p>${player.name}</p>
      </div>
      <div class="nat-flag-club">
      <p>${player.nationality}</p>
      <img src="${player.flag}"/>
      <p>${player.club}</p>
      </div>
      <img src="${player.logo}"/>
      <p>${player.rating}</p>
      <div class="rating-numbers"
      <p>PAC ${player.pace}</p>
      <p>SHO ${player.shooting}</p>
      <p>PAS ${player.passing}</p>
      <p>DRI ${player.dribbling}</p>
      <p>DEF ${player.defending}</p>
      <p>PHY ${player.physical}</p>
      </div>      
      `;
      playersContainer.appendChild(div);
    });
}



const playerCards = document.querySelectorAll('.playerCard');

playerCards.forEach(element => {
  
  element.addEventListener("click", (e) => {
    console.log(e.target.parentElement.id);
        
    })
});



player-card.forEach(element => {
  
  element.addEventListener("click", (e) => {
    console.log(e.target.parentElement.id);
        
    })
});