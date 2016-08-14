$(function () {
    $(window).load(function () {

        var scaleBy = 5;
        var w = 892;
        var h = 590;
        var div = document.querySelector('#screen');
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;

        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.style.border = "1px solid black";

        var context = canvas.getContext('2d');
        context.scale(scaleBy, scaleBy);


        html2canvas(div, {
            canvas:canvas,
            onrendered: function (canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);
                //Canvas2Image.saveAsBMP(canvas);
                $(body).append(canvas);
            }
           
        });
    });
});
