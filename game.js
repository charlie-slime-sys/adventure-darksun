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
// // Optional: Close on outside click, not needed but I found this lol (charlie)
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

// most options at the moment are just placeholders...yawn
const textNodes = [
    {
        id: 1,
        text: 'You wake up finding a glowing blue jar of goo next to you...',
        options: [
            {
                text: 'Take the goo.',
                setState: { blueGoo: true },
                nextText: 2,
            },
            {
                text: 'Leave the goo.',
                nextText: 2,
            }
        ]
    },
    {
        id: 2,
        text: 'You venture forth in search of answers to where you are, when you happen to come across a merchant.',
        options: [
            {
                text: 'Trade the goo for a sword',
                requiredState: (currentState) => currentState.blueGoo, 
                setState: { blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'Trade the goo for a shield',
                requiredState: (currentState) => currentState.blueGoo, 
                setState: { blueGoo: false, shield: true},
                nextText: 3
            },
            {
                text: 'Ignore the merchant.',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'After leaving the merchant, you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
        options: [
            {
                text: 'Explore the castle.',
                nextText: 4
            },
            {
                text: 'Find a room to sleep in at the town.',
                nextText: 5
            },
            {
                text: 'Find some hay in a stable to sleep in.',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You were so tired that you fell asleep exploring the castle, and you are killed by some terrible monster in your sleep.'
    },
]

startGame()