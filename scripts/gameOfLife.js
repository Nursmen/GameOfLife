function check(c) {
    let zeros = (w, h, v = 0) => Array.from(new Array(h), _ => Array(w).fill(v));
    let c_temp = zeros(c[0].length, c.length, 0);

    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < c[i].length; j++) {
            
            // console.log(i,j)
            // console.log(checkk(c, i, j))
            // console.log('----------------------');

            if (c[i][j] == 1 && checkk(c,i,j) < 2){
                c_temp[i][j] = 0;
            } 
            else if (c[i][j] == 1 && checkk(c,i,j) > 3) {
                c_temp[i][j] = 0;
            }
            else if (c[i][j] == 1 && checkk(c,i,j) == 3) {
                c_temp[i][j] = 1;
            }
            else if (c[i][j] == 1 && checkk(c,i,j) == 2) {
                c_temp[i][j] = 1;
            }
            else if (c[i][j] == 0 && checkk(c,i,j) == 3) {
                c_temp[i][j] = 1;
            }
            else {
                c_temp[i][j] = 0;
            }

        }
    }

    // console.log(c_temp)
    return c_temp
}

function checkk(c, i, j) {
    sthForI = [i-1, i, i+1];
    sthForJ = [j-1, j, j+1];
    sth = 0;

    for (let i_temp = 0; i_temp < sthForI.length; i_temp++){
        let ii = sthForI[i_temp];
        if (ii > (c.length - 1) || ii < 0) {
            continue;
        }

        for (let j_temp = 0; j_temp < sthForJ.length; j_temp++) {
            let jj = sthForJ[j_temp];
            if (jj > (c[ii].length - 1) || jj < 0) {
                continue;
            }

            if (ii == i && jj == j) {
                continue;
            }
            if (c[ii][jj] == 1) {
                sth++;
            }
        }
    }

    return sth
}