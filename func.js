function Binary(number){

    let Intpart = Math.floor(number);
    let float_part = number - Intpart ;
    let rem = [] ;
    let index = 0;
    let text = '';
    let rest = [] ;
    let r = "";
 
    if ( number == 0) {
        document.getElementById("binary").innerHTML = "0000";
    }

    else{

        while(Intpart != 0){

            rem[index] = Intpart % 2 ;
            index++ ;
            Intpart /= 2 ;
            Intpart = Math.floor(Intpart) ;
        }

        text = (rem.reverse()).join("");

        if (float_part != 0) {
            for(var i = 0 ; i < 4 ; i++){
                float_part *= 2 ;

                if( Math.floor(float_part) < 2)
                    rest[i] = Math.floor(float_part);
            }
            console.log(...rest);
            r = "," +  rest.join(""); 
        }

        document.getElementById("binary").innerHTML = text + r ;
    }
}

function Octal(number){
    
    let Intpart = Math.floor(number);
    let float_part = number - Intpart ;
    let rem = [] ;
    let index = 0;
    let text = '';
    let rest = [] ;
    let r = "";
 
    if ( number == 0) {
        document.getElementById("octal").innerHTML = "0000";
    }

    else{

        while(Intpart != 0){

            rem[index] = Intpart % 8 ;
            index++ ;
            Intpart /= 8 ;
            Intpart = Math.floor(Intpart) ;
        }

        text = (rem.reverse()).join("");

        if (float_part != 0) {
            for(var i = 0 ; i < 4 ; i++){
                float_part *= 8 ;

                if( Math.floor(float_part) < 9)
                    rest[i] = Math.floor(float_part);
            }
            console.log(...rest);
            r = "," +  rest.join(""); 
        }

        document.getElementById("octal").innerHTML = text + r ;
    }
}

function Hexa(number){
    number = Math.floor(number);
    let index = 0 ;
    let rem = [];
    let text = "";

    const map = {
        10:"A" , 11:"B" , 12:"C" , 13:"D" , 14:"E" , 15:"F" 
    };

    if( number == 0){
        document.getElementById("hexa").innerHTML = "0000";
    }

    else{

        while ( number != 0) {

            rem[index] = number % 16 ;
            index++ ;
            number /= 16;
            number = Math.floor(number);
        }

        console.log(...rem);

        for ( i = 0  ; i < index  ;i++) {
            
            rem[i] = map[rem[i]]?? rem[i] ;
        }

        console.log(...rem);

        text = (rem.reverse()).join("");

        document.getElementById("hexa").innerHTML = text;
    }
}

document.getElementById("submit").onclick = () => {

    let decimal_number = document.getElementById("number").value ;

    decimal_number = Number(decimal_number);

    Binary(decimal_number);
    Octal(decimal_number);
    Hexa(decimal_number);
}