API_HARRY_POTTER = "https://hp-api.lainocs.fr/characters";

async function getHarryPotterCharacters() {
  try {
    const response = await fetch(API_HARRY_POTTER);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// display the characters
async function displayCharacters() {
  const characters = await getHarryPotterCharacters();
  const charactersContainer = document.getElementById("characters-container");
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");
    characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <h3 class="character-name">${character.name}</h3>
            <p class="character-house">${character.house}</p>
        `;
    charactersContainer.appendChild(characterCard);
  });
}

displayCharacters();
