// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

// let array = [4,5,7,5,4,8]
// function SumOfNumsOccuringOnce(array){
// return array.filter(i => array.filter(x => i === x).length === 1).reduce((a,b)=>a+b)
// }
// console.log(SumOfNumsOccuringOnce(array))



// function splitByValue(k, arr){
//     return [...arr.filter(x=>x<k),...arr.filter(x=>x>=k)]
// }

// console.log(splitByValue(5,[1, 3, 5, 7, 6, 4, 2]))

// let index = 0
//   const newElements = []
//   elements.forEach(element =>{
//     if(element < k){
//       newElements.splice(index, 0, element)
//       index++
//     }else{
//       newElements.push(element)
//     }
//   })
//   return newElements




var contest ={
    "name": "Example Contest",
    "salaryCap":50000,
    "rosterPositions":[{
        "name": "SG",
        "count": 1
    },{
        "name": "PG",
        "count": 1
    },{
        "name": "SF",
        "count": 1
    },{
        "name": "PF",
        "count": 1
    },{
        "name": "C",
        "count": 1
    },{
        "name": "G",
        "count": 1
    },{
        "name": "F",
        "count": 1
    },{
        "name": "UTIL",
        "count": 1
    }],
    "games":[
        {
            "gameId": 1,
            "awayTeam": "SA",
            "awayTeamId":24,
            "homeTeam":"GS",
            "homeTeamId":9,
            "gameTime":"1477449000000"

        },{

            "gameId": 2,
            "awayTeam": "Uta",
            "awayTeamId":26,
            "homeTeam":"Por",
            "homeTeamId":22,
            "gameTime":"14774472000000"
        }
    ]
}

var players = [
{
    "firstName": "player1FirstName",
    "lastName":"player1LastName",
    "playerId":277552,
    "salary":6250,
    "teamId":24
},{
    "firstName": "player2FirstName",
    "lastName":"player2LastName",
    "playerId":609818,
    "salary":6249,
    "teamId":22
},{
    "firstName": "player3FirstName",
    "lastName":"player3LastName",
    "playerId":840566,
    "salary":6248,
    "teamId":22
},{
    "firstName": "player4FirstName",
    "lastName":"player4LastName",
    "playerId":57934,
    "salary":6247,
    "teamId":26
},{
    "firstName": "player5FirstName",
    "lastName":"player5LastName",
    "playerId":168017,
    "salary":6246,
    "teamId":26
},{
    "firstName": "player6FirstName",
    "lastName":"player6LastName",
    "playerId":214156,
    "salary":6245,
    "teamId":26
},{
    "firstName": "player7FirstName",
    "lastName":"player7LastName",
    "playerId":513262,
    "salary":6244,
    "teamId":9
},{
    "firstName": "player8FirstName",
    "lastName":"player8LastName",
    "playerId":58213,
    "salary":6243,
    "teamId":9
},

]


var lineup =[
    {   
        "playerId": 277552,
        "rosterPositions":"PG"
    },
    {   
        "playerId": 609818,
        "rosterPositions":"SG"
    },
    {   
        "playerId": 840566,
        "rosterPositions":"SF"
    },
    {   
        "playerId": 57934,
        "rosterPositions":"C"
    },
    {   
        "playerId": 168017,
        "rosterPositions":"C"
    },
    {   
        "playerId": 214156,
        "rosterPositions":"F"
    },
    {   
        "playerId": 513262,
        "rosterPositions":"G"
    },
    {   
        "playerId": 58213,
        "rosterPositions":"UTIL"
    },
    {   
        "playerId": 58213,
        "rosterPositions":"UTIL"
    }        
]



// //All roster positions listed in the contest must be filled by the lineup
// function validatePositions(lineup, contest){
//     let reqPositions = []
//     let currentLineupPositions = []

//     for (var key in contest.rosterPositions) {
//       var obj = contest.rosterPositions[key].name;
//       reqPositions.push(obj)
//   }

//   lineup.forEach((x,i,array) => {
//    currentLineupPositions.push(x.rosterPositions); 
// });
// console.log(currentLineupPositions)
// console.log(reqPositions)

// return currentLineupPositions.every((position,i)=>reqPositions.includes(position)) + " : This lineup has the correct positions filled"
// }
// console.log(validatePositions(lineup,contest))


//the lineup cannot contain more than the required amount of players, in this case 8 players
function checkAmountOfPlayers(lineup,contest){
    
    for (var key in contest.rosterPositions) {
        var obj = contest.rosterPositions;
    }
    console.log(obj.length) //this equals 8
    console.log(lineup.length) // this also equals 8

    if(lineup.length === obj.length){
        return true + " : This lineup has the correct amount of players"
    }else{
        return false + ": This lineup does not have the correct amount of players"
    }
}

console.log(checkAmountOfPlayers(lineup,contest))




