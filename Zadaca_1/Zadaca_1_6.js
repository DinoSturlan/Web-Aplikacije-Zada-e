function velika(b){
    return b.split(' ')
    .map(a => a.trim())
    .map(a => a[0].toUpperCase() + a.substring(1))
    .join("")
}

var str = "ovo je string"
console.log(velika(str))