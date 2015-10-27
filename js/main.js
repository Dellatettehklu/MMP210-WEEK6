var myWinwidth;
var myWinheight;
function setup(){
    // create the canvas, put into a variable to associate with an element.
    var cnv = createCanvas(800,1000);
    cnv.parent("windows");

    // draw a window by calling the drawwindow function.
    //drawWindow(70,70);

   // drawWindow(220,70);

    //drawWindow(370,70);

    // setting my wdith and height for the window.
    myWinwidth = 100;
    myWinheight = 200;

    var colWidth = 180;
    var rowHeight = 260;
    var x =20;
    var y =20;

    for(var i = 0; i<12; i++){
         drawWindow(x,y);
         x += colWidth;

        if(x > width - myWinwidth){
            x =20;
            y+= rowHeight;
        }

    }


}

function drawWindow(startX, startY){
    fill('Cornsilk');
    rect(startX, startY,myWinwidth,myWinheight);

    // the line in the middle
    stroke('black');
    var x1, x2, y1,y2;
    x1=startX + myWinwidth/2;
    y1=startY;
    x2=startX + myWinwidth/2;
    y2=startY + myWinheight;
    line(x1,y1, x2,y2  );


    //first horizontal line of the window.
    x1=startX;
    y1=startY + myWinheight * 0.333;
    x2=startX + myWinwidth;
    y2=startY + myWinheight * 0.333;
    line(x1,y1, x2,y2  );

    // second horizontal line of the window.
    x1=startX;
    y1=startY + myWinheight * 0.666;
    x2=startX + myWinwidth;
    y2=startY + myWinheight * 0.666;
    line(x1,y1, x2,y2  );

    // bottom box of thw window.
    x1 = startX - 20;
    y1 = startY + myWinheight;
    fill('Gainsboro');
    rect(x1,y1,myWinwidth + 40,30);

    // top box of the window.
    x1 = startX - 20;
    y1 = startY -10;
    fill('Gainsboro');
    rect(x1,y1,myWinwidth + 40,20);



}
