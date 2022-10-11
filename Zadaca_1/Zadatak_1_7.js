function visekratnici(a){
    var umnozak = [];
    var rez;
    if(a <= 1000 && a >= 0){
        for(var i = 0; i<a; i++){
            if(i%7 == 0 && i != 0) umnozak.push(i);
        };

        console.log("Visekratnici do unesenog broja:", umnozak)

        rez = umnozak[0];
        var j = 1;
        while(j < umnozak.length){
            rez = rez * umnozak[j];
            j = j + 1;
        }
    }
    else console.log("Broj nije unutar skupa [0,1000]");

    console.log("Umnozak svih visekratnika broja 7 do unesenog broja je: ", rez);
}

var x = 23;
visekratnici(x);

var y = 30;
visekratnici(y);