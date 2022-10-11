function djeljiv(a){
    for (var i in a){
        if(a[i]%3 == 0) console.log(a[i]);
    }
}

var arr = [1, 2, 3, 4, 5, 6, 13, 15, 100, 300];
djeljiv(arr); 