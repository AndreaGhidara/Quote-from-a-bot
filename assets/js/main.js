const characters = [
    {
        name: 'Ash',
        path: './assets/img/ash-ketchum.png'
    },
    {
        name: 'Batman',
        path: './assets/img/batman.png'
    },
    {
        name: 'Homer',
        path: './assets/img/homer-simpson.png',
    },
    {
        name: 'Hermione Granger',
        path: './assets/img/hermione-granger.png'
    },
    {
        name: 'Gandalf',
        path: './assets/img/gandalf.png'
    },
    {
        name: 'Harley Quinn',
        path: './assets/img/harley-quinn.png'
    },
    {
        name: 'Shrek',
        path: './assets/img/shrek.png'
    },
    {
        name: 'Barbie',
        path: './assets/img/barbie.png'
    },
    {
        name: 'minion',
        path: './assets/img/minion.png'
    },
]

// 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

const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-3.5-turbo";
const API_KEY = ""
const loader = document.querySelector(".loading")

async function playCharacter(nameCharacter) {
    loader.classList.remove("loadingHidden")
    const action = "Saluta nel tuo modo più iconico"
    const temperature = 0.7;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` 
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [
                {
                    role: "user",
                    content: `Sei ${nameCharacter} e ${action} con un massimo di 100 caratteri senza mai uscire dal tuo personaggio`
                }
            ],
            temperature: temperature
        })
    })

    const data = await response.json();

    console.log(data)
}

let charactersContainer = document.querySelector(".charactersCont")

characters.forEach(element => {
    const containerImg = document.createElement('div')
    containerImg.classList.add("iconFrame")
    const characterImg = document.createElement('img')
    characterImg.src = element.path
    characterImg.alt = element.name
    containerImg.append(characterImg)
    charactersContainer.appendChild(containerImg)
    
});

const allCharacters = document.querySelectorAll(".iconFrame img")

allCharacters.forEach(function(element) {
    element.addEventListener("click", function() {
        playCharacter(element.alt)
    })
})