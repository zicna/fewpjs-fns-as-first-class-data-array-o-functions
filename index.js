function runFiveMiles() {
  console.log('Go for a five-mile run');
}
function liftWeights() {
  console.log('Pump iron');
}
function swimFortyLaps() {
  console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

const monday = function() {
  exerciseRoutine(liftWeights);
}

const tuesday = function() {
    exerciseRoutine(swimFortyLaps);
}

const wednesday = function() {
    exerciseRoutine(runFiveMiles);
}

const thursday = function() {
    exerciseRoutine(liftWeights);
}

const friday = function() {
    exerciseRoutine(swimFortyLaps);
}

const functionsArray = [monday,tuesday,wednesday,thursday,friday]

function printRoutine() {
    for (var value of functionsArray) {
        console.log(value.name + ":")
        value()
    }
}