var monday, tuesday, wednesday, thursday, friday;

function runFiveMiles() {
  console.log('Go for a five-mile run');
  return "Go for a five-mile run"
}
function liftWeights() {
  console.log('Pump iron');
  return "Pump iron"
}
function swimFortyLaps() {
  console.log('Swim 40 laps');
  return "Swim 40 laps"
}

function exerciseRoutine(postRunActivity) {
  var output = [runFiveMiles(), postRunActivity()];
  var output1 = output[0].toString
  var output2= output[1].toString
  return `${output[0]} ${output[1]}`
}

monday = thursday = function() {
   exerciseRoutine(liftWeights);
}

tuesday = friday = function() {
    exerciseRoutine(swimFortyLaps);
}

wednesday = function() {
    exerciseRoutine(runFiveMiles);
}

const functionsArray = [monday,tuesday,wednesday,thursday,friday]

function printRoutine() {
    for (var value of functionsArray) {
        console.log(value.name + ":")
        return value()
    }
}