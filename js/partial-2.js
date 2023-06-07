// const divElm=document.createElement('div');
// let x=200;
// let y=200;
// let ySpeed=10;
// let xSpeed=10;
// divElm.style.width='50px';
// divElm.style.height='50px';
// divElm.style.backgroundColor='red';
// divElm.style.position='absolute';
// divElm.style.left=`${x}px`;
// divElm.style.top=`${y}px`;
// document.body.append(divElm);

// class particle{

// }

// setInterval(() => {
//     y +=ySpeed;
//     x +=xSpeed;
//     if(y>=innerHeight-50 || y<=0) ySpeed=-ySpeed;


//     if(x>=innerWidth-50 || x<=0 ) xSpeed=-xSpeed;


//     divElm.style.top=`${y}px`;
//     divElm.style.left=`${x}px`;
// }, 50);

class Particle {
    dx = (Math.random() * 10) * (Math.random() < 0.5 ? -1: 1);
    dy =  (Math.random() * 10) * (Math.random() < 0.5 ? -1: 1);
    width = 20 + (Math.random() * 25);
    height = this.width;
    x = Math.random() * (innerWidth - this.width);
    y = Math.random() * (innerHeight - this.height);
    elm;

    constructor(){
        this.elm = document.createElement('div');
        this.elm.style.position = 'absolute';
        this.elm.style.left = `${this.x}px`;
        this.elm.style.top = `${this.y}px`;
        this.elm.style.width = `${this.width}px`;
        this.elm.style.height = `${this.height}px`;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.elm.style.backgroundColor = `rgb(${r},${g},${b})`;
        this.elm.style.borderRadius = `${Math.random() * 100}%`;
        this.elm.style.transform = `rotate(${Math.random() * 361}deg)`;

        document.body.append(this.elm);
    }

    move(){
        this.y += this.dy;
        this.x += this.dx;         

        const r1 = divElm.offsetWidth / 2;
        const r2 = this.width / 2;
        const xDiff = this.x + r2 - divElm.offsetLeft;
        const yDiff = this.y + r2 - divElm.offsetTop;
        const hypot = Math.hypot(xDiff, yDiff);

        if (hypot <= (r1 + r2 + 5)){
            this.y -= this.dy;
            this.x -= this.dx;
            this.dy = -this.dy;
            this.dx = -this.dx;
            this.y += this.dy * 5;
            this.x += this.dx * 5;
        }        

        if (this.y >= (innerHeight - this.height) || this.y <= 0) this.dy = -this.dy;
        if (this.x >= (innerWidth - this.width) || this.x <= 0) this.dx = -this.dx;        

        this.elm.style.top = `${this.y}px`;
        this.elm.style.left = `${this.x}px`;               
    }
}

const particles = [];
for(let i = 0; i< 50; i++) particles.push(new Particle());

setInterval(()=> {
    particles.forEach(particle => particle.move());
},50);