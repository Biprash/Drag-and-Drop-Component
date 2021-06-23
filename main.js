const dragable = document.getElementById('block');
var diffX = 0;
var diffY = 0;
var dragging = false

dragable.addEventListener('mousedown', function (event) {
    x = dragable.getBoundingClientRect().left;
    y = dragable.getBoundingClientRect().top;
    dragable.style.opacity = 0.5;
    dragging = true;
});


dragable.addEventListener('mouseout', function (event) {
    if (dragging) {        
        let left = event.screenX - diffX;
        let top = event.screenY - diffY;
        dragable.style.left = left + 'px';
        dragable.style.top = top + 'px';
    }
});


dragable.addEventListener('mousemove', function (event) {
    if (dragging) {        
        let left = event.screenX - diffX;
        let top = event.screenY - diffY;
        dragable.style.left = left + 'px';
        dragable.style.top = top + 'px';
    }
});


dragable.addEventListener('mouseup', function (event) {
    dragable.style.opacity = 1;
    dragging = false;
});