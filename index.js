let name = "Ryan B."
let month = "10"
let day = "20"
let year = "2023"

document.writeln("Hello " + name + "! Today's date is " + month + " " + day  + " " + year );

var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);

xhr.send();

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
}

xhr.onload = function () {
    var myStuff = JSON.parse(xhr.responseText);
    console.log(myStuff);
}

