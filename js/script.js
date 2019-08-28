function ahoj (parametr) {
    alert ('programování ahoj' + parametr);
}

var aktualniCas= new Date ();
alert (aktualniCas.getDate());
var pokusu = 0
function ukazCas() {
    pokusu = pokusu + 1;
    let aktualniCas= new Date ();
    let hodin = 'hodin:' + aktualniCas.getHours();
    let minut = 'minut:' + aktualniCas.getMinutes();
    let vterin = 'vterin:' + aktualniCas.getSeconds();
    let spojenycas = hodin + '<br />' + minut + '<br />' + vterin;
    document.getElementById('hodiny').innerHTML = spojenycas;
    document.getElementById('pokuscislo').innerHTML = pokusu;
    document.getElementById('hodiny').classList.toggle('barevne');

}

