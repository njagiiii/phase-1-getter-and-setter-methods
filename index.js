// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }
    set diameter(value){
        this.radius = value / 2
    }

    get circumference(){
        return 2 * Math.pi * this.radius
    }
    set circumference(value){
        Math.pi = value;
    }
    get area(){
        return parseInt(Math.sqrt(Math.pi * this.radius ** 2));
    }
    set area(value){
        Math.pi = value;
    }
}
 const circle = new Circle(6)
 circle.circumference = 3.14;
 circle.area = 3.14
 console.log('The diameter is: ',circle.diameter)
 console.log('The circumference is: ',circle.circumference)
 console.log('The area is: ',circle.area)