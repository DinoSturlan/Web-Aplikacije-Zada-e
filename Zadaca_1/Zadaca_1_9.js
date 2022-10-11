function objekti(a, b){
    if (JSON.stringify(Object.keys(a)) === JSON.stringify(Object.keys(b))) return true;
    else return false;
}

var x = {
    ime: "ime1",
    prezime: "prezime1",
}

var y = {
    ime: "ime2",
    prezime: "prezime2",
}

var z = {
    ime: "ime3",
    nadimak: "nadimak1",
}

console.log("Objekti x i y: ", x, ",", y, "->", objekti(x,y))
console.log("Objekti y i z: ", y, ",", z, "->", objekti(y,z))
