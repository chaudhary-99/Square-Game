
const move = (event) =>{
    square1 = document.getElementById('square1');
    square2 = document.getElementById('square2');
    square1sub = document.getElementById('square1sub');
    square2sub = document.getElementById('square2sub');
    full = document.getElementById("full");
    // console.log(full);

    let rect = full.getBoundingClientRect();
    
    var x = event.clientX;
    var y = event.clientY;

    // console.log(`${rect.top + full.offsetHeight/2} and ${y}`);

    square1.style.top = `${(full.offsetHeight-square1.offsetHeight)/2}px`;
    square2.style.top = `${(full.offsetHeight-square1.offsetHeight)/2}px`;

    var coor = "X coords: " + x + ", Y coords: " + y;
    // console.log(coor);
    // document.getElementById("demo").innerHTML = coor;

    var left = square1.style.left;
    var top = square1.style.top;
    if(rect.x+ full.offsetWidth > left || (x<rect.x+ full.offsetWidth && x>rect.x)){
        // console.log("k");
        square1.style.left = `${x-60-rect.x}px`;
        square2.style.left = `${full.offsetWidth+rect.x-(x+37)}px`;
    }
    if(rect.y+ full.offsetHeight > top || (y<rect.y+ full.offsetHeight && y>rect.y)){
        // console.log(square1.offsetHeight);
        square1sub.style.height=`${((y-rect.y)*80)/(full.offsetHeight) + 10}px`;
        square1sub.style.width=`${((y-rect.y)*80)/(full.offsetHeight) + 10}px`;

        square2sub.style.height=`${((full.offsetHeight+rect.y-y)*80)/(full.offsetHeight) + 10}px`;
        square2sub.style.width=`${((full.offsetHeight+rect.y-y)*80)/(full.offsetHeight) + 10}px`;
    } 
}