//////////////////////////////////////////////////
// HANDLING THE LOADING OF MODELS FROM echoAR   //
// CHANGING THE TEXT OF GREETING                //
// HACKNAGPUR - 2020                            //
//////////////////////////////////////////////////

//echoAR

const apiKey = "bold-meadow-3711";

let holograms = {};
let hologramNames = [];

fetch("https://console.echoar.xyz//query?key=" + apiKey).then(res => res.json()).then((out) => {
    console.log(out);
    for (key in out['db']) {
        if ('Balloon.glb' == out['db'][key]['hologram']['filename']) {
            const storageID = out['db'][key]['hologram']['storageID'];
            const modelFileLink = "https://console.echoar.xyz//query?key=" + apiKey + "&file=" + storageID;
            
            for(var i=0;i<20;i++)
            {
                var tempEntity = document.createElement("a-entity");
                tempEntity.setAttribute("gltf-model", modelFileLink);
                var randomX = (Math.floor(Math.random()*9)-4).toString();
                var randomY = (Math.floor(Math.random()*3)).toString();
                var randomZ = (Math.floor(Math.random()*9)-4).toString();
                tempEntity.setAttribute("position",randomX + " " + randomY + " " + randomZ);
                console.log(randomX + " " + randomY + " " + randomZ);
                
                // Adding animation for balloons
                var anim = document.createElement('a-animation');
                anim.setAttribute('attribute','position')
                anim.setAttribute('to',randomX + " " + randomY+10 + " "+ randomZ)
                anim.setAttribute('dur','30000')
                tempEntity.appendChild(anim);                
                document.querySelector('a-scene').appendChild(tempEntity);
            }
        }
    }
}).catch(err => {
    if (apiKey !== "") {
        alert('Invalid key!');
        throw err;
    }
});

//CHANGING THE TEXT OF GREETING
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const str = urlParams.get('id');

var text = document.createElement("a-text");
text.setAttribute('value','Happy New Year \n'+ str);
text.setAttribute('position','0 2 -4');
text.setAttribute('scale','2 2 2');
text.setAttribute('font','https://cdn.aframe.io/fonts/Exo2Bold.fnt')
text.setAttribute('align','center')
text.setAttribute('look-at','[camera]')

document.querySelector('a-scene').appendChild(text);