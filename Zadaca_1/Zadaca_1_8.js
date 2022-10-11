function obrni(a){
    var temp = []
    temp = a.reverse()

    return temp;
}

var arr = [1, 2, 3, 4, 5]
console.log("Trenutni array:", arr)
console.log("Obrnuti array:", obrni(arr))