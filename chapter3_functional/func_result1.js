function rectangle(width, height){
 
    const rectPerimeter = width *2 + height * 2;
    const rectArea = width * height;
    return {perimeter: rectPerimeter, area: rectArea};
}
 
const rectangleData = rectangle(20, 30);
console.log("Perimeter:", rectangleData.perimeter);  // 100 - периметр прямоугольника
console.log("Area:", rectangleData.area);  // 600 - площадь прямоугольника
