// let str = "Wake Byron the poodle");
// let str = "Leash Byron the poodle");
// let str = "Walk to the park with Byron the poodle");
// let str = "Throw the frisbee for Byron the poodle");
// let str = "Walk home with Byron the poodle");
// let str = "Unleash Byron the poodle");

// wakeDog
// leashDog
// walkToPark
// throwFrisbee
// walkHome
// unleashDog

function wakeDog(dogName, dogBreed){
    let str = `Wake ${dogName} the ${dogBreed}`
    return str
}

// let wakeDog2 = (dogName, dogBreed) => let str = `Wake ${dogName} the ${dogBreed}`)
// wakeDog2("Brila", "poodle")

function leashDog(dogName, dogBreed) {
    let str = `Leash ${dogName} the ${dogBreed}`
    return str
}

function walkToPark(dogName, dogBreed) {
    let str = `Walk to the park with ${dogName} the ${dogBreed}`
    return str

}
function throwFrisbee(dogName, dogBreed) {
    let str = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return str

}
function walkHome(dogName, dogBreed) {
    let str = `Walk home with ${dogName} the ${dogBreed}`
    return str

}
function unleashDog(dogName, dogBreed) {
    let str = `Unleash ${dogName} the ${dogBreed}`
    return str

}

const routine = [
    wakeDog, 
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed){
    let newArray = []
    for(let i = 0; i < routine.length; i++){
        // let dog = routine[i]
        // let exercise = dog(dogName, dogBreed)
        // newArray.push(exercise)
        newArray.push(routine[i](dogName, dogBreed))
    }
    return newArray
}
// exerciseDog("Brila", "Ovcar")

