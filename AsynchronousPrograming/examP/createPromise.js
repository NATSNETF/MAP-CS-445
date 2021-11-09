const makeMePizza = function () {
    return new Promise(function (resolve, reject) {
        if ("everythingWorks") {
            resolve("Here is your pizza!"); // then() will be called
        } else {
            reject("Sorry no more cheese!"); // catch() will be called
        }
    })
}
makeMePizza()
    .then(data => console.log(data))
    .catch(err => console.error(err))
    console.log('Finish my homework');