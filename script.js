$(function(){
    let x = 0;
    let y = 0;
    let score = 0;
    let hasFood = false;
    food();
    $(document).keydown(function(e){
        if(e.keyCode == 38){
            if( y == 0){
                y = 450;
            }else{
                y = y - 50;
            }
            $("#a").css({
            "top": y  + "px"
            });
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
        }
        if(isEat()){
            console.log("****");
            hasFood = false;
            score++
            $("#score").html(score);
            food();
        }
    });
    function food(){
        if (!hasFood){
            ranFood();
            hasFood = true;
            setFood();
        }
    }
    function ranFood(){
        do{
            f_x = Math.floor(Math.random() * 450);
            f_y = Math.floor(Math.random() * 450);
            if(f_x % 50 == 0 && f_y % 50 == 0){
                break
            }
        }while(true);
        console.log(`food X: ${f_x} food Y: ${f_y}`);
    }
    function setFood(){
        $("#food").css({
            "left": f_x + "px",
            "top": f_y + "px"
        });
    }
    function isEat(){
        console.log(`x: ${x} y: ${y} f_x: ${f_x} f_y: ${f_y}`);
        if (x == f_x && y == f_y){
            return true;
        }else {
            return false;
        }
    }
});