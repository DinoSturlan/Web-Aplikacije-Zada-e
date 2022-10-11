function skup(a){
    if(a<100 || a>150000) console.log("broj", a, "nije u skupu brojeva [100,150000]")
    else console.log("broj", a, "se nalazi u skupu brojeva [100,150000]")
}

var x = 30;
var y = 500;
var z = 160000;

skup(x);
skup(y);
skup(z);
