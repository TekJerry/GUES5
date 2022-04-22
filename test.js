// LETS SAY ACTUAL WORD IS "BRIBE"
const actual = "BRIBE"
const wordsArr = ["CRAZY", "HAPPY", "SUPER", "APPLE", "SHARP", "BUNNY", "SNAKE", "CONDO", "BASES", "BROWN", "BUILD", "BRIBE"]
const guess = ["B","R","E","A","D"]
const feedback = [{ letter: 'B', color: 'Green'}, { letter: 'R', color: 'Green'}, { letter: 'E', color: 'Yellow'}, { letter: 'A', color: 'Gray'}, { letter: 'D', color: 'Gray'}]

function probs(words){
    const posOne = new Map()
    const posTwo = new Map()
    const posThree = new Map()
    const posFour = new Map()
    const posFive = new Map()
    
    for (let i=0; i< words.length; i++){
        for (let j=0; j < 5; j++){
            switch(j){
                case 0:
                    if(posOne.get(words[i].charAt(j))){
                        posOne.set(words[i].charAt(j), posOne.get(words[i].charAt(j)) + 1 )
                    } else {
                        posOne.set(words[i].charAt(j), 1)
                    }
                    break;
                case 1:
                    if(posTwo.get(words[i].charAt(j))){
                        posTwo.set(words[i].charAt(j), posTwo.get(words[i].charAt(j)) + 1 )
                    } else {
                        posTwo.set(words[i].charAt(j), 1)
                    }
                    break;
                case 2:
                    if(posThree.get(words[i].charAt(j))){
                        posThree.set(words[i].charAt(j), posThree.get(words[i].charAt(j)) + 1 )
                    } else {
                        posThree.set(words[i].charAt(j), 1)
                    }
                    break;
                case 3:
                    if(posFour.get(words[i].charAt(j))){
                        posFour.set(words[i].charAt(j), posFour.get(words[i].charAt(j)) + 1 )
                    } else {
                        posFour.set(words[i].charAt(j), 1)
                        }
                        break;
                case 4:
                    if(posFive.get(words[i].charAt(j))){
                        posFive.set(words[i].charAt(j), posFive.get(words[i].charAt(j)) + 1 )
                    } else {
                        posFive.set(words[i].charAt(j), 1)
                    }
            }
        }
    }

    const positionCounts= [{posOne}, {posTwo}, {posThree}, {posFour}, {posFive}]
    return positionCounts;
}

let subArr = []
let notGood = []
let someWhat = []
let closestArr = []

feedback.forEach((element) => {
    if (element.color === "Gray"){
    notGood.push(element.letter);
}
    if (element.color === "Yellow"){
    someWhat.push(element.letter)
}
})

console.log(someWhat)

function reduceArr(sub){
    let something = sub.filter(subb => !subb.includes(notGood[0]) && !subb.includes(notGood[1]) && !subb.includes(notGood[2]) && !subb.includes(notGood[3]))
    subArr.push(...something)
}



console.log(reduceArr(wordsArr))
console.log(subArr)


function closerArr(yel){
    let closer = yel.filter( yell => yell.includes(someWhat[0]))
    closestArr.push(...closer)
}

console.log(closerArr(subArr))
console.log(closestArr)
let save = probs(wordsArr)
let minus = probs(closestArr)
console.log(save)
console.log(minus)

let avg1 = []
let avg2 = []
let avg3 = []
let avg4 = []
let avg5 = []

console.log(minus[1].posTwo.keys())

function reassign(map1){
    if(map1[0].posOne){
        avg1.push(...map1[0].posOne.keys())
    }
    if(map1[1].posTwo){
        avg2.push(...map1[1].posTwo.keys())
    }
    if(map1[2].posThree){
        avg3.push(...map1[2].posThree.keys())
    }
    if(map1[3].posFour){
        avg4.push(...map1[3].posFour.keys())
    }
    if(map1[4].posFive){
        avg5.push(...map1[4].posFive.keys())
    }
}

console.log(reassign(minus))
console.log(avg1, avg2, avg3, avg4, avg5)

let together = []
let together2 = []
let together3 = []
let together4 = []
let together5 = []


function verify(map1){
   if (map1[0].posOne.has(avg1[0])){
    together.push(`${avg1[0]} has ${map1[0].posOne.get(avg1[0])} chances of coming out in Tile 1.`)
}
   if (map1[0].posOne.has(avg1[1])){
    together.push(`${avg1[1]} has ${map1[0].posOne.get(avg1[1])} chances of coming out in Tile 1.`)
}
   if (map1[0].posOne.has(avg1[2])){
    together.push(`${avg1[2]} has ${map1[0].posOne.get(avg1[2])} chances of coming out in Tile 1.`)
}
   if (map1[1].posTwo.has(avg2[0])){
    together2.push(`${avg2[0]} has ${map1[1].posTwo.get(avg2[0])} chances of coming out in Tile 2.`)
}
   if (map1[1].posTwo.has(avg2[1])){
    together2.push(`${avg2[1]} has ${map1[1].posTwo.get(avg2[1])} chances of coming out in Tile 2.`)
}
   if (map1[1].posTwo.has(avg2[2])){
    together2.push(`${avg2[2]} has ${map1[1].posTwo.get(avg2[2])} chances of coming out in Tile 2.`)
}
   if (map1[2].posThree.has(avg3[0])){
    together3.push(`${avg3[0]} has ${map1[2].posThree.get(avg3[0])} chances of coming out in Tile 3.`)
}
   if (map1[2].posThree.has(avg3[1])){
    together3.push(`${avg3[1]} has ${map1[2].posThree.get(avg3[1])} chances of coming out in Tile 3.`)
}
   if (map1[2].posThree.has(avg3[2])){
    together3.push(`${avg3[2]} has ${map1[2].posThree.get(avg3[2])} chances of coming out in Tile 3.`)
}
   if (map1[3].posFour.has(avg4[0])){
    together4.push(`${avg4[0]} has ${map1[3].posFour.get(avg4[0])} chances of coming out in Tile 4.`)
}
   if (map1[3].posFour.has(avg4[1])){
    together4.push(`${avg4[1]} has ${map1[3].posFour.get(avg4[1])} chances of coming out in Tile 4.`)
}
   if (map1[3].posFour.has(avg4[2])){
    together4.push(`${avg4[2]} has ${map1[3].posFour.get(avg4[2])} chances of coming out in Tile 4.`)
}
   if (map1[4].posFive.has(avg5[0])){
    together5.push(`${avg5[0]} has ${map1[4].posFive.get(avg5[0])} chances of coming out in Tile 5.`)
}
   if (map1[4].posFive.has(avg5[1])){
    together5.push(`${avg5[1]} has ${map1[4].posFive.get(avg5[1])} chances of coming out in Tile 5.`)
}
   if (map1[4].posFive.has(avg5[2])){
    together5.push(`${avg5[2]} has ${map1[4].posFive.get(avg5[2])} chances of coming out in Tile 5.`)
}
}

console.log(verify(save))
// 

function needHelp(){

console.log(together)
console.log(together2)
console.log(together3)
console.log(together4)
console.log(together5)
}

console.log(needHelp())



