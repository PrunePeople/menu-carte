class Menu {
  async templateMenu() {
    const menu = await this.fetchData();

    const formuleMidiEntreesHTML = menu.menus.formuleMidi.entrees
      .map(
        (item) => `
      <p>${item.name}</p>
    `
      )
      .join("");

    const formuleMidiPlatsHTML = menu.menus.formuleMidi.plats
      .map(
        (item) => `
      <p>${item.name}</p>
    `
      )
      .join("");

    const formuleMidiDessertsHTML = menu.menus.formuleMidi.desserts
      .map(
        (item) => `
      <p>${item.name}</p>
    `
      )
      .join("");

    const formuleSoirWKEntreesHTML = menu.menus.formuleSoirWK.entrees
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const formuleSoirWKPlatsHTML = menu.menus.formuleSoirWK.plats
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const formuleSoirWKDessertsHTML = menu.menus.formuleSoirWK.desserts
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const menuEnfantHTML = menu.menus.menuEnfant
      .map(
        (item) => `
          <p>${item.name}</p>
        `
      )
      .join("");

    const aLaCarteEntreesHTML = menu.menus.aLaCarte.entrees
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const aLaCartePlatsHTML = menu.menus.aLaCarte.plats
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const aLaCarteDessertsHTML = menu.menus.aLaCarte.desserts
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const aLaCarteSuggestionsEntreesHTML =
      menu.menus.aLaCarte.suggestions.entrees
        .map(
          (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
            2
          )}€</p>
        `
        )
        .join("");

    const aLaCarteSuggestionsPlatsHTML = menu.menus.aLaCarte.suggestions.plats
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const aLaCarteSuggestionsDessertsHTML =
      menu.menus.aLaCarte.suggestions.desserts
        .map(
          (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
            2
          )}€</p>
        `
        )
        .join("");

    const aLaCarteGlacesIncontournablesHTML =
      menu.menus.aLaCarte.glaces.incontournables
        .map(
          (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
            2
          )}€</p>
        `
        )
        .join("");

    const aLaCarteGlacesInattenduesHTML = menu.menus.aLaCarte.glaces.inattendues
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const aLaCarteGlacesInterditesHTML = menu.menus.aLaCarte.glaces.interdites
      .map(
        (item) => `
        <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
      `
      )
      .join("");
    const aLaCarteGlacesNosParfumsGlaceHTML =
      menu.menus.aLaCarte.glaces.nosParfums.glace
        .map(
          (item) => `
      <p>${item.name} .............................. ${item.price1.toFixed(
            2
          )}€ - ${item.price2.toFixed(2)}€</p>
    `
        )
        .join("");

    const aLaCarteGlacesNosParfumsSorbetHTML =
      menu.menus.aLaCarte.glaces.nosParfums.sorbet
        .map(
          (item) => `
        <p>${item.name} .............................. ${item.price1.toFixed(
            2
          )}€ - ${item.price2.toFixed(2)}€</p>
      `
        )
        .join("");

    const boissonsCocktailsSansAlcoolHTML = menu.boissons.cocktails.sansAlcool
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsCocktailsAvecAlcoolHTML = menu.boissons.cocktails.avecAlcool
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsBieresHTML = menu.boissons.bieres
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsWhiskiesHTML = menu.boissons.whiskies
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsAperitifsHTML = menu.boissons.aperitifs
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsSoftsHTML = menu.boissons.softs
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsBoissonsChaudesHTML = menu.boissons.boissonsChaudes
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsDigestifsHTML = menu.boissons.digestifs
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsRhumsHTML = menu.boissons.rhums
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsVinsRougeHTML = menu.boissons.vins.rouge
      .map(
        (item) => `
        <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
      `
      )
      .join("");

    const boissonsVinsRoseHTML = menu.boissons.vins.rose
      .map(
        (item) => `
          <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
        `
      )
      .join("");

    const boissonsVinsblancSecHTML = menu.boissons.vins.blancSec
      .map(
        (item) => `
        <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
      `
      )
      .join("");

    const boissonsVinsBlancMoelleuxHTML = menu.boissons.vins.blancMoelleux
      .map(
        (item) => `
      <p>${item.name} .............................. ${item.price.toFixed(
          2
        )}€</p>
    `
      )
      .join("");

    const boissonsVinsChampagneHTML = menu.boissons.vins.champagne
      .map(
        (item) => `
    <p>${item.name} .............................. ${item.price.toFixed(2)}€</p>
    `
      )
      .join("");

    return `
          <div class="bordered-content">
            <h2>Nos Menus</h2>
            <div class="formule-midi">
              <h3>Formule Midi</h3>
              <div class="entrees">
                <h4>Entrées</h4>
                <div class="menu-gauche-donnees" id="formule-midi-entrees">${formuleMidiEntreesHTML}</div>
              </div>
              <div class="plats">
                <h4>Plats</h4>
                <div class="menu-gauche-donnees" id="formule-midi-plats">${formuleMidiPlatsHTML}</div>
              </div>
              <div class="desserts">
                <h4>Desserts</h4>
                <div class="menu-gauche-donnees" id="formule-midi-desserts">${formuleMidiDessertsHTML}</div>
              </div>
            </div>
            <br>
            <h3>Formule Soir & Week-end</h3>
            <div class="entrees">
              <h4>Entrées</h4>
              <div class="menu-gauche-donnees" id="soir-weekend-entrees">${formuleSoirWKEntreesHTML}</div>
            </div>
            <div class="plats">
              <h4>Plats</h4>
              <div class="menu-gauche-donnees" id="soir-weekend-plats">${formuleSoirWKPlatsHTML}</div>
            </div>
            <div class="desserts">
              <h4>Desserts</h4>
              <div class="menu-gauche-donnees" id="soir-weekend-desserts">${formuleSoirWKDessertsHTML}</div>
            </div>
            <br>
            <h3>Menu Enfant</h3>
            <div class="entrees">
              <div class="menu-gauche-donnees" id="enfants-entrees">${menuEnfantHTML}</div>
            </div>
            <br>
            <hr>
            <h2>A la carte</h2>
            <div class="a-la-carte">
              <h3>Entrées à la carte</h3>
              <div class="entrees">
                <div class="menu-gauche-donnees" id="ala-carte-entrees">${aLaCarteEntreesHTML}</div>
              </div>
              <h3>Plats à la carte</h3>
              <div class="plats">
                <div class="menu-gauche-donnees" id="ala-carte-plats">${aLaCartePlatsHTML}</div>
              </div>
              <h3>Desserts à la carte</h3>
              <div class="desserts">
                <div class="menu-gauche-donnees" id="ala-carte-desserts">${aLaCarteDessertsHTML}</div>
              </div>
              <br>
              <h3>Suggestions</h3>
              <div class="entrees">
                <h4>Entrées</h4>
                <div class="menu-gauche-donnees" id="suggestions-entrees">${aLaCarteSuggestionsEntreesHTML}</div>
              </div>
              <div class="plats">
                <h4>Plats</h4>
                <div class="menu-gauche-donnees" id="suggestions-plats">${aLaCarteSuggestionsPlatsHTML}</div>
              </div>
            <div class="desserts">
              <h4>Desserts</h4>
              <div class="menu-gauche-donnees" id="desserts-container">${aLaCarteSuggestionsDessertsHTML}</div>
            </div>
            <br>
            <h3>Glaces</h3>
            <div class="entrees">
              <h4>Les Incontournables</h4>
              <div class="menu-gauche-donnees" id="entrees">${aLaCarteGlacesIncontournablesHTML}</div>
            </div>
            <div class="plats">
              <h4>Les Inattendues</h4>
              <div class="menu-gauche-donnees" id="plats">${aLaCarteGlacesInattenduesHTML}</div>
            </div>
            <div class="desserts">
              <h4>Les Interdites</h4>
              <div class="menu-gauche-donnees" id="desserts-container">${aLaCarteGlacesInterditesHTML}</div>
            </div>
            <div class="desserts">
            <h4>Nos Parfums</h4>
            <div class="entrees">
            <h4>Nos Glaces</h4>
            <div class="menu-gauche-donnees" id="entrees">${aLaCarteGlacesNosParfumsGlaceHTML}</div>
          </div>
          <div class="entrees">
            <h4>Nos Sorbets</h4>
            <div class="menu-gauche-donnees" id="entrees">${aLaCarteGlacesNosParfumsSorbetHTML}</div>
          </div>
          </div>
          <br>
          <hr>
          <h2>Nos Boissons</h2>
          <div class="boissons">
          <h3>Cocktails</h3>
          <div class="entrees">
            <h4>Sans alcool</h4>
            <div class="menu-gauche-donnees" id="entrees">${boissonsCocktailsSansAlcoolHTML}</div>
          </div>
          <div class="entrees">
          <h4>Avec alcool</h4>
          <div class="menu-gauche-donnees" id="entrees">${boissonsCocktailsAvecAlcoolHTML}</div>
        </div>
          <h3>Bières<h3>
          <div class="plats">
            <div class="menu-gauche-donnees" id="plats">${boissonsBieresHTML}</div>
          </div>
          <h3>Whiskies<h3>
          <div class="desserts">
            <div class="menu-gauche-donnees" id="desserts-container">${boissonsWhiskiesHTML}</div>
          </div>
          <h3>Apéritifs</h3>
          <div class="entrees">
            <div class="menu-gauche-donnees" id="entrees">${boissonsAperitifsHTML}</div>
          </div>
          <h3>Softs<h3>
          <div class="plats">
            <div class="menu-gauche-donnees" id="plats">${boissonsSoftsHTML}</div>
          </div>
          <h3>Digestifs<h3>
          <div class="desserts">
            <div class="menu-gauche-donnees" id="desserts-container">${boissonsDigestifsHTML}</div>
          </div>
          <h3>Rhums<h3>
          <di class="desserts">
            <div class="menu-gauche-donnees" id="desserts-container">${boissonsRhumsHTML}</div>
          </div>
          <h3>Boissons chaudes<h3>
          <div class="desserts">
            <div class="menu-gauche-donnees" id="desserts-container">${boissonsBoissonsChaudesHTML}</div>
          </div>
          <h3>Les Vins</h3>
            <div class="entrees">
              <h4>Vins Rouge</h4>
              <div class="menu-gauche-donnees" id="entrees">${boissonsVinsRougeHTML}</div>
            </div>
            <div class="plats">
              <h4>Vins Rosé</h4>
              <div class="menu-gauche-donnees" id="plats">${boissonsVinsRoseHTML}</div>
            </div>
            <div class="desserts">
              <h4>Vin Blanc sec</h4>
              <div class="menu-gauche-donnees" id="desserts-container">${boissonsVinsblancSecHTML}</div>
            </div>
            <div class="desserts">
            <h4>Vins bkanc moelleux</h4>
            <div class="menu-gauche-donnees" id="desserts-container">${boissonsVinsBlancMoelleuxHTML}</div>
            </div>
            <div class="desserts">
            <h4>Champagne</h4>
            <div class="menu-gauche-donnees" id="desserts-container">${boissonsVinsChampagneHTML}</div>
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
