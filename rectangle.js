let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
// c.fillStyle = "#734a6d";
// c.fillRect(100, 100, 100, 100);

// // line 
// c.beginPath();
// c.moveTo(500, 400);
// c.lineTo(200, 400);
// c.lineTo(560, 340);
// c.strokeStyle = "#345a8c";
// c.stroke();

// //arc/circle
// for (let i = 0; i < 50; i++) {
//     let x = Math.random() * window.innerHeight;
//     let y = Math.random() * window.innerWidth;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.strokeStyle='blue';
//     c.stroke();

// }

// c.beginPath();
// c.arc(200,200,30,0,Math.PI*2,false);
// c.strokeStyle='blue';
// c.stroke();



//animate the circles- for eg: bounce them on the edge.
//for that, we have to create a function.

function circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'red';
        c.stroke();
    }
    this.update = function update() {

        this.x += this.dx; //200+dx+dx hora hai, basically circle is moving at the speed of dx pixel each.
        // bounce back krne ke liye we need our velocity to be negative.
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { // ekn right side ki condition hai, ek left side ki.
            this.dx = -this.dx;
        }
        this.y += this.dy;
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.draw();

    }


}
let circlearray = [];

for (let i = 0; i < 50; i++) {
    let x = Math.random() * innerWidth;
    let dx = (Math.random() - 0.5) * 10;
    let radius = 60;
    let y = (Math.random() * innerHeight);
    let dy = (Math.random() - 0.5) * 10;

    circlearray.push(new circle(x,y,radius,dx,dy));

}
function animatecircle() {
    requestAnimationFrame(animatecircle);
    // console.log('ji');
    c.clearRect(0, 0, innerWidth, innerHeight); // clears everytime, we cant to draw on top of it.
    for(let i=0;i<circlearray.length;i++){
        circlearray[i].update();
        
    }
}
animatecircle()