"use strict";
const DEFAULT_SHAPE_OPTIONS = {
    selector: '',
    width: "400",
    hight: "200",
    margin: 40,
    color: "black"
};
class Shape {
    constructor(options) {
        this.options = Object.assign(Object.assign({}, DEFAULT_SHAPE_OPTIONS), options);
        this.initShape(this.options.selector);
        this.initCanvas(this.options.id);
    }
    initShape(selector) {
        let root;
        //Что за accessKey ???
        if (this.options.selector) {
            root = document.getElementsByTagName(selector);
        }
        else {
            root = document.body;
        }
        this.shapeEl = this.createCanvasEl(this.options.id, this.options.width, this.options.hight, this.options.margin);
        root.appendChild(this.shapeEl);
    }
    initCanvas(id) {
        //Очень странная ошибка, во всем коде капризничает компилятор, но работает...
        const canvas = document.getElementById(id);
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                this.ctx = ctx;
            }
        }
    }
    createCanvasEl(id, width, hight, margin) {
        const element = document.createElement("canvas");
        element.id = `${id}`;
        element.setAttribute("width", width);
        element.setAttribute("hight", hight);
        element.style.margin = `${margin}px`;
        return element;
    }
}
// ------------------------------------------------
class Circle extends Shape {
    constructor(options, ctx) {
        //разве не может super принимать 2 аргумента, зато работает...
        super(options, ctx);
        // super(ctx)
        this.drow(this.options.color);
    }
    drow(color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(200, 75, 60, 0, Math.PI * 2);
        this.ctx.fill();
    }
}
class Square extends Shape {
    constructor(options, ctx) {
        //разве не может super принимать 2 аргумента, зато работает...
        super(options, ctx);
        // super(ctx)
        this.drow(this.options.color);
    }
    drow(color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.fillRect(100, 0, 200, 150);
    }
}
class Triangle extends Shape {
    constructor(options, ctx) {
        //разве не может super принимать 2 аргумента, зато работает...
        super(options, ctx);
        // super(ctx)
        this.drow(this.options.color);
    }
    drow(color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(50, 150);
        this.ctx.lineTo(200, 0);
        this.ctx.lineTo(350, 150);
        this.ctx.fill();
    }
}
new Square({ id: "square", color: "#654321" }, {}); // Обязательно указывать минимум 1 аргументы ????
new Circle({ id: "circle", color: "#123456" }, {}); // Так получилось что я передал в параметры значение с другого класса, вот и выбивает ошибку, пока не решил как лучше сделать
new Triangle({ id: "triangle", color: "#098765" }, {});
