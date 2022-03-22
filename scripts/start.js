function start() {
    function getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        let pos_x = Math.ceil(x/SIZE);
        let pos_y = Math.ceil(y/SIZE);

        c[Math.max(pos_x - 1, 0)][Math.max(pos_y - 1, 0)] = 1;
        draw(c)        
    }
  
    let canvasElem = document.querySelector("canvas");
      
    canvasElem.addEventListener("mousemove", function(e)
    {
        if (isFirst && isDraw){
           getMousePosition(canvasElem, e);
        }
    });

    canvasElem.addEventListener("mouseup", function(e)
    {
        isDraw = false;
    });

    canvasElem.addEventListener("mousedown", function(e)
    {
        isDraw = true;
        if (isFirst && isDraw){
            getMousePosition(canvasElem, e);
        }
    });

    canvasElem.addEventListener('touchstart', function(e) {
        if (isFirst){
            getMousePosition(canvasElem, e);
        }
    });


    var c = zeros(WIDTH, HEIGHT, 0);

    return c;
}


let zeros = (w, h, v = 0) => Array.from(new Array(h), _ => Array(w).fill(v));