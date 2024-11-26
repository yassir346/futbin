async function fetchPlayers() {
    let fetcher = await fetch("../players.json");
    let json = await fetcher.json();
    // display_players(data);
    console.log(json);
}

fetchPlayers(); 
//function display_players(data){
//}