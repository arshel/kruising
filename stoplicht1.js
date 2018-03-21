var werken;
var buitenwerking;
var stopAuto;
var stopAuto2;


var stoplicht = document.getElementById('stoplicht');
stoplicht.style.position = 'absolute';
stoplicht.style.left = '715px';
stoplicht.style.top = '510px';

var stoplicht2 = document.getElementById('stoplicht2');
stoplicht2.style.position = 'absolute';
stoplicht2.style.left = '510px';
stoplicht2.style.top = '320px';
stoplicht2.style.transform = 'rotate(180deg)'; // dit draait het plaatje van de stoplicht

var stoplicht3 = document.getElementById('stoplicht3');
stoplicht3.style.position = 'absolute';
stoplicht3.style.left = '490px';
stoplicht3.style.top = '510px';

var stoplicht4 = document.getElementById('stoplicht4');
stoplicht4.style.position = 'absolute';
stoplicht4.style.left = '720px';
stoplicht4.style.top = '340px';
stoplicht4.style.transform = 'rotate(180deg)';


var auto = document.getElementById('auto');
auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '800px';

var auto2 = document.getElementById('auto2');
auto2.style.position = 'absolute';
auto2.style.left = '550px';
auto2.style.top = '-80px';
var snelheid = 5;
var snelheid2 = 5;

var auto3 = document.getElementById('auto3');
auto3.style.position = 'absolute';
auto3.style.left = '-100px';
auto3.style.top = '440px';

var auto4 = document.getElementById('auto4');
auto4.style.position = 'absolute';
auto4.style.left = '1400px';
auto4.style.top = '370px';
var snelheid3 = 5;
var snelheid4 = 5;

function aanzetten() {
    clearTimeout(buitenwerking);
    maakrood(); //het begin van de stoplichten
    maakrood2();
    werken = setTimeout(maakgroen, 2000);
    werken = setTimeout(maakgroen2, 10000);
    werken = setTimeout(maakoranje, 6000);
    werken = setTimeout(maakoranje2, 14000);
    werken = setTimeout(maakrood, 8000);
    werken = setTimeout(aanzetten, 16000); //hier start de functie opnieuw

}


function knipperen() {
    clearTimeout(werken);
    maakoranje();
    maakoranje2();
    buitenwerking = setTimeout(zetuit, 300);
    buitenwerking = setTimeout(zetuit2, 300);
    buitenwerking = setTimeout(knipperen, 500);
}

function uitzetten() {
    zetuit();
    zetuit2();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
    clearTimeout(stoppen);


}

// var uitmaken;
// var stoppen = setTimeout(aanzetten, 30000);


function maakrood() {
    stoplicht.src = "stoplichtrood.png";
    stoplicht2.src = "stoplichtrood.png";
    stopAuto = true;  //zodat de auto stopt
}


function maakgroen() {
    stoplicht.src = "stoplichtgroen.png";
    stoplicht2.src = "stoplichtgroen.png";
    stopAuto = false;
}

function maakoranje() {
    stoplicht.src = "stoplichtgeel.png";
    stoplicht2.src = "stoplichtgeel.png";
stopAuto = false;

}

function zetuit() {
    stoplicht.src = "stoplichtuit.png";
    stoplicht2.src = "stoplichtuit.png";
    stopAuto=false;
}

// code van de stoplichten die op hun zij liggen

function maakrood2() {
    stoplicht3.src = "stoplichtrood3.png";
    stoplicht4.src = "stoplichtrood3.png";
    stopAuto2 = true;
}


function maakgroen2() {
    stoplicht3.src = "stoplichtgroen3.png";
    stoplicht4.src = "stoplichtgroen3.png";
    stopAuto2 = false;
}

function maakoranje2() {
    stoplicht3.src = "stoplichtgeel3.png";
    stoplicht4.src = "stoplichtgeel3.png";
    stopAuto2 = false;

}

function zetuit2() {
    stoplicht3.src = "stoplichtuit3.png";
    stoplicht4.src = "stoplichtuit3.png";
    stopAuto2 = false;
}


function starten() {
    auto.style.top = parseInt(auto.style.top) - snelheid + 'px';
     auto2.style.top = parseInt(auto2.style.top) + snelheid2 + 'px';
    auto3.style.left = parseInt(auto3.style.left) + snelheid3 + 'px';
    auto4.style.left = parseInt(auto4.style.left) - snelheid4 + 'px';

    rijden = setTimeout(starten, 10);
    if (auto.style.top === '-80px') { // dit zorgt ervoor dat de auto opnieuw start
        auto.style.top = '800px';
    }
    if (auto.style.top === '550px' && stopAuto === true) {
        snelheid = 0
    }
    else {
        snelheid = 5
    }

    if (auto2.style.left === '-80px') {
        auto2.style.top = '-80px';
    }
    if (auto2.style.top === '800px') {
        auto2.style.top = '-80px';
    }

    if (auto2.style.top === '250px' && stopAuto === true) {
        snelheid2 = 0;
    }
    else {
        snelheid2 = 5;
    }


    if (auto3.style.left === '1400px') {
        auto3.style.left = '-100px';
    }
    if (auto3.style.left === '400px' && stopAuto2 === true) {
        snelheid3 = 0;
    }
    else {
        snelheid3 = 5;
    }


    if (auto4.style.left === '-80px') {
        auto4.style.left = '1500px';
    }
    if (auto4.style.left === '780px' && stopAuto2 === true) {
        snelheid4 = 0;
    }
    else {
        snelheid4 = 5;
    }

}

function stop() {
    clearTimeout(rijden)
}

function opnieuw() { // de auto start dan op opnieuw op ze plek
    clearTimeout(rijden);
    auto.style.top = '800px';
    auto2.style.top = '-80px';
    auto3.style.left = '-100px';
    auto4.style.left = '1269px';
}