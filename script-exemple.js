function addMiddleDots(sentence, stringLength) {
  const nbrOfDotsToAdd = stringLength - sentence.length;
  if (nbrOfDotsToAdd <= 0) {
      return sentence;
  }
  const middleOfTheSentence = Math.floor(sentence.length / 2);
  const firstPartOfTheSentence = sentence.slice(0, middleOfTheSentence);
  const secondPartOfTheSentence = sentence.slice(middleOfTheSentence, sentence.length);
  const dots = Array(nbrOfDotsToAdd).fill(".").join("");
  return firstPartOfTheSentence + dots + secondPartOfTheSentence;
}

class Menu {
  async templateMenu() {
    const menu = await this.fetchData();
  
    const maxLineLength = 50; // Longueur maximale de chaque ligne
    const entreesHTML = menu.entrees.map(item => {
      const line = `${item.name}`;
      const formattedLine = addMiddleDots(line, maxLineLength);
      return `<p>${formattedLine} $${item.price.toFixed(2)}</p>`;
    }).join('');
  
    const platsHTML = menu.plats.map(item => {
      const line = `${item.name}`;
      const formattedLine = addMiddleDots(line, maxLineLength);
      return `<p>${formattedLine} $${item.price.toFixed(2)}</p>`;
    }).join('');
  
    const dessertsHTML = menu.desserts.map(item => {
      const line = `${item.name}`;
      const formattedLine = addMiddleDots(line, maxLineLength);
      return `<p>${formattedLine} $${item.price.toFixed(2)}</p>`;
    }).join('');
  
    return `
      <div class="bordered-content">
        <h2>Nos Menus</h2>
        <div class="formule-midi">
          <h3>Formule midi</h3>
          <div class="entrees">
            <h2>Entrées</h2>
            <div id="entrees">${entreesHTML}</div>
          </div>
          <div class="plats">
            <h2>Plats</h2>
            <div id="plats">${platsHTML}</div>
          </div>
          <div class="desserts">
            <h2 id="desserts">Desserts</h2>
            <div id="desserts-container">${dessertsHTML}</div>
          </div>
        </div>
      </div>
    `;
  }
  
  

  async fetchData() {
    const rawData = await fetch("data-exemple.json");
    const data = await rawData.json();
    return data;
  }
}

const el_menu = document.querySelector(".menu-colonne-gauche");
const menu = new Menu();

async function renderMenu() {
  el_menu.innerHTML = await menu.templateMenu();
}

renderMenu();
