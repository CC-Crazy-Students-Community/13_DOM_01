/***** DOM und JavaScript I *******/

console.log(document);
// zeigt die gesamte Seitenstruktur an (document als /root)

console.log(document.body);
// zeigt die Struktur von <body></body> und der Kinder (h1,p) an

console.log(document.body.children);
// zeigt die Kinder (h1,p) von <body></body> als Array an

console.log(document.body.children[0]);
console.log(document.body.children[1]);
// zeigt das erste/zweite Element (h1) im Array an (Index 0)

console.log(document.body.children[0].innerHTML)
// zeigt den INHALT des <h1> - Elements an  --> "Headline"

document.body.children[0].innerHTML = "Boo";
console.log(document.body.children[0].innerHTML);
// ändert den INHALT des <h1> - Elements an  --> "boo"

document.body.children[1].innerHTML = "Neuer Text";
console.log(document.body.children[1].innerHTML);
// ändert den INHALT des <p> - Elements an  --> "Neuer Text";

/********************************************************/
/*******                Example 01                *******/
/********************************************************/
let tagArr = document.getElementsByTagName( "p" );
for ( let i = 0; i < tagArr.length; i ++ ) {
    tagArr[ i ].style.color = "red";
}
// ändert die Farbe der Schrift in allen <p> - Elements;