function encode(){
    URLEncoder = {
        encode:function(property){

            if(Array.isArray(property)){
                var mas = [];
                for(var i=0; i<property.length; i++){
                    var result=percentEncoding(property[i]);
                    mas.push(result);
                }
                console.log(property);
                console.log(mas);
                return 0;
            }

            if(typeof property == 'object'){
                var mas1 = [];
                var mas2 = [];
                var answer="";
               for(var item in property){
                    var result1=percentEncoding(item);
                    var result2=percentEncoding(property[item]);
                   mas1.push(result1);
                   mas2.push(result2);

               }
                for(var i =0; i<mas1.length;i++){
                    answer += mas1[i] + "=" + mas2[i];
                    answer +="&";
                }
                answer = answer.substring(0, answer.length - 1);
                console.log(property);
                console.log(answer);
                return 0;

            }

            var result = percentEncoding(property);
            console.log(property);
            console.log(result);

        }
    }

  // URLEncoder.encode("###");

  // URLEncoder.encode([1, "test", "ტესტი"]);

  // URLEncoder.encode({ param0: 1, param1: "test", param2: "ტესტი" });

  //  URLEncoder.encode("dasdfdsafas#####################");



}

function decode() {

    URLEncoder = {
        decode: function (property) {
                if(property.indexOf('=') >0){
                    var convert = decodeURIComponent(property);
                    convert = convert.replace(/=/g, ':');
                    var split = convert.split('&');
                    var finalSplit = [];
                    var finalObject = {};
                    for(var i in split){
                        finalSplit[i] = split[i].split(':');
                        finalObject[finalSplit[i][0]] = finalSplit[i][1];
                    }
                    console.log(property);
                    console.log(finalObject);
                return 0;
                }

            if (Array.isArray(property)) {
                var mas = [];
                for (var i = 0; i < property.length; i++) {
                    var result = decodeURIComponent(property[i]);
                    mas.push(result);
                }
                console.log(property);
                console.log(mas);
                return 0;

            }

            var result = decodeURIComponent(property);
            console.log(property);
            console.log(result);

        }

    }


   // URLEncoder.decode("%23%23%23");

   // URLEncoder.decode(["%23%23", "%23%23"]);

   //  URLEncoder.decode("key=%23%23%23&key1=value1");

}


function converting(str){
        var unicode = str.charCodeAt(0);
        var binary = unicode.toString(2);
        var result;


    if(unicode >= 0 && unicode <= parseInt("007F",16) ){
        var zero = 7 - binary.length;
        var zeroquantity="";
        for(i=0; i<zero; i++){
            zeroquantity+="0";
        }
        binary ="0" + zeroquantity + binary;
        result = parseInt(binary,2);
        var latest=result.toString(16);
        return latest;


    }

    if(unicode >= parseInt("0080",16) && unicode <= parseInt("07FF",16) ){
        var zero = 11- binary.length;
        var zeroquantity="";
        for(i=0; i<zero; i++){
            zeroquantity+="0";
        }
        console.log(binary);
        binary = zeroquantity + binary;
        console.log(binary);
        var part1="";
        var part2="";
        for(var i =0 ; i<5; i++){
             part1 +=  binary[i];
        }
        console.log("This is part1 " + part1);
        var binary1 ="110" + part1;
        console.log("This is binary1 " +binary1);

        for(var i=5; i<11; i++){
            console.log(binary[i]);
            part2 += binary[i];
        }
        console.log("this is part2 " + part2);
        var binary2 = "10" + part2;
        console.log("this is binary2 " +binary2);

        binary=binary1 + binary2;
        result = parseInt(binary,2);
        var latest=result.toString(16);
        return latest;

    }
    if(unicode >=  parseInt("0800",16) && unicode <= parseInt("FFFF",16) ){
        var zero = 16 - binary.length;
        var zeroquantity="";
        for(var i=0; i<zero; i++){
            zeroquantity+="0";
        }
        binary=zeroquantity+binary;
        var part1="";
        var part2="";
        var part3="";
        for(var i=0; i<4; i++ ){
            part1+=binary[i];
        }
        for(i=4; i<10; i++){
            part2+=binary[i];
        }
        for(i=10; i<16; i++){
            part3+=binary[i];
        }
        var binary1="1110"+part1;
        var binary2="10"+part2;
        var binary3="10"+part3;
        binary=binary1+binary2+binary3;
        result = parseInt(binary,2);
        var latest=result.toString(16);

        return latest;



    }
    if(unicode >=  parseInt("10000",16) && unicode <= parseInt("1FFFFF",16) ){
        var zero = 21 - binary.length;
        var zeroquantity="";
        for(var i = 0; i <zero; i++){
            zeroquantity+="0";
        }
        binary=zeroquantity+binary;
        var part1="";
        var part2="";
        var part3="";
        var part4="";

        for(var i =0; i<3; i++){
            part1 +=binary[i];
        }
        for(i=3; i<9; i++){
            part2 +=binary[i];
        }
        for(i=9; i<16; i++){
            part3 +=binary[i];
        }

        for(i=16; i<21; i++){
            part4 +=binary[i];
        }
        var binary1="11110" + part1;
        var binary2="10" + part2;
        var binary3="10" + part3;
        var binary4="10" + part4;
        binary=binary1+binary2+binary3+binary4;
        result = parseInt(binary,2);
        var latest=result.toString(16);
        return latest;
    }
    if(unicode >=  parseInt("200000",16) && unicode <= parseInt("3FFFFFF",16) ){
     alert("არ გამოიყენებაო ძმანაშვილმა");
    }
    if(unicode > parseInt("4000000",16)  && unicode < parseInt("7FFFFFFF",16) ){
        alert("არ გამოიყენებაო ძმანაშვილმა");
    }



}

function percentEncoding(input){
    var answer="";
    var str = input.toString();
    for(var k=0; k<str.length; k++) {
        if(str.charCodeAt(k) <= 127 && str.charCodeAt(k) != 32 && str.charCodeAt(k) != 34 &&  str.charCodeAt(k) != 39 && str.charCodeAt(k) != 25 && str.charCodeAt(k) != 35) {
            answer += str.charAt(k);
            continue;
        }
        var latest = converting(str.charAt(k));
        var encodingstr = "";
        for (i in latest) {
            if (i % 2 == 0)
                encodingstr += "%";

            encodingstr += latest.charAt(i)
        }
        answer +=encodingstr;

    }

    return answer;
}








