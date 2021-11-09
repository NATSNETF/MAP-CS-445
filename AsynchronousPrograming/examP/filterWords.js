`Write a method filterWords() on the String object. It accepts an array of strings 
that specifies a list of banned words. The function returns the string after replacing 
all the banned words with three stars.`
String.prototype.filterWords = function (array) {
    let arr1 = this.split(" ");
     arr1.forEach((item,index,arr) => {
        if(array.includes(item)){
            arr[index] = "***"
        }
    });

    return arr1.join(" ");
}

console.log("This course is awesome !".filterWords(['course','awesome']));

//"This *** is ***!"