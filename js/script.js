const data = await fetch("./data/data.json")
  .then((response) => response.json())
  .catch((error) => alert("Erreur : " + error));

console.log(data);

for (let i = 0; i < data.length; i++) {
  let newArticle = document.createElement("article");
  let main = document.querySelector("main");

  newArticle.innerHTML = `<figure>
          <picture>
            <img
              src="${data[i].image}"
              alt="Image ${data[i].name}"
            />
          </picture>
          <figcaption>
            <span class="types">${data[i].apiTypes[0].name}</span>
            <h2>${data[i].name}</h2>
            <ol>
              <li>Points de vie : ${data[i].stats.HP}</li>
              <li>Attaque : ${data[i].stats.attack}</li>
              <li>Défense : ${data[i].stats.defense}</li>
              <li>Attaque spécial : ${data[i].stats.special_attack}</li>
              <li>Vitesse : ${data[i].stats.speed}</li>
            </ol>
          </figcaption>
        </figure>`;

  main.appendChild(newArticle);
}
