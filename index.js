// Your code here
function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity= "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adjective= "*") {
    return function(word= "special") {
        return `You are ${adjective}${word}${adjective}!`
    }
}

let Calculator = new Object()
Calculator.add = function(){
    return 1+3
}

Calculator.subtract = function(){
    return 1-3
}

Calculator.multiply = function(){
    return 1*3
}

Calculator.divide = function() {
    return 10/5
}