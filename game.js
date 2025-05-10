// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//good for waiting for time

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

// for (const character of textNode.text) {
//     textElement.innerText += character;
//     await sleep(5);
// }

async function showTextNode(textNodeIndex) {
   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
   textElement.innerText = textNode.text;
//    for (const character of textNode.text) {
//     textElement.innerText += character;
//     await sleep(5);
// }   

// Update the placeholder image
const imageElement = document.getElementById("placeholder");
if (textNode.image) {
    imageElement.src = textNode.image;
} else {
    imageElement.src = "/images/testing-clip.jpg"; // Fallback image if none is specified
}

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
    { // PLACEHOLDER 
        id: 0,
        text: "NULL",
        image: "/images/testing-clip.jpg", //replaces the image in the HTML with the one specified here!! very important :] 
        //image
        options: [
            {
                text: "NULL",
                nextText: 1,
            },
            {
                text: "NULL",
                nextText: 1,
            },
            {
                text: "NULL",
                nextText: 1,
            },
        ]
    },
    {
        id: 1,
        text: 'You wake up in your home, deep within the humble village of Socrates. Your name is Nix, and the fate of this world lies in your hands. You walk out into town, overhearing rumors from townsfolk about an entity that wishes to bring utter destruction to Evanesca. Asking around, you find out this urban legend you hear of stands by the name “Malice”. You should find out more.',
        // this is where the game starts, dead ends lead back to here
        image: "/images/beginning.png", 
        // setState: { wizard: true },
        // requiredState: (currentState) => currentState.wizard, 
        options: [
            {
                text: 'Go Home.',
                nextText: 50,
            },
            {
                text: 'Go to the local library.',
                nextText: 2,
                setState: { wizard: false, weapon: false },
            },
            {
                text: 'Go to the local magic library.',
                nextText: 3,
                setState: { wizard: false, weapon: false },
            }
        ]
    },
    {
        // deadend home
        id: 50,
        image: "/images/go_home1.png", 
        text: 'You throw up your hands, and turn around to face home. This isn’t your problem, and it never has to be. You walk down the path back to your cozy cottage, walking inside to feel the warm air inside of your home. Travelling through, you throw yourself into your room, flopping into bed. And though you’ve returned safely home, you feel as if something is watching over you. You will never find out what is watching. Nor will you *ever* find out. [[ YOU LOSE ]]',
        options: [
            {
                text: 'Restart.',
                nextText: 1,
            },
        ]
    },
    {
        // deadend home 2
        id: 50.22,
        text: 'You throw up your hands, and turn around to face home. This isn’t your problem, and it never has to be. You walk down the path back from where you stood, walking back just to feel the warm air inside of your home brush against your worn skin. Travelling through, you throw yourself into your room, flopping into bed. And although you’ve returned safely home, you feel as if something is watching over you. You will never find out what is watching. Nor will you *ever* find out. [[ YOU LOSE ]]',
        image: "/images/go_home2.png", 
        options: [
            {
                text: 'Restart.',
                nextText: 1,
            },
            {
                text: 'Restart from last option.',
                nextText: 12.22,
            },
        ]
    },
    {
        // deadend home 3
        id: 50.33,
        text: 'You throw up your hands, and turn around to face home. This isn’t your problem, and it never has to be. You walk down the path back from where you stood, walking back just to feel the warm air inside of your home brush against your worn skin. Travelling through, you throw yourself into your room, flopping into bed. And although you’ve returned safely home, the world comes to a crumble, all because of your cowardly recluse. [[ YOU LOSE ]]',
        image: "/images/go_home3.png", //finish this
        options: [
            {
                text: 'Restart.',
                nextText: 1,
            },
            {
                text: 'Restart from last option.',
                nextText: 13,
            },
        ]
    },
    {
        // deadend home 4
        id: 50.32,
        text: 'You throw up your hands, and turn around to face home. This isn’t your problem, and it never has to be. The wizard looks utterly puzzled by your sudden act, but shrugs as he decides to follow you back on your journey anyhow. You walk down the path back from where you stood, walking back just to feel the warm air inside of your home brush against your worn skin. And even though you’ve safely returned home, the world crumbles just because of this ruthless, selfish act of yours. [[ YOU LOSE ]]',
        image: "/images/go_home4.png", //finish this
        options: [
            {
                text: 'Restart',
                nextText: 1,
            },
            {
                text: 'Restart from last option.',
                nextText: 13,
            },
        ]
    },
    {
        id: 51,
        text: "You meet your unfortunate fate, and suddenly EXPLODE in front of Nagito. (Hey, didn't you read the book cover?)",
        image: "/images/explosion.png", 
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
        image: "/images/red_creek.png", 
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
        image: "/images/cave.png", 
        options: [
            {
                text: 'Go forward.',
                nextText: 54,
            },
        ]
    },
    {
        id: 54,
        text: "The path glows lightly with fluorescent mushrooms and falling leaves. While focusing on the beautiful lights of the forest, you notice them getting closer and closer.",
        image: "/images/glowing.png", 
        options: [
            {
                text: 'The lights are calling to you. Go to it.',
                nextText: 55,
            },
            {
                text: 'Run back to town.',
                nextText: 7.1,
            },
        ]
    },
    {
        id: 55,
        text: "The lights beckon you deeper into the forest, following florescent lights that mindlessly led you down a path. Next thing you know, you trip, causing yourself to tumble and fall down a deep dark hole...and you wake up, confused. NEVER. TRUST. A. FAE. [[Ending: Fallen Down]]",
        image: "/images/never-trust-a-fae.png", 
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
        image: "/images/library.png", 
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
        image: "/images/magic_library.png", 
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
        image: "/images/fell.png", 
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
                setState: { wizard: true },
                nextText: 6,
            },
        ]
    },
    {
        id: 5,
        text: 'You walk past Nagito, straight into the forest. There’s trees and massive foliage surrounding you. You trudge through the greenery, trying to find your way through the confusing pathing.',
        image: "/images/forest.png", 
        options: [
            {
                text: 'Progress',
                nextText: 7,
            },
        ]
    },
    {
        id: 6,
        text: 'You ask Nagito if he could teach them some magic to go and face the eldritch mad man Malice with him. "This man can be of use," you think, smiling at him to assure you really meant this.',
        image: "/images/learn_magic.png", 
        options: [
            {
                text: 'Progress',
                nextText: 8,
            },
        ]
    },
    { // leads to NEVER TRUST A FAE deadend
        id: 7,
        text: "When you enter the forest, exhausted by your long walk, you stumble along two paths that you have full access to traverse. They look unique, but feel as if they're attempting to trick you.",
        image: "/images/two_paths.png", 
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
        id: 7.1,
        text: "Lodging back into town, you feel as if you're not ready for this. The forest could have killed you in an instant. You ponder on what should help you on this adventure.",
        image: "/images/town.png", 
        options: [
            {
                text: "Consult the Wizard (Magic)",
                setState: { wizard: true },
                nextText: 8,
            },
            {
                text: "Go to the Gunsmith (Gun)",
                nextText: 8.1,
            },
            {
                text: "Go to the Blacksmith (Sword)",
                nextText: 8.2,
            },
        ]
    },
    {
        id: 8,
        text: 'With a giddy smile, the Wizard gladly tells you that he can teach you how to conduct magic, leading you back to his wizard tower inside of the forest. Inside, the Wizard offers tombs of magic to you. There are three you can choose from. He tells you to choose wisely, carefully holding the three for you to look at.',
        image: "/images/giddy.png", 
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
        id: 8.1,
        text: "You approach the The Firing Pin forge house and head up the counter where a woman with pointed ears rearranges the nearby bookshelf. You would call out to her causing the lady to stop and head over to you, they greet you warmly to the shop as a short bush like man hammers away at a red hot iron bar in the background behind her. You'd ask for one of the most effective weapons they sell and the lady quickly obliges as she'd bring out a rather blocky yet elegant Welding pistol, you would pay them 25 primordia before thanking them. She wishes you luck as you head back to the forest.",
        image: "/images/coin.png", 
        options: [
            {
                text: "Progress.",
                setState: { weapon: true },
                nextText: 9.1, //gun mastery
            },
        ]
    },
    {
        id: 8.2,
        text: 'A large man stands at the blacksmith, hammering away at a large piece of metal. He looks up at you, and you ask him if he could make you a weapon. He nods, and tells you to wait a moment. After a few minutes, he hands you a large sword, and tells you to be careful with it. You thank him, and give him a couple of primodia coin in return, as that was the price. You head back out to the forest.',
        image: "/images/coin.png", 
        options: [
            {
                text: "Progress.",
                setState: { weapon: true },
                nextText: 9.2, //sword mastery
            },
        ]
    },
    {
        id: 9,
        text: 'One week later, you are a master of the magic you have chosen, congrats! You go out, delving deeper into the forest and the Wizard joins you through your adventure. With Nagito by your side, you manage to clear the forest paths easily on your journey to the old shipyard.',
        image: "/images/magic_mastery.png", 
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
        id: 9.1, //gun
        text: 'One week later, you are a master sharpshooter, congrats! You go out, delving deeper into the forest and continue your adventure. You manage to clear the forest paths on your journey to the old shipyard.',
        image: "/images/gun_mastery.png", 
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
        id: 9.2, //sword
        text: 'One week later, you are a master swordsman, congrats! You go out, delving deeper into the forest the sword helps you through your adventure. You manage to clear the forest paths easily on your journey to the old shipyard.',
        image: "/images/sword_mastery.png", 
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
        id: 10, //xplr ruined boat
        text: "You slowly approach the massive ruins of a merchant ship that has been lodged into the side of an abandoned dock workers house. The ruins of the ship and house creak loudly as the wood beams seem to be ready to break at any second due to rot and the weight setting in. You enter the boat through a massive gash in the hull revealing clearly looted boxes that were stamped with a crimson red wax seal with a boat decal on it. After rummaging through the looted remains of the ship you only really find a few clams and a key that instantly crumbles to nothing but a broken key ring and shattered bits of metal. You leave the ruined ship slightly saddened by the mediocre findings.",
        image: "/images/shipwreck.png", 
        options: [
            {
                text: "Go around the lake.",
                nextText: 10.1,
            },
            {
                text: "Go back to working boat.",
                nextText: 11,
            },
        ]
    },
    {
        id: 10.1, //around the lake
        text: "You take the long path around the lake, avoiding your own dread and silently walking down the pathway. You take in the wondrous foliage around you, including the grass softly folding underneath your feet. Luckily, nothing ever bothers you on your journey here, allowing you just a moment of leisure to stop and smell the flowers. It reminds you of back home.",
        image: "/images/around_lake.png", 
        options: [
            {
                text: "Stop and smell the flowers?",
                nextText: 10.2,
                requiredState: (currentState) => currentState.weapon,
            },
            {
                text: "Stop and smell the flowers?",
                nextText: 10.3,
                requiredState: (currentState) => currentState.wizard,
            },
            {
                text: "Continue on to pass the lake.",
                nextText: 12,
            },
        ]
    },
    {
        id: 10.2, //flowers sword
        text: "You stopped in front of the flowers, taking just a moment to rest. You feel exhausted, almost overwhelmed. You look up at the dark red sky, frightened by the darkening gloom that covered the once clear bright blue skies... You miss it. Taking a rose into your hand, you smell the flower, sickeningly sweet. It wasn't the best thing, but it provided you comfort on your journey. You get up.",
        image: "/images/rose.png", 
        options: [
            {
                text: "Continue on to pass the lake.",
                nextText: 12.1,
            },
        ]
    },
    {
        id: 10.3, //flowers wizard
        text: "You stopped in front of the flowers, taking just a moment to rest. You feel exhausted, almost overwhelmed. You look up at the dark red sky, frightened by the darkening gloom that covered the once clear bright blue skies... Nagito, pausing in front of you, offers you an orchid he had plucked for his own use, smiling sweetly down at you. You smile back, taking the flower and taking a moment to smell it. It has a delightful scent that leaves you rejuvenated. Thanking the wizard, you get up.",
        image: "/images/orchid.png", 
        options: [
            {
                text: "Continue on to pass the lake.",
                nextText: 12.1,
            },
        ]
    }, // maybe later add an option where you refuse to smell his flower and somewhat have a repeat of 10.2? footnote for charlie charleston
    {
        id: 11, ///functioning boat
        text: "You take the boat across the large lake, but to your unfortunate luck, you run into a large lake monster. The waves crash, churning below you and knocking your boat violently side to side. The beast’s jaw opening to reveal its massive fangs, ready to pull you overboard for dinner.",
        image: "/images/monster.png", 
        options: [
            {
                text: "Flee!",
                nextText: 10.1, //you go around the lake
            },
            {
                text: "Fight with magic!", //opt with wizard
                requiredState: (currentState) => currentState.wizard,
                nextText: 11.1, 
            },
            {
                text: "Fight!",
                requiredState: (currentState) => currentState.weapon,
                nextText: 11.2, //option on if you had a sword/gun
            }
        ]
    },
    {
        id: 11.1,
        text: "Nagito's gemstones raise up and off of his clothing before arranging in a circular motion in front of him. The stones change from their base ruby red color to that of a yellow sapphire as they crackle to life with bright yellow bolts of electricity that arc together into a crystal within the center of the rotating crystals around it as it works like a conduit. After only a few seconds a bright yellow beam of crackling electricity shoots out from the center crystal, putting a hole right through the creature's head, allowing you to now sail through the lake with no more obstacles in your path.",
        image: "/images/monster2.png", 
        options: [
            {
                text: "Continue across the lake.",
                nextText: 12,
            },
        ]
    },
    {
        id: 11.2,
        text: "You wield your weapon, pointing it at the large serpent before bracing your feet and narrowing your gaze. You weren't about to be eaten today. With a swift blow, you manage to knock the beast back into its waters for safety, either fleeing, or down for the count. Either or, you had no more obstacles in your way.",
        image: "/images/monster1.png", 
        options: [
            {
                text: "Continue across the lake.",
                nextText: 12,
            },
        ]
    },
    {
        id: 12,
        text: "You successfully managed to traverse the lake, exhausted by your efforts and donned with the blood of the serpent, you take a moment to rest. A soft yet harsh wind blows against you, foreshadowing the events you are yet to encounter. You ponder two options in front of you. An old, rundown cabin that seems dusty and covered in cobwebs, and the clear foggy path in front of you.",
        image: "/images/foggy.png", 
        options: [
            {
                text: "Continue Forward.",
                nextText: 13,
            },
            {
                text: "Investigate the Cabin.",
                nextText: 12.22,
            },
        ]
    },
    {
        id: 12.1, //around the lake
        text: "You successfully managed to go around the lake, rejuvenated by your calming walk. Taking a moment to pause and assess your options; you see two possible options in front of you. The path that leads you forward, and a dusty old cabin to your left.",
        image: "/images/foggy.png", 
        options: [
            {
                text: "Continue Forward.",
                nextText: 13,
            },
            {
                text: "Investigate the Cabin.",
                nextText: 12.22,
            },
        ]
    },
    {
        id: 12.22, //ruined cabin
        text: "You enter the ruined cabin, brushing away dust, cobwebs, and debris that happened to be in your way. The cabin looked like it used to be lived in, fully furnished and looking as if there were complete memories spent here. It sort of creeps you out. You look around, finding an old dusty book too worn to read. With a sigh, and yet another fail of acquiring items, you leave the cabin.",
        image: "/images/cabin.png", 
        options: [
            {
                text: "Continue Forward.",
                nextText: 13,
            },
            {
                text: 'Go home.',
                nextText: 50.22,
            },
        ]
    },
    {
        id: 13, //malice encounter, reach branches + end of story
        text: "Finally, you reach the end of the path. You see a large, dark figure standing in front of you. It looks like a mass of shadows, ink, clumping together to make one solid form, incomprehensible to the eye. You feel a chill run down your spine as you approach the figure, and you hear a voice echoing in your mind. It sounds like it's beckoning you to join it. You recognize from the books you have read that this was Malice, the entity you had been searching for. You have to make a decision, and fast.",
        image: "/images/malice.png", 
        options: [
            { //good end fight malice
                text: "Refuse and Fight",
                nextText: 14,
                requiredState: (currentState) => currentState.wizard,
            },
            { //neutral end fight malice
                text: "Refuse and Fight",
                nextText: 16,
                requiredState: (currentState) => currentState.weapon,
            },
            { //bad end weapon join malice
                text: "Join Malice",
                nextText: 15,
                requiredState: (currentState) => currentState.weapon,
            },
            { //bad end wizard join malice
                text: "Join Malice",
                nextText: 15.1,
                requiredState: (currentState) => currentState.wizard,
            },
            { //go home last chance option weapon
                text: 'Go home.',
                nextText: 50.33,
                requiredState: (currentState) => currentState.weapon,
            },
            { //go home last chance option wizard
                text: 'Go home.',
                nextText: 50.32,
                requiredState: (currentState) => currentState.wizard,
            },
        ]
    },

    {
        id: 14,
        text: "You immediately bark out a No to Malice’s offer, the wizards smile and determined stare beside you affirms your choice. You draw your weapon as you stand next to the wizard, together you will strike him down! No holds barred!",
        image: "/images/barkno.png", 
        options: [
            { //good end
                text: "Persist!",
                nextText: 14.2,
            },
        ]
    },
    
    {
        id: 14.1, // you change your mind and fight malice instead, nagito looks relieved, almost the same to id:14
        text: "You feel a heavy pain in your chest, your breath starts to falter as your choices sink in. You’ll be the one responsible for the destruction of everything, for killing someone you worked with all the way here, everything will have been for naught…You can't accept this. Before any other word gets out from either side you bring out your weapon and turn around to face Malice, slicing at him and knocking him away from you as you leap back to the Wizard’s side. Malice is now enraged and the Wizard looks at you, grateful that you made the right choice but you can still sense a bit of betrayal hiding under his expression. With a determined hand holding your weapon, you both get ready to face down Malice once and for all.",
        image: "/images/14point1.png", 
        options: [
            { //good end
                text: "Swallow your fears.",
                nextText: 14.12,
            },
        ]
    },
    {
        id: 14.12, // you change your mind and fight malice instead, nagito looks relieved, almost the same to id:14
        text: "You get Malice weak enough for you and the wizard to combine your magic and seal him again, while you focus all your energy on your magic you make a silent promise. Whenever Malice breaks free, you will bring him down with the wizard by your side. Even if it's a different life, you two will find each other and make sure Malice always fails. No matter what and next time you won't hesitate to strike him down.",
        image: "/images/14point12.png", 
        options: [
            { //good end
                text: "Seal it away!",
                nextText: 14.13,
            },
        ]
    },
    {
        id: 14.13, // you change your mind and fight malice instead, nagito looks relieved, almost the same to id:14
        text: "Malice is sealed for good, you have a bit of injuries but you need to prioritize telling others about what happened. The wizard gives you a slight smile and tells you that he’s relieved you chose the right option, yet you still see a bit of hurt in his eyes. You hold his hand tightly as you both leave Malice’s lair, everyone needs to be told the good news after all. [[THE END]]",
        image: "/images/14point13.png", 
        options: [
            { //good end
                text: "Restart from Beginning",
                nextText: 1,
            },
        ]
    },

    {
        id: 14.2,
        text: "You get Malice weak enough for you and the wizard to combine your magic and seal him again, while you focus all your energy on your magic you make a silent promise. Whenever Malice breaks free, you will bring him down with the wizard by your side. Even if its a different life, you two will find eachother and make sure Malice always fails. No matter what.",
        image: "/images/14point12.png", 
        options: [
            { //good end
                text: "Seal it away!",
                nextText: 14.3,
            },
        ]
    },
    {
        id: 14.3, 
        text: "Malice is sealed for good, you have a bit of injuries but the wizards smile at you, both having conquered Malice and saved the world makes your wounds feel like nothing more than a scrape. You pull yourself up and celebrate with the Wizard, you should go and tell the townspeople the good news. You feel like spending a bit more time with your new wizard friend though before you go back home… [[THE END]]",
        image: "/images/14point3.png", 
        options: [
            { //good end
                text: "Restart from Beginning",
                nextText: 1,
            },
        ]
    },

    {
        id: 15,
        text: "You rest your cold gaze on malice, before you extend one hand outwards to him. You accepted Malice’s offer despite what it’ll cost everyone. After accepting his offer, no one can stop the both of you as you plunge the worlds into discord and burning darkness that not a soul will live to tell the tale of. Yourself included, as all of this carnage cost you your life. As you become consumed by the flickering flames of hatred, you ask yourself if this was the right choice… You die alongside everyone else, after watching the world helplessly crumble before you. [[THE END]]",
        image: "/images/malice_accept_weapon.png", 
        options: [
            { //bad end weapon
                text: "Restart from Beginning",
                nextText: 1,
            },
        ]
    },

    {
        id: 15.1,
        text: "Despite your journey thus far with the wizard and with him by your side, you walk forward to Malice with your shoulders relaxed. You accepted his offer, without even getting a chance to turn around to face him you can feel the wizard’s betrayed stare stabbing into your back and through your heart. The silence in the air is deafening as you walk to Malice, the Wizard tenses up with apprehension as he tells you to fight him hand to hand if you really can bear the burden of this option.",
        image: "/images/15point1.png", 
        options: [
            { //BAD END wizard
                text: "Persist",
                nextText: 15.2,
            },
            { //GOOD NEU END wizard
                text: "Change your mind",
                nextText: 14.1,
            },
// will probably add a thing of him being relieved with an option for you to fight malice instead
        ]
    },
    {
        id: 15.2,
        text: "Once the wizard falls, you hear his back land against the ground with a thud as his hat falls off. The wizard has stopped breathing and the magic force is no more, Malice congrats you as now all hope is lost for the future in defeating him. Bloodshed spreads across the lands like spilled ink on paper and no one can do anything to stop it, the screams of the dead ring in your mind. They won’t have much time to shout though as you are equally dying now, just as they all are… But before you pass on once more, you look up and see what appears to be the wizard staring you down with a solemn yet judgmental gaze. It fades away just as it appeared, that was… was this really the right choice to make? [[THE END]]",
        image: "/images/15point2.png", 
        options: [
            { //BAD END wizard
                text: "Restart from Beginning",
                nextText: 1,
            },
        ]
    },

    {
        id: 16,
        text: "You inhale before sternly stating that you refuse his request and will put an end to the future he is bringing right here and now as you point your weapon at him with a harsh yet determined glare.",
        image: "/images/neutral.png", 
        options: [
            { //NEUTRAL END
                text: "Persist.",
                nextText: 16.1,
            },
        ]
    },
    {
        id: 16.1,
        text: "Once Malice falls, he manages to get sealed away yet again for another 400 years, even without the use of magic. You were injured and exhausted after the fight, but after everything, your journey has come to an end. You saved your town and the whole world by defeating Malice! ... So, why does it all feel so hollow? This was the right choice, but it feels like you are still missing something. That poisonous sense of longing never left you even after you returned to your town triumphant. [[THE END]]",
        image: "/images/16point1.png", 
        options: [
            { //NEUTRAL END
                text: "Restart from Beginning",
                nextText: 1,
            },
        ]
    },
    // good = 14 bad = 15 neutral = 16 
    // continue branching by decimal

]

startGame()


// // Function to handle selecting an option
// function selectOption(option) {
//     const placeholderImage = document.getElementById("placeholder");

//     // Update the image based on the option's image property
//     if (option.image) {
//         placeholderImage.src = option.image;
//     }

//     // Proceed to the next text node (if needed)
//     const nextTextNodeId = option.nextText;
//     showTextNode(nextTextNodeId);
// }

// // Function to display the current text node
// function showTextNode(textNodeId) {
//     const textNode = textNodes.find(node => node.id === textNodeId);

//     // Render text and options (for simplicity, console.log is used)
//     console.log(textNode.text);
//     textNode.options.forEach(option => {
//         console.log(option.text);

//         // Add event listener to choose an option
//         // Replace this with actual button creation if needed
//         // Example:
//         // const button = document.createElement("button");
//         // button.innerText = option.text;
//         // button.onclick = () => selectOption(option);
//         // document.body.appendChild(button);
//     });
// }

// // Start with the first text node
// showTextNode(0);