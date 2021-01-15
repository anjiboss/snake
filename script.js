$(function(){
    let x = 0;
    let y = 0;
    $(document).keydown(function(e){
        console.log(e.keyCode);
        if(e.keyCode == 38){
            if( y == 0){
                y = 450;
            }else{
                y = y - 50;
            }
            $("#a").css({
            "top": y  + "px"
            });
            console.log(`x: ${x} y: ${y}`);
        }
        if(e.keyCode==37){
            if( x == 0){
                x = 450;
            }else{
                x = x - 50;
            }
            $("#a").css({
            "left": x + "px"
            });
            console.log(`x: ${x} y: ${y}`);  
        }
        if(e.keyCode==39){
    
            if( x == 450){
                x = 0;
            }else{
                x = x + 50;
            }
            $("#a").css({
            "left": x + "px"
            });
            console.log(`x: ${x} y: ${y}`);
        }
        if(e.keyCode==40){
            if( y == 450){
                y = 0;
            }else{
                y = y + 50;
            }
            $("#a").css({
            "top": y  + "px"
            });
            console.log(`x: ${x} y: ${y}`);

        }

    });
});
// function ran_food(){
//     f_x = 
// }
