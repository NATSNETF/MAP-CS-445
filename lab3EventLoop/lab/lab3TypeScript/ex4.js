var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
//we add any b/c when we using (baseObject)
//baseObject is limited with u..if we extended we will have a problem
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
