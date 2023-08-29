var btn = document.querySelector('button');
var card = document.querySelector('#card');
var atk = document.querySelector('#atk');
var def = document.querySelector('#def');
var effect = document.querySelector('#effect');
var type = document.querySelector('#type');
var level = document.querySelector('#level');
var playrate = document.querySelector('#playrate');
var price = document.querySelector('#price');
var raceIcon = document.querySelector('#raceIcon');
var elementIcon = document.querySelector('#elementIcon');

var race = document.querySelector('#race');
var element = document.querySelector('#element');

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
    price.innerHTML = "Price: " + jsonResult.data[0].card_prices[0].tcgplayer_price +"$";
    
    if(jsonResult.data[0].type.toString().includes("Monster")){
    raceIcon.src = "races/"+jsonResult.data[0].race+".png";
    elementIcon.src = "elements/"+jsonResult.data[0].attribute+".png";
    }
    else{
        level.display = "none";
        elementIcon.display = "none";
        element.display = "none";
        raceIcon.display = "none";
        race.display = "none";
    }
});