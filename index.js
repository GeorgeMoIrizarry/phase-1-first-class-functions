function receivesAFunction (back) {
    back(1, 2)
}
receivesAFunction(call)
function call (a, b) {
    return a + b
}
function returnsANamedFunction () {
    return function odd () {
        console.log("Odd1sOut!")
    }
}
function returnsAnAnonymousFunction () {
    return function () {
        console.log("Hello!")
    }
}