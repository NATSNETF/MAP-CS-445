function isPrime(x) {
    return new Promise((resolve, reject) => {
        let isprime = true;
        for (let i = 0; i < x; i++) {
            if (x % i === 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) {
            resolve("true")
        } else {

            resolve("false")
        }
    });
}
isPrime(8).then(message => (console.log(message)))