//Re-write the following code using typeScript, try to be as explict as possible and add types to everything you can. when you are done.
//transpile the TS code to JS code and inspect the js code.
//how to convert ---tsc
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log('graduating ' + this.dept + " in " + year);
    };
    return University;
}());
var miu = new University("MIU", "MSD");
miu.graduation(2021);
