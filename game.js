document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownButton.addEventListener('click', function () {
      if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
      } else {
          dropdownContent.style.display = 'block';
      }
  });
});
//// Optional: Close on outside click, not needed but I found this lol (charlie)
// document.addEventListener('click', (event) => {
//   if (!dropdown.contains(event.target)) {
//     dropdownContent.style.display = 'none';
//   }
// });
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
   textElement.innerText = textNode.text
   while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
   } //removes options not needed on page

   textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    }
   })
} //adds buttons when needing an option, max three

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
} //changes req state, used for wizard

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
} //shows the next text, and assigns options

// figure out how to change images alongside the info
const textNodes = [
    {
        id: 1,
        text: 'You wake up in your home, deep within the humble village of Socrates. Your name is Nix, and the fate of this world lies in your hands. You walk out into town, overhearing rumors from townsfolk about an entity that wishes to bring utter destruction to the Evanesca. Asking around, you find out this urban legend you hear of stands by the name “Malice”. You should find out more.',
        // this is where the game starts, dead ends lead back to here

        // setState: { wizard: true },
        options: [
            {
                text: 'Go Home.',
                nextText: 50,
            },
            {
                text: 'Go to the local library.',
                nextText: 2,
            },
            {
                text: 'Go to the local magic library.',
                nextText: 3,
            }
        ]
    },
    {
        // deadend
        id: 50,
        text: 'You throw up your hands, and turn around to face home. This isn’t your problem, and it never has to be. You walk down the path back to your cozy cottage, walking inside to feel the warm air inside of your home. Travelling through, you throw yourself into your room, flopping into bed. And though you’ve returned safely home, you feel as if something is watching over you. You will never find out what is watching. Nor will you *ever* find out. [[ YOU LOSE ]]',
        options: [
            {
                text: 'Restart',
                nextText: 1
            },
        ]
    },
    {
        id: 51,
        text: "You meet your unfortunate fate, and suddenly EXPLODE in front of Nagito. (Hey, didn't you read the book cover?)",
        options: [
            {
                text: 'Restart',
                nextText: 8,
            },
            {
                text: 'Restart to Beginning',
                nextText: 1,
            },
        ]
    },
    {
        id: 52,
        text: "The left path leads down past a dried creek full of a dark red substance that appears to coagulate rapidly. You couldn't help but wince as you watched it squelch underneath your feet. You proceed forward.",
        options: [
            {
                text: 'Go forward.',
                nextText: 54,
            },
        ]
    },
    {
        id: 53,
        text: "The right path leads you straight through a massive cave full of glowing crystals. As you walk, you find yourself on the horizons of the left path you glimpsed at on your way here. Walking path the dried creek with suspicious substance, you proceed.",
        options: [
            {
                text: 'Go forward.',
                nextText: 54,
            },
        ]
    },
    {
        id: 54,
        text: "The right path leads you straight through a massive cave full of glowing crystals. As you walk, you find yourself on the horizons of the left path you glimpsed at on your way here. Walking path the dried creek with suspicious substance, you proceed.",
        options: [
            {
                text: 'The lights are calling to you. Go to it.',
                nextText: 55,
            },
            {
                text: 'Go back to town for materials.',
                nextText: 0,
            },
        ]
    },
    {
        id: 55,
        text: "The lights beckon you deeper into the forest, following florescent lights that mindlessly led you down a path. Next thing you know, you trip, causing yourself to tumble and fall down a deep dark hole...and you wake up, confused. NEVER. TRUST. A. FAE. [[Ending: Fallen Down]]",
        options: [
            {
                text: 'Restart',
                nextText: 7,
            },
            {
                text: 'Restart to Beginning',
                nextText: 1,
            },
        ]
    },
    {
        id: 2,
        text: 'You walk down the village path down to the local library to find more information on this urban legend… However, you only happen to find storytale books, and nothing indicating exactly who Malice is. Or, what this thing can do. You walk out of the library.',
        options: [
            {
                text: 'Progress.',
                nextText: 4,
            }
        ]
    },
    {
        id: 3, 
        text: 'You walk into the village’s library of magic, the carrier of grimoires and books thorough on folklore. Picking up one of the books on folklore, you learn that Malice is an ethereal being that is made of black ink and dense murky fog. This entity was sealed away for 400 years, and today marks the day of its release. There’s information about what this thing is , but no other information about how to overcome this disastrous entity is provided. You walk out of the library.',
        options: [
            {
                text: 'Progress.',
                nextText: 4,
            }
        ]
    },
    {
        id: 4,
        text: 'Walking out of the library, you bump into a lanky man wearing the clothes of what seems to be a wizard. Recognizing him, he is the great wise wizard of the west. But…he doesn’t seem so wise when you get a closer look at him. You help him up from the floor, his steps wobbly in their wake. He introduces himself. His name is Nagito, the Wizard of the West. He lives in the tower inside of the forest. Nagito tells you more about Malice, the evil entity you had been seeking information on. He mentions how magic is important to defeat him, and won’t be possible without. He even confirms the rumor of Malice finally reigning free. You squint at him slightly, pondering this information.',
        options: [
            {
                text: 'Go home.',
                nextText: 50,
            },
            {
                text: 'Go out into the forest.',
                nextText: 5,
            },
            {
                text: 'Ask how to learn magic.',
                nextText: 6,
            },
        ]
    },
    {
        id: 5,
        text: 'You walk past Nagito, straight into the forest. There’s trees and massive foliage surrounding you. You trudge through the greenery, and you stumble upon two paths.',
        options: [
            {
                text: 'Progress',
                nextText: 7,
            },
        ]
    },
    {
        id: 6,
        text: 'You ask Nagito if he could teach them some magic to go and face the eldritch mad man Malice with him.',
        options: [
            {
                text: 'Progress',
                nextText: 8,
            },
        ]
    },
    // leads to NEVER TRUST A FAE deadend
    {
        id: 7,
        text: 'After trudging out of town and into the forest, you come across two paths to choose from.',
        options: [
            {
                text: 'Go down the left path.',
                nextText: 52,
            },
            {
                text: 'Go down the right path.',
                nextText: 53,
            },
            {
                text: 'Go back to town to gather weapons.',
                nextText: 7.1,
            },
        ]
    },
    {
        id: 8,
        text: 'The Wizard gladly tells you that he can teach you how to conduct magic, leading you back to his wizard tower inside of the forest. Inside, the Wizard offers tombs of magic to you. There are three you can choose from.',
        options: [
            {
                text: "Alduin's Tomb of Death and Ailments (Necromancy)",
                nextText: 9,
            },
            {
                text: "Fury's Tomb of War Fire (Pyromancy)",
                nextText: 9,
            },
            {
                text: 'CURSE OF EXPLODING',
                nextText: 51,
            },
        ]
    },
    {
        id: 9,
        text: 'One week later, You are a master of the magic you have chosen, congrats! You go out, delving deeper into the forest and the Wizard joins you through your adventure. With Nagito by your side, you manage to clear the forest paths easily on your journey to the old shipyard.',
        options: [
            {
                text: "Go Home.",
                nextText: 50, 
            },
            {
                text: "Explore the ruined boat.",
                nextText: 10,
            },
            { 
                text: "Take the functioning boat.",
                nextText: 11,
            },
        ]
    },
    {
        id: 11,
        text: "You take the boat across the large lake, but to your unfortunate luck, you run into a large lake monster.",
        options: [
            {
                text: "Flee!",
                nextText: 0,
            },
            {
                text: "Fight with magic!",
                nextText: 0,
            },
            {
                text: "Fight!",
                nextText: 0,
            }
        ]
    },
    // {
    //     id: 2,
    //     text: 'You venture forth in search of answers to where you are, when you happen to come across a merchant.',
    //     options: [
    //         {
    //             text: 'Trade the goo for a sword',
    //             requiredState: (currentState) => currentState.blueGoo, 
    //             setState: { blueGoo: false, sword: true},
    //             nextText: 3
    //         },
    //         {
    //             text: 'Trade the goo for a shield',
    //             requiredState: (currentState) => currentState.blueGoo, 
    //             setState: { blueGoo: false, shield: true},
    //             nextText: 3
    //         },
    //         {
    //             text: 'Ignore the merchant.',
    //             nextText: 3
    //         }
    //     ]
    // },
    // {
    //     id: 3,
    //     text: 'After leaving the merchant, you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    //     options: [
    //         {
    //             text: 'Explore the castle.',
    //             nextText: 4
    //         },
    //         {
    //             text: 'Find a room to sleep in at the town.',
    //             nextText: 5
    //         },
    //         {
    //             text: 'Find some hay in a stable to sleep in.',
    //             nextText: 6
    //         }
    //     ]
    // },
    // {
    //     id: 4,
    //     text: 'You were so tired that you fell asleep exploring the castle, and you are killed by some terrible monster in your sleep.'
    // },
]

startGame()