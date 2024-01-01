function XYPlotter(id) {

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');

    // Plot line function
    this.plotline = function(x0, y0, x, y, color) {
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x, y);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

    // Transform XY function
    this.transformXY = function() {
        this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
    }

    this.plotPoint = function(x, y, color, radius=3) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // plot points function
    this.plotPoints = function(n, xArr, yArr, color, radius=3) {
        for (let i = 0; i < n; i++) {
            this.plotPoint(xArr[i], yArr[i], color, radius);
        }
    }
}

function randArr(n, mini, maxi) {
    arr = Array(n).fill(0).map(function(){return Math.random() * (maxi - mini) + mini});
    return arr;
}