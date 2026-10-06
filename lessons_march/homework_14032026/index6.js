function knightVsBishop(knightPosition, bishopPosition) {
    // Three possible outputs are "Knight", "Bishop", and "None";
    if (knightPosition == null || bishopPosition == null) {
        return "None"
    }

    let [x1, y1] = knightPosition; //координаты коня(ходит буквой г)
    let [x2, y2] = bishopPosition; //координаты слона
    const alphabet = "ABCDEFGH";
    let k1 //буквы в цифрах для коня

    //цикл для превращения букв в цифры для коня
    for (let i = 0; i <= alphabet.length; i++) {
        if (alphabet[i] === y1) {
            k1 = i + 1;
            //console.log(k1)
            break
        }
    }

    //разброс ходов для коня
    let movesKnight = [
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1]
    ]

    let positionKnight = []; //новая позиция коня
    let newX1; //новое расположение коня по цифре на доске
    let newK1; //новое расположение коня по букве на доске

    //через цикл перебираем где будет стоять конь после хода
    movesKnight.forEach(move => {
        newX1 = x1 + move[0];
        newK1 = k1 + move[1];
        if ((newX1 > 0)&&(newX1 < 9)&&(newK1 > 0)&&(newK1 < 9)) {
        positionKnight.push([newX1, newK1])
       // console.log("posKnight",positionKnight);
        return positionKnight
    }
    })

    //разброс ходов для слона
    let movesBishop = [
        [-7, -7],
        [-6, -6],
        [-5, -5],
        [-4, -4],
        [-3, -3],
        [-2, -2],
        [-1, -1],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
        [7, 7],
        [7, -7],
        [6, -6],
        [5, -5],
        [4, -4],
        [3, -3],
        [2, -2],
        [1, -1],
        [-1, 1],
        [-2, 2],
        [-3, 3],
        [-4, 4],
        [-5, 5],
        [-6, 6],
        [-7, 7]

    ]

    let b2 //буквы в цифрах для слона

    //цикл для превращения букв в цифры для слона
    for (let i = 0; i <= alphabet.length; i++) {
        if (alphabet[i] === y2) {
            b2 = i + 1;
            //console.log(b2)
            break
        }
    }

    let positionBishop = []; //новая позиция слона
    let newX2; //новое расположение слона по цифре на доске
    let newB2; //новое расположение слона по букве на доске

    //через цикл перебираем где будет стоять конь после хода
    movesBishop.forEach(move => {
        newX2 = x2 + move[0];
        newB2 = b2 + move[1];
        if ((newX2 > 0)&&(newX2 < 9)&&(newB2 > 0)&&(newB2 < 9)) {
            positionBishop.push([newX2, newB2])
           // console.log("posBishop",positionBishop);
            return positionBishop
        }
    })
    //записываем атаку слон
    let knight = [x1, k1]
    let bishopAttack = false;

    //проверяем через цикл попадает ли ход слон на коня
    positionBishop.forEach(([bx, by]) => {
        if ((bx === knight[0]) && (by === knight[1])){
           bishopAttack = true;
        }
    })


    let bishop = [x2, b2];
    //записываем атаку коня
    let knightAttack = false;
    //проверяем через цикл попадает ли ход коня на слона
    positionKnight.forEach(([kx, ky]) => {
        if ((kx === bishop[0]) && (ky === bishop[1])){
            knightAttack = true;
        }
    })


    //вывод итога
    if (bishopAttack){
        console.log ("Bishop")
        return "Bishop"
    }else if (knightAttack) {
        console.log ("Knight")
        return "Knight"
    }else {
          console.log("None")
            return "None"
        }
}







// ///"Knight"
//  knightVsBishop([4, "C"], [6, "D"]);
// knightVsBishop([4, "C"], [5, "E"])
// knightVsBishop([1, "A"], [3, "B"])
// knightVsBishop([2, "H"], [4, "G"])
//
//  knightVsBishop([2, "G"], [6, "C"]); //"Bishop"
//  knightVsBishop([2, "F"], [7, "B"]); //"None"


knightVsBishop([1, "H"], [8, "A"]);
knightVsBishop([4, "E"], [7, "B"]);
knightVsBishop([5, "D"], [2, "A"]);
knightVsBishop([8, "H"], [1, "A"]);
knightVsBishop([2, "B"], [6, "F"]);
knightVsBishop([1, "A"], [3, "C"]);