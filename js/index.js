console.clear();

// --- Strings ---
const strings = [
  "HTML",
  "React",
  "CSS",
  "Next.js",
  "MongoDB",
  "styled components",
  "mongoose",
  "next-auth",
  "Visual Studio Code",
];

// if (string.includes("React")){ do something } else { do something else}
const result = strings.includes("Elvis");
console.log(result);
strings.push("SQL");
//console.log(strings);

// --- Games ---
const games = [
  {
    id: 1,
    name: "Barbie Horse Adventure",
    publishingYear: 2003,
    devices: ["Xbox", "PS2"],
    description:
      "Barbie rides a horse, while looking for a flock of other horses that managed to get themselves lost.",
  },
  {
    id: 2,
    name: "If It Moves, Shoot It!",
    publishingYear: 1989,
    devices: ["Amiga", "DOS"],
    description:
      "A top-down shooter, in which killing creatures from the depths of the cosmos is far more appealing than asking them to explain the mysteries of pi.",
  },
  {
    id: 3,
    name: "Attack of the Mutant Camels",
    publishingYear: 1983,
    devices: ["Atari"],
    description:
      "A bunch of enormous yellow camels are making their way to your base. Since you're fond of your base, you must massacre them from a plane.",
  },
  {
    id: 4,
    name: "Frogger: Helmet Chaos",
    publishingYear: 2005,
    devices: ["Nintdendo DS", "PSP"],
    description:
      "You play a frog. Stop a bloke destroying your home by jumping around various landscapes. There's some chaos to be had, but disappointingly not in the anatomical region the title so coyly alludes to.",
  },
  {
    id: 5,
    name: "Billy the Wizard: Rocket Broomstick Racing",
    publishingYear: 2007,
    devices: ["Wii", "PC", "PS2"],
    description:
      "It's exactly as it sounds: you're a wizard that races on a fast broomstick. Extraordinary. Where did they get that idea?",
  },
  {
    id: 6,
    name: "Yes Prime Minister",
    publishingYear: 1987,
    devices: ["Commodore 64", "Amstrad CPC", "ZX Spectrum"],
    description:
      "Tie-in game from the popular BBC political comedy of the same name. You play as Prime Minister of the UK for a week.",
  },
  {
    id: 7,
    name: "How To Be A Complete Bastard",
    publishingYear: 1987,
    devices: ["ZX Spectrum", "Commodore 64", "Amstrad CPC"],
    description:
      "Invade a party for rich folks and demonstrate your boyish skills of being a complete and utter git, by for example loosening the screws on the handles of the disabled toilet.",
  },
  {
    id: 8,
    name: "Princess Tomato in Salad Kingdom",
    publishingYear: 1988,
    devices: ["NES"],
    description:
      "As one Sir Cucumber, you must win the hand of Princess Tomato -- daughter of King Broccoli -- by retrieving the stolen royal Turnip Emblem, in this first-person puzzle-solving adventure game.",
  },
  {
    id: 9,
    name: "Ninjabread Man",
    publishingYear: 2005,
    devices: ["PC", "PS2", "Wii"],
    description:
      "It's a ninja again, but this time it's a gingerbread man who needs to save the world from evil pastries. Oh goody.",
  },
  {
    id: 10,
    name: "Extreme Laser Cats From Jupiter",
    publishingYear: 2042,
    devices: ["DOS", "Mac"],
    description:
      "Have you heard of the Extreme Laser Cats From Jupiter? Of course you have! Unfortunately, they have decided to attack earth. The Apocalypse is upon us - and it's very cute.",
  },
];
console.log("------------------");

function greetCoach() {
  console.log("Hello Coach");
}

const greetSharks = () => {
  console.log("Hello Sharks");
};

// function doSomething(param) {
//   console.log(param);
//   param();
// }

// doSomething(greetCoach);
// Higher Order Function, eine Funktion, die eine Funktion als Argument erwartet
function doSomethingXTimes(number, functionToDo) {
  for (let i = 0; i < number; i++) {
    functionToDo();
  }
}

doSomethingXTimes(5, greetCoach);
doSomethingXTimes(12, greetSharks);
doSomethingXTimes(10, () => {
  console.log("Anonyme Funktion");
});
console.log("------------------");

// forEach ist eine Higher Order Function, die eine Funktion als Argument erwartet.
// Sie ruft diese Funktion auf und übergibt ihr jedes Element als Argument.
// forEach returnt nichts (void function)
// wir führen mit jedem Array Element einen Seiteneffekt aus.

// const result2 = games.forEach((element) => {
//   console.log(element);
// });
// console.log(result2);

strings.forEach((element) => {
  //console.log(element);
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = element.toUpperCase();
  document.body.append(card);
});

// map manipuliert jedes Element. Das neue Array mit den manipulierten Elementen wird returnt.
// Das originale Array bleibt unverändert.

const upperCaseStrings = strings.map((element) => {
  return element.toUpperCase();
});
console.log(upperCaseStrings);

const gameNames = games.map((element) => {
  return element.name;
});
console.log(gameNames);

// filter checkt jedes Element auf eine Bedingung. Wenn die Callback Function 'true' returnt, wird das
// Element ins neue Array gepackt.

const gamesBefore2000 = games.filter((game) => {
  if (game.publishingYear < 2000) {
    return true;
  } else {
    return false;
  }
});
console.log(gamesBefore2000);

const gamesForPS2 = games.filter((game) => {
  return game.devices.includes("PS2");
});
console.log(gamesForPS2);

// find prüft die Elemente auf eine Bedingung. Wenn ein Element die Bedingung erfüllt, wird dieses returnt
// und es wird nicht weiter gesucht.

const searchResult = games.find((game) => {
  return game.name === "Attack of the Mutant Camels";
});
console.log(searchResult);

const gameWithId8 = games.find((game) => game.id === 8);
console.log(gameWithId8);
