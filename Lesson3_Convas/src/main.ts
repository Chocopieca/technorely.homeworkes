interface ShapeOption {
    id: string
    selector ? : string
    width ? : string
    hight ? : string
    margin ? : number
    color ? : string
}

const DEFAULT_SHAPE_OPTIONS = {
    selector: '',
    width: "400",
    hight: "200",
    margin: 40,
    color: "black"
} as const

class Shape {
    protected options: Required < ShapeOption >
    protected shapeEl: HTMLElement
    protected ctx: CanvasRenderingContext2D
    
    constructor(options: ShapeOption) {
        this.options = {...DEFAULT_SHAPE_OPTIONS,...options}

        this.initShape(this.options.selector)
        this.initCanvas(this.options.id)
    }

    protected initShape(selector: string) {
        
        let root: HTMLElement

        //Что за accessKey ???
        if (this.options.selector) {
            root = document.getElementsByTagName(selector)
        } else {
            root = document.body
        }

        this.shapeEl = this.createCanvasEl(this.options.id, this.options.width, this.options.hight, this.options.margin)
        root.appendChild(this.shapeEl)
    }

    protected initCanvas(id: string) {
        //Очень странная ошибка, во всем коде капризничает компилятор, но работает...
        const canvas = document.getElementById(id)
        if(canvas.getContext){
        const ctx = canvas.getContext('2d')
            if(ctx) {
                this.ctx = ctx
            }
        }
    }

    private createCanvasEl(id : string, width : string, hight : string, margin : number) {
        const element = document.createElement("canvas")
        element.id = `${id}`
        element.setAttribute("width", width)
        element.setAttribute("hight", hight)
        element.style.margin = `${margin}px`
        return element
    }
}

// ------------------------------------------------
class Circle extends Shape {
    constructor(options: ShapeOption, ctx: CanvasRenderingContext2D | null | undefined) {
        //разве не может super принимать 2 аргумента, зато работает...
        super(options, ctx)
        // super(ctx)
        this.drow(this.options.color)
    }

    protected drow(color: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(200, 75, 60, 0, Math.PI*2);
        this.ctx.fill();
    }
}

class Square extends Shape {
    constructor(options: ShapeOption, ctx: CanvasRenderingContext2D | null | undefined) {
        //разве не может super принимать 2 аргумента, зато работает...
        super(options, ctx)
        // super(ctx)
        this.drow(this.options.color)
    }

    protected drow(color: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.fillRect(100, 0, 200, 150)
    }
}

class Triangle extends Shape {
    constructor(options: ShapeOption, ctx: CanvasRenderingContext2D | null | undefined) {
        //разве не может super принимать 2 аргумента, зато работает...
        super(options, ctx)
        // super(ctx)
        this.drow(this.options.color)
    }

    protected drow(color: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(50, 150);
        this.ctx.lineTo(200, 0);
        this.ctx.lineTo(350, 150);
        this.ctx.fill()
    }
}

new Square({id: "square", color: "#654321"}, {}); // Обязательно указывать минимум 1 аргументы ????

new Circle({id: "circle", color: "#123456"}, {}); // Так получилось что я передал в параметры значение с другого класса, вот и выбивает ошибку, пока не решил как лучше сделать

new Triangle({id: "triangle", color: "#098765"}, {});