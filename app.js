var geodist = require('geodist')

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    d = d.toString().trim()
    var url = d
    var lat1 = "LATOFSTART"
    var long1 = "LONGOFSTART"
    
    //EXAMPLE URL https://www.google.com/maps/place/42.502932,-70.891475
    
    try {
        var lat2 = url.split(',')[0].replace("https://www.google.com/maps/place/", "")
        var long2 = url.split(',')[1]
    }

    catch(error) {
        console.log(error)
        return
    }
    
    try{
        var dist = geodist({lat: lat1, lon: long1}, {lat: lat2, lon: long2})
        console.log(dist + " mi")
    }
    catch(error) {
        console.log(error)
        return
    }

    
});