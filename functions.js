import {adjectives} from './adjectives.js';
import {gerundVerbs} from './verbs.js'

function changeText(){
    var htmlDiv = document.getElementById("toSet");
    
    var s1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    var s2 = gerundVerbs[Math.floor(Math.random() * gerundVerbs.length)];

    htmlDiv.innerHTML = s1[0].toUpperCase() + s1.substring(1) + " " + s2[0].toUpperCase() + s2.substring(1);
}

var botao = document.getElementById("toSet");
botao.addEventListener("click", changeText);
