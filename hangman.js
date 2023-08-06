"use strict";

const alphabet = [
  "A",
  "B",
  "C",
  "Č",
  "D",
  "E",
  "Ě",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "Ř",
  "S",
  "Š",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ž",
];
const words = [
  "MRAVENEČNÍK",
  "KRÁVA",
  "ANTILOPA",
  "ALBATROS",
  "PTAKOPYSK",
  "VČELOJED",
  "OREL",
  "SOKOL",
  "POŠTOLKA",
  "MEDVĚD",
  "POTKAN",
  "ZEBRA",
  "KRTEK",
  "KOSATKA",
  "MROŽ",
  "VELRYBA",
  "TYGR",
  "SAMICE",
  "ŠAKAL",
  "LEVHART",
  "GEPARD",
  "SKOKAN",
  "ROPUCHA",
  "ŠIMPANZ",
  "ORANGUTAN",
  "GORILA",
  "KAJMAN",
  "JEŽEK",
  "HROCH",
  "NOSOROŽEC",
  "SLON",
  "ŽIRAFA",
  "ŽRALOK",
  "LEMUR",
  "PANTER",
  "KROKODÝL",
  "ALIGÁTOR",
  "DELFÍN",
];
const playZone = document.querySelector("article");
playZone.textContent = "";
const addButton = document.getElementById("buttons");
addButton.textContent = "Na které zvíře myslím?";
const gallows = document.querySelector("img");
gallows.src = "gallows10.png";

//start new game
document.querySelector("a").addEventListener("click", () => {
  //create alphabet buttons
  addButton.textContent = "";
  gallows.src = "gallows10.png";
  document.querySelector("p").textContent = "";
  const oneButton = document.createDocumentFragment();

  alphabet.forEach((letter) => {
    const newButtons = document.createElement("button");
    newButtons.textContent = letter;
    newButtons.id = letter;
    oneButton.appendChild(newButtons);
  });
  addButton.appendChild(oneButton);

  //new guess word
  const selectedId = Math.floor(Math.random() * words.length);
  const word = Array.from(words[selectedId]);

  console.log(word);
  var hiddenWord = [...word];

  let hidden = "";
  for (let i = 0; i < hiddenWord.length; i++) {
    hiddenWord[i] = "-";
    hidden += hiddenWord[i];
  }
  playZone.textContent = hidden;
  let lifesCounter = 10;
  let hitCounter = 0;

  //check guess letter
  document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("click", () => {
      const letter = element.getAttribute("id");
      element.classList.add("hidden"); //hide button
      hidden = "";
      let life = -1;

      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          hiddenWord[i] = letter;
          hitCounter++;
          life = 0;
        } else if (word[i] === "Á" && letter === "A") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if (word[i] === "É" && letter === "E") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if (word[i] === "Í" && letter === "I") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if (word[i] === "Ó" && letter === "O") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if ((word[i] === "Ú" || word[i] === "Ů") && letter === "U") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if (word[i] === "Ý" && letter === "Y") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if (word[i] === "Ď" && letter === "D") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if (word[i] === "Ť" && letter === "T") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        } else if (word[i] === "Ň" && letter === "N") {
          hiddenWord[i] = word[i];
          hitCounter++;
          life = 0;
        }
      }
      lifesCounter += life;
      gallows.src = `gallows${lifesCounter}.png`;
      console.log(lifesCounter);

      for (let i = 0; i < word.length; i++) {
        hidden += hiddenWord[i];
      }
      if (hitCounter === word.length && lifesCounter > 0) {
        playZone.textContent = `Vyhráli jste!!! :)`;
        document.querySelector("p").textContent = `'${hidden}'`;
        addButton.textContent = "";
      } else if (hitCounter !== word.length && lifesCounter === 0) {
        playZone.textContent = `Prohráli jste!!! :(`;
        document.querySelector("p").textContent = `'${words[selectedId]}'`;
        addButton.textContent = "";
      } else {
        playZone.textContent = hidden;
      }
    });
  });
});
