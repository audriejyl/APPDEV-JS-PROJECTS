import React, { useState } from 'react';

export default function FavoriteGames() {
  const [games, setGames] = useState([
    "Doomsday Hunters",
    "Hades",
    "ScourgeBringer"
  ]);

  function handleAddGame() {
    //referencing the text box
    const newGame = document.getElementById("gameInput").value;
    setGames(g => [...g, newGame]); // adding newGame (new objet to be inserted)
    document.getElementById("gameInput").value = "";
  }
  //removing games from index
  function handleRemoveGame(index) {
    const newGames = games.filter((game, i) => i !== index);
    setGames(newGames);
  }

  return (
    <>
      <div>
        <h2>These are my favorite games in 2024</h2>
        <ul>
          {games.map((game, index) => (
            <li key={index} onClick={() => handleRemoveGame(index)}>{game}</li>
          ))}
        </ul>
        <input type="text" name="gameInput" id="gameInput" />
        <button type="button" onClick={handleAddGame}>Add Game</button>
      </div>
    </>
  );
}