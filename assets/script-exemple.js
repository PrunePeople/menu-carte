function addMiddleDots(name, maxLength) {
  if (name.length >= maxLength) {
    return name;
  }
  const nbrOfDotsToAdd = maxLength - name.length;
  const dots = Array(nbrOfDotsToAdd).fill(".").join("");
  return name + dots;
}

class Menu {
  async templateMenu() {
    const menu = await this.fetchData();
  
    const entreesHTML = menu.entrees
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 50)} ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const platsHTML = menu.plats
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 50)} ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

    const dessertsHTML = menu.desserts
      .map(
        (item) => `
          <p>${addMiddleDots(item.name, 50)} ${item.price.toFixed(2)}€</p>
        `
      )
      .join("");

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
