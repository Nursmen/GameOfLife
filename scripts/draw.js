function draw(c) {

    // c = cells
    // draw the plane with life blocks
    for (let i = 0; i < WIDTH; i++){
        for (let j = 0; j < HEIGHT; j++){
            ctx.fillStyle = COLOR0;            
            if (i < c.length && j < c.length){
                if (c[i][j] == '1'){
                    ctx.fillStyle = COLOR1;
                }
            }

            
            ctx.fillRect((SIZE * i), (SIZE * j), SIZE, SIZE);
        }
    }
    grid();
    
    c = check(c);
    return c
}


function grid() {
    for (let i = 0; i < WIDTH; i++){
        for (let j = 0; j < HEIGHT; j++){
            ctx.fillStyle = COLOR3;            
            
            ctx.fillRect((SIZE * i), j, 1.2, 1.2);
            ctx.fillRect(i, SIZE*j, 1.2, 1.2);
        }

    }
}