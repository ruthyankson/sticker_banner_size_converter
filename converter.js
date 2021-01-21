var size_type = "sticker";
var conversion_type = "feet";

function convert() {
    const for_sticker = 1.3;
    const for_banner = 1.6;
    const for_inch = 144;

    var _size = document.getElementById("size").value;
    var _quantity = document.getElementById("quantity").value;
    var result;
    var measurement_unit = " " + conversion_type;

    if(size_type == "sticker") {
        if(conversion_type == "feet") {
            result = _size * for_sticker * _quantity;
        }
        else if(conversion_type == "inch") {
            result = _size / for_inch * for_sticker * _quantity;
        }
    }
    else if(size_type == "banner") {
        if(conversion_type == "feet") {
            result = _size * for_banner * _quantity;
        }
        else if(conversion_type == "inch") {
            result = _size / for_inch * for_banner * _quantity;
        }        
    }
    

    result = Math.round((result + Number.EPSILON) * 100) / 100;
    result = result.toFixed(2);
    
    document.getElementById("output_one").innerHTML = result + measurement_unit;
}

function sizeType(a) {
    if(a == 1) {
        size_type = "sticker";
        document.getElementById("banner").style.backgroundColor = "#ffffff";
        document.getElementById("sticker").style.backgroundColor = "#030342";
        document.getElementById("sticker").style.color = "#ffffff";
        document.getElementById("banner").style.color = "#040442";
    }
    else {
        size_type = "banner";
        document.getElementById("sticker").style.backgroundColor = "#ffffff";
        document.getElementById("banner").style.backgroundColor = "#030342";
        document.getElementById("banner").style.color = "#ffffff";
        document.getElementById("sticker").style.color = "#040442";
    }
   
    return size_type;
}

function conversionType(b) {
    if(b == 1) {
        conversion_type = "feet";
        document.getElementById("inch").style.backgroundColor = "#ffffff";
        document.getElementById("feet").style.backgroundColor = "#f0bd60";
    }
    else {
        conversion_type = "inch";
        document.getElementById("feet").style.backgroundColor = "#ffffff";
        document.getElementById("inch").style.backgroundColor = "#f0bd60";
    }
   
    return conversion_type;
}

// if (size_type.style.display === "none") {
//     size_type.style.display = "block";
// } else {
//     size_type.style.display = "none";
// }