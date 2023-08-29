var btn = document.querySelector('button');
var card = document.querySelector('#card');
var atk = document.querySelector('#atk');
var def = document.querySelector('#def');
var effect = document.querySelector('#effect');
var type = document.querySelector('#type');
var level = document.querySelector('#level');
var playrate = document.querySelector('#playrate');

document.querySelector('button').addEventListener('click', async() => {
    var request = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name="+document.getElementById("searcher").value;
    console.log(request);
    var fetchResult = await fetch(request.toString());
    var jsonResult = await fetchResult.json(); 
    console.log(jsonResult);
    card.src = jsonResult.data[0].card_images[0].image_url;
    atk.innerHTML = "ATK: " + jsonResult.data[0].atk;
    def.innerHTML = "DEF: " + jsonResult.data[0].def;
    effect.innerHTML = "Effect: " + jsonResult.data[0].desc;
    type.innerHTML = "Type: " + jsonResult.data[0].type;
    level.innerHTML = "Level: " + jsonResult.data[0].level;
    playrate.innerHTML = "Play Rate: " + jsonResult.data[0].card_prices[0].cardmarket_price;
});