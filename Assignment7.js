function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
};
const myRectangle = new Rectangle(5, 10);
console.log("Area of the rectangle: " + myRectangle.calculateArea());
