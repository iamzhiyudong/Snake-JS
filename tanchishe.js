//画背景区域
function draw_background(id) {
    var ctx = document.getElementById(id).getContext("2d");
    ctx.fillRect(0, 0, 600, 600);
}

function draw_snake(id) {
    var ctx = document.getElementById(id).getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 20, 20);
}
var Block = function(col, row, size) {
    this.col = col;
    this.row = row;
    this.size = size;
}
Block.prototype.draw = function() {
    ctx.fillRect(this.col * size, this.row * size, this.size, this.size);
}
var snake = {
    body: [
        new Block(20, 20, 10),
        new Block(20, 21, 10),
        new Block(20, 22, 10)
    ],
    direction: "right",
}
setInterval(function() {
    ctx.clearRect(0, 0, 400, 400);
    snake.draw();
    snake.move();
    ctx.srokeRect(0, 0, 400, 400);
}, 200)
snake.draw = function() {
    for (var i = 0; i < snake.body.length; i++) {
        this.body[i].draw();
    }
}
snake.move = function() {

}

var keycode = function() {
    // var doc = document.getElementsByTagName("document");
    document.onekeydown = function() {
            alert("event.keyCode");
        }
        // if (doc.onekeydown) {

    //     alert(evnet.keycode);
    // }

};