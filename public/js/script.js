/*Avec un tableau changer l'élément word avec une rotation de mot
  1 - selection de l'élément avec getElementsByClassName
  2 - Création du tableau avec les divers mot à l'interieur
  3 - Mise en place d'une rotation avec une fonction qui s'execute au lancement

Faire une fonction qui onclick change inverse les variable de couleur.
  */

//IIFES (imediately invoked function expressions)
//Fonction anonyme immédiate.

  let wordSelection = document.querySelector("#changeWordFunction");
  let devArray = ["to Design", "to Code", "to Learn", "computing"];
  function changeWord(wordArray) {
      for (let i = 0; i < wordArray.length; i++) {
        setTimeout(function () {
          wordSelection.textContent = wordArray[i];
        }, i * 5000, i)
      }
    } 


  let styleLoader = document.querySelector(".styleChanger");
  let switchButton = document.querySelector("#colorChanger");
  let darkOrLight;

  switchButton.addEventListener("click", function () {
    darkOrLight = styleLoader.getAttribute("href");
    console.log(darkOrLight);
    if (darkOrLight === "css/style-light.css" || darkOrLight === null ) {
      localStorage.setItem("background", "css/style-dark.css");
      styleLoader.setAttribute("href", "css/style-dark.css");
    } else {
      localStorage.setItem("background", "css/style-light.css");
      styleLoader.setAttribute("href", "css/style-light.css");
    }
  });
  
  window.onload = () => {  
    if(localStorage.length == 0){
      styleLoader.setAttribute("href","css/style-dark.css");
      console.log("dans le chargement ! style loader est  égal à null")
    }else{
      styleLoader.setAttribute("href", localStorage.getItem('background'));
      console.log(darkOrLight)
      console.log("dans le chargement ! style loader n'est pas égal à null")

    }
  };

  if (wordSelection !== undefined && wordSelection !== null){
  changeWord(devArray);
  }



