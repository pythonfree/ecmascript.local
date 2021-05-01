let elements = [
    document.createElement('a'),
    document.createElement('a')
];

for (let i = 0; i <elements.length; i++) {
// for (let element of elements) {
    elements[i].onclick = function (evt) {
        evt.preventDefault();
        console.log(i);
    }
}

elements[0].click();
elements[1].click();