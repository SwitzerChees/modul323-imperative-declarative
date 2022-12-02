/*
Wegbeschreibung:
Fahren Sie 100 Meter geradeaus.
Dann biegen Sie links ab.
Dann biegen Sie rechts ab.
Dann beim grossen Baum links abbiegen.
Dann noch 500 Meter geradeaus.
Sie haben Ihr Ziel erreicht.
*/
const imperative = "HOW TO DO IT";
const divImperative = document.getElementById("imperative");
const btnImperative = document.getElementById("btn-imperative");

let counter = 0;
btnImperative.addEventListener("click", () => {
    const div = `<div>${counter}: ${imperative}</div>`;
    divImperative.innerHTML += div;
    counter++;
});

/*
Wegbeschreibung:
Long: 47.3769
Lat: 8.5417
oder
Kappelstrasse 5, 8005 Zürich
oder
SELECT * FROM users WHERE Country='Switzerland';
*/
const declarative = "WHAT TO DO";
const divDeclarative = document.getElementById("declarative");
const btnDeclarative = document.getElementById("btn-declarative");

let elements = [];
const addElement = (elements) => {
    return [...elements, `<div>${elements.length}: ${declarative}</div>`];
}
const changeHTML = (tag, elements) => {
    tag.innerHTML = elements.join("");
}
btnDeclarative.addEventListener("click", () => {
    elements = addElement(elements);
    changeHTML(divDeclarative, elements);
});
