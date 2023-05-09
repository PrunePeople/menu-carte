class Menu {
  async templateMenu() {
    const menu = await this.fetchData();

    const formuleMidiEntreesHTML = menu.menus.formuleMidi.entrees
      .map(
        (item) => `
      <p>${item.name} .......... $${item.price.toFixed(2)}</p>
    `
      )
      .join("");

    const formuleMidiPlatsHTML = menu.menus.formuleMidi.plats
      .map(
        (item) => `
      <p>${item.name} .......... $${item.price.toFixed(2)}</p>
    `
      )
      .join("");

    const formuleMidiDessertsHTML = menu.menus.formuleMidi.desserts
      .map(
        (item) => `
      <p>${item.name} .......... $${item.price.toFixed(2)}</p>
    `
      )
      .join("");

        const formuleSoirWKEntreesHTML = menu.menus.formuleSoirWK.entrees
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const formuleSoirWKPlatsHTML = menu.menus.formuleSoirWK.plats
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const formuleSoirWKDessertsHTML = menu.menus.formuleSoirWK.desserts
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const menuEnfantHTML = menu.menus.menuEnfant
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const aLaCarteEntreesHTML = menu.menus.aLaCarte.entrees
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const aLaCartePlatsHTML = menu.menus.aLaCarte.plats
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const aLaCarteDessertsHTML = menu.menus.aLaCarte.desserts
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const aLaCarteSuggestionsEntreesHTML =
          menu.menus.aLaCarte.suggestions.entrees
            .map(
              (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
            )
            .join("");

        const aLaCarteSuggestionsPlatsHTML = menu.menus.aLaCarte.suggestions.plats
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const aLaCarteSuggestionsDessertsHTML =
          menu.menus.aLaCarte.suggestions.desserts
            .map(
              (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
            )
            .join("");

        const aLaCarteGlacesIncontournablesHTML =
          menu.menus.aLaCarte.glaces.incontournables
            .map(
              (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
            )
            .join("");

        const aLaCarteGlacesInattenduesHTML =
          menu.menus.aLaCarte.glaces.incontournables
            .map(
              (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
            )
            .join("");

        const aLaCarteGlacesInterditesHTML =
          menu.menus.aLaCarte.glaces.incontournables
            .map(
              (item) => `
        <p>${item.name} .......... $${item.price.toFixed(2)}</p>
      `
            )
            .join("");
        const aLaCarteGlacesNosParfumsHTML =
          menu.menus.aLaCarte.glaces.incontournables
            .map(
              (item) => `
      <p>${item.name} .......... $${item.price.toFixed(2)}</p>
    `
            )
            .join("");

        const boissonsCocktailsHTML = menu.boissons.cocktails
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsBieresHTML = menu.boissons.bieres
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsWhiskiesHTML = menu.boissons.whiskies
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsAperitifsHTML = menu.boissons.aperitifs
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsSoftsHTML = menu.boissons.softs
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsBoissonsChaudesHTML = menu.boissons.boissonsChaudes
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsDigestifsHTML = menu.boissons.digestifs
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsVinsRougeHTML = menu.boissons.vins.rouge
          .map(
            (item) => `
        <p>${item.name} .......... $${item.price.toFixed(2)}</p>
      `
          )
          .join("");

        const boissonsVinsRoseHTML = menu.boissons.vins.rose
          .map(
            (item) => `
          <p>${item.name} .......... $${item.price.toFixed(2)}</p>
        `
          )
          .join("");

        const boissonsVinsblancSecHTML = menu.boissons.vins.blancSec
          .map(
            (item) => `
        <p>${item.name} .......... $${item.price.toFixed(2)}</p>
      `
          )
          .join("");

        const boissonsVinsBlancMoelleuxHTML = menu.boissons.vins.blancMoelleux
          .map(
            (item) => `
      <p>${item.name} .......... $${item.price.toFixed(2)}</p>
    `
          )
          .join("");

        const boissonschampagneHTML = menu.boissons.vins.champagne
          .map(
            (item) => `
    <p>${item.name} .......... $${item.price.toFixed(2)}</p>
    `
          )
          .join("");

    return `
        <div class="bordered-content">
          <h3>Nos Menus</h3>
          <div class="formule-midi">
            <h4>Formule Midi</h4>
            <div class="entrees">
              <h5>Entrées</h5>
              <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
            </div>
            <div class="plats">
              <h5>Plats</h5>
              <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
            </div>
            <div class="desserts">
              <h5>Desserts</h5>
              <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
            <br>
            <h4>Formule Soir & Week-end</h4>
            <div class="entrees">
              <h5>Entrées</h5>
              <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
            </div>
            <div class="plats">
              <h5>Plats</h5>
              <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
            </div>
            <div class="desserts">
              <h5>Desserts</h5>
              <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
            <br>
            <h4>Menus Enfants</h4>
            <div class="entrees">
              <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
            </div>
          </div>
          <br>
          <h3>A la carte</h3>
          <div class="a-la-carte">
            <h4>Entrées à la carte</h4>
            <div class="entrees">
              <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
            </div>
            <h4>Plats à la carte<h4>
            <div class="plats">
              <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
            </div>
            <h4>Desserts à la carte<h4>
            <div class="desserts">
              <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
            <br>
            <h4>Suggestions</h4>
            <div class="entrees">
              <h5>Entrées</h5>
              <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
            </div>
            <div class="plats">
              <h5>Plats</h5>
              <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
            </div>
            <div class="desserts">
              <h5>Desserts</h5>
              <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
            <br>
            <h4>Glaces</h4>
            <div class="entrees">
              <h5>Les Incontournables</h5>
              <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
            </div>
            <div class="plats">
              <h5>Les Inattendues</h5>
              <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
            </div>
            <div class="desserts">
              <h5>Les Interdites</h5>
              <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
            <div class="desserts">
            <h5>Nos Parfums</h5>
            <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
          </div>
          <br>
          <h3>Nos Boissons</h3>
          <div class="boissons">
          <h4>Cocktails</h4>
          <div class="entrees">
            <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
          </div>
          <h4>Bières<h4>
          <div class="plats">
            <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
          </div>
          <h4>Whiskies<h4>
          <div class="desserts">
            <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
          </div>
          <h4>Apéritifs</h4>
          <div class="entrees">
            <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
          </div>
          <h4>Softs<h4>
          <div class="plats">
            <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
          </div>
          <h4>Digestifs<h4>
          <div class="desserts">
            <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
          </div>
          <h4>Boissons chaudes<h4>
          <div class="desserts">
            <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
          </div>
          <h4>Les Vins</h4>
            <div class="entrees">
              <h5>Vins Rouge</h5>
              <div class="donnees-menu" id="entrees">${formuleMidiEntreesHTML}</div>
            </div>
            <div class="plats">
              <h5>Vins Rosé</h5>
              <div class="donnees-menu" id="plats">${formuleMidiPlatsHTML}</div>
            </div>
            <div class="desserts">
              <h5>Vin Blanc sec</h5>
              <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
            <div class="desserts">
            <h5>Vins bkanc moelleux</h5>
            <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
            <div class="desserts">
            <h5>Champagne</h5>
            <div class="donnees-menu" id="desserts-container">${formuleMidiDessertsHTML}</div>
            </div>
          </div>
        </div>
      `;
  }
  async fetchData() {
    const rawData = await fetch("data.json");
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
