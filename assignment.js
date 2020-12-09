'use strict'

const readline = require('readline')

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
       read.question('Feet:  ', (feet) => {
           console.log(`Mile: ${feetToMile(feet)}`)
           resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
       read.question('Chair, Table, Bed:  ', (furnitures) => {
           console.log(`Required woods: ${woodCalculator(furnitures)}`)
           resolve()
        })
    })
}

const question3 = () => {
    return new Promise((resolve,reject)=>{
        read.question("Floors:  ",(floors)=>{
            console.log(`Required Bricks: ${brickCalculator(floors)}`)
            resolve()
        })
    })
}

const question4 = () => {
    return new Promise((resolve,reject)=>{
        read.question("Friends:  ",(friends)=>{
            console.log(`Tiny friend: ${tinyFriend(friends)}`)
            resolve()
        })
    })
}

function feetToMile(feet){
    if(feet<0){
        return "Invalid Input !!"
    }
    return parseInt(feet)/5280;
}

function woodCalculator(furnitures){
    let sum=0, k=1;
    furnitures = furnitures.split(',');
    for(let i=0; i<3; i++){
        if(furnitures[i]<0){
            return "Invalid Input"
        }
        sum+=(parseInt(furnitures[i])*k);
        k+=2;
    }
    return sum;
}

function brickCalculator(floor){
    if(floor<11){
        return floor*15*1000;
    }
    else if(floor<21 && floor>=11){
        let floor_up10 = floor-10;
        let floor_below10 = floor-floor_up10;

        return floor_below10*15*1000+floor_up10*12*1000;
    }
    else{
        let floor_up20 = floor-20;
        let floor_up10 = floor-10-floor_up20;
        let floor_below10 = floor-(floor_up20+floor_up10);

        return floor_below10*15*1000+floor_up10*12*1000+floor_up20*10*1000;
    }
}

function tinyFriend(friends){
    let min=10000000007;
    let res='';
    friends = friends.split(',');
    for(let i=0; i<friends.length; i++){
        if(friends[i].length==0){
            return "Invalid Name !!"
        }
        if(friends[i].length<min){
            res=friends[i];
            min=friends[i].length;
        }
    }
    return res;
}

const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  read.close()
}

main()