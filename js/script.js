const data = await fetch("./package.json")
  .then((response) => response.json())
  .catch((error) => alert("Erreur : " + error));
