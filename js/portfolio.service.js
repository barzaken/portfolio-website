'use strict'

const gProjs = [
    {
        id: "pacman",
        name: "Pacman",
        title: "Web Game",
        desc: "The Original Pacman game", 
        url: "https://barzaken.github.io/Pacman-project/",

    },
    {
        id: "mine-sweeper",
        name: "Mine Sweeper",
        title: "Web Game",
        desc: `Mine Sweeper with extra features<br><ul class="app-features"><li>Undo</li><li>Safe Click (reveals a safe cell)</li><li>Mega hint (reveals selected area)</li><li>Mine Exterminator (removes 3 bombs from board)</li><li>7 Boom (Game Mode)</li> </ul> `, 
        url: "https://barzaken.github.io/mine-sweeper-img/",

    },
    {
        id: "password-generator",
        name: "Password Generator",
        title: "Web App",
        desc: `Generates random & strong Password.<br> You can generate passwors with : <ul class="app-features"><li>Lowercase letters</li><li>Uppercase letters</li><li>Numbers</li><li>Special Symbols</li> </ul> `, 
        url: "https://barzaken.github.io/Password-Generator/",
     
    }
]

function getProjs(){
    return gProjs
}