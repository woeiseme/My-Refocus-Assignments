// part 1..

// >=96%   Normal Reading
// 95%      Acceptable to continue home monitoring
// 93-94%   Seek advice from health professionals
// <=92     See urgent medical advice

var oxygenSat = 94


function isOxygenLvlNormal(oxygenSat){
    if ( oxygenSat >= 96 ) {
        console.log("Normal reading.");
    } else if (oxygenSat == 95) {
        console.log("Acceptable to continue home monitoring.");
    } else if ((oxygenSat >= 93) && (oxygenSat < 95)) {
        console.log("Seek advice from health professionals.");
    } else if (oxygenSat <= 92) {
        console.log("Seek urgent medical advice");
    } else {
        console.log ("The value of the oxygenSat variable is not numerical");
    }


}

isOxygenLvlNormal(oxygenSat);




// part 2..

var beatsPerMinute = 100

function isPulseRateNormal(beatsPerMinute){
    if ( ( beatsPerMinute >= 40 ) && ( beatsPerMinute <= 100) ) {
        console.log("Normal Reading")
    } else if ( ( beatsPerMinute >= 101 ) && ( beatsPerMinute < 109) ){
        console.log("Acceptable to continue home monitoring");
    } else if ( ( beatsPerMinute >= 110 ) && ( beatsPerMinute < 130 ) ) {
        console.log("Seek advice from health professionals.");
    } else if ( beatsPerMinute >= 131 ) {
        console.log("Seek urgent medical advice");
    }
}

isPulseRateNormal(beatsPerMinute);