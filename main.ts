//import { log } from "util";

const dataPole: Array<Array<Array<number>>> =
    [[[-8, 9], [0, -3]],
    [[0, -3], [-5, 6]],
    [[-5, 6], [-8, 9]],
    [[-3, 7], [-3, -8]],
    [[-3, -8], [-9, -2]],
    [[-9, -2], [-7, 6]],
    [[-7, 6], [-10, -4]],
    [[-10, -4], [3, -4]],
    [[3, -4], [-3, 7]],
    [[1, 0], [6, 7]],
    [[6, 7], [-9, 2]],
    [[-9, 2], [-8, 5]],
    [[-8, 5], [1, 0]],
    [[10, -6], [3, -10]],
    [[3, -10], [0, -4]],
    [[0, -4], [7, 1]],
    [[7, 1], [-8, 1]],
    [[-8, 1], [-3, 6]],
    [[-3, 6], [0, -3]],
    [[0, -3], [10, -6]],
    [[-10, 1], [-8, 7]],
    [[-8, 7], [8, -10]],
    [[8, -10], [4, 4]],
    [[4, 4], [-8, 10]],
    [[-8, 10], [-1, -8]],
    [[-1, -8], [-5, -2]],
    [[-5, -2], [-10, 1]]]

let pocatecniBodM: Array<number> = dataPole[0][0]
let pocetMnohouhelniku: number = 0;
let cesta: number[][][] = [];
let odpovidaBod: boolean = true;

for (let i: number = 0; i < dataPole.length; i++) {

    let pocatecniBodU: Array<number> = dataPole[i][0];
    if (!odpovidaBod) // pokud to uz neni prvni mnohouhelnik, nastavi se pocatecni bod mnohouhelniku na pocatecnibod nove usecky
    {
        pocatecniBodM = pocatecniBodU;
        odpovidaBod = true;
    }
    let koncovyBodU: Array<number> = dataPole[i][1];
    let usecka: Array<Array<number>> = [pocatecniBodU, koncovyBodU];

    cesta.push(usecka);//prida do cesty mnohouhelniku usecku
    //basic.showNumber(delkaUsecky);


    if (koncovyBodU[0] === pocatecniBodM[0] && koncovyBodU[1] === pocatecniBodM[1]) {
        pocetMnohouhelniku++;
        console.log("cesta:");
        for (let j: number = 0; j < cesta.length; j++) {
            console.log(cesta[j][0][0]);//radek, v radku prvni bod a v bodu prvni souradnici-x
            console.log(cesta[j][0][1]);//radek, v radku prvni bod a v bodu druhou souradnici-y
            console.log(cesta[j][1][0]);//radek, v radku druhy bod a v bodu prvni souradnici-x
            console.log(cesta[j][1][1]);//radek, v radku druhy bod a v bodu druhou souradnici-y
            console.log("--------");
        }
        cesta = [];
        odpovidaBod = false;
        //break; // ukončí cyklus
    }

}
console.log("Celkovy pocet mnohouhelniku je:");
console.log(pocetMnohouhelniku);
//basic.showNumber(obvodMnohouhelniku);
