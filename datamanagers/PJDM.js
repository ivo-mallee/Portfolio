var selector =0;
function test(p1) 
{
    selector = selector+1;
    
    switch(selector%3) {
        
        
        case 0:
            PC();
        break;
        case 1:
            boat();
        break;
        case 2:
            arduinoconsole();
        break;
        case 3:
            banana(); 
        break;
        case 4:
            // code block
        break;
        case 5:
            // code block
        break; 
    }




}

function PC() 
{
    var withBreaks = "<br>Status:Paused <br> this is a small 8-bit 6502 based computer. based on ben eaters 6502 build. <br>its currently paused because im waiting on blank pcbs to arrive to allow for a more compact design <br>the goal is to eventually connect a video adapter to it in the form of an fpga and get a nice pcb made for it.<br>";
    document.getElementById("imgtext1").innerHTML = "6502 COMPUTER";
    document.getElementById("img1").setAttribute("src","IMAGES/6502PC.jpg");
    document.getElementById("imgdesc1").innerHTML = withBreaks;

    
} 

function boat() 
{
    var withBreaks = "<br>Status:ended <br>";
    var desc = "This is a small arduino based boat. that runs on an arduino nano and that uses Ibus for the receiver. <br> The boat was very slow but still fun to drive. The ducks didn't seem to be a fan though and attacked the boat causing it to sink.<br> all the electronics were saved though."
    document.getElementById("imgtext1").innerHTML = "arduino based boat";
    document.getElementById("img1").setAttribute("src","IMAGES/boat.jpg");
    document.getElementById("imgdesc1").innerHTML = withBreaks +desc;
}
    
function arduinoconsole() 
{
    var withBreaks = "<br>Status:onHold <br>";
    var desc = "This small board has an arduino nano on it and a small oled display.It uses a potentiometer and 2 microswitches for control. <br> Currently the only available game is space invaders.however i'm eventually planning on making tetris for it";
    document.getElementById("imgtext1").innerHTML = "arduino based mini console";
    document.getElementById("img1").setAttribute("src","IMAGES/spaceinvaders.gif");
    document.getElementById("imgdesc1").innerHTML = withBreaks +desc;


}


