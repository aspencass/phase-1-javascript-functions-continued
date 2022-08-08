// code your solution here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }


/*


function wrapAdjective() {
const wrapAdjective = 'You are ${style}${adjective}${style}!'
let emphatic = 'a hard worker'
    if (style='*' && adjective='emphatic') {
        return 'You are *a hard worker*!'
    } else {
        return 'You are |a dedicated programmer|!'
    }
}



function wrapAdjective(style='*') {
    let emphatic = 'a hard worker'
    return  `You are ${style}${emphatic}${style}!`
}


*/
