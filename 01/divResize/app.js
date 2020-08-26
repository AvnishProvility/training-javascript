const element = document.querySelector('.resizableDiv');
element.addEventListener('mousedown', init);

function init() {
    let topLeft = document.querySelector('.topLeft');
    // topLeft.addEventListener('mousemove', Resize);
    window.addEventListener('mousemove', Resize);
    window.addEventListener('mouseup', stopResize);
}
//resize the element
function Resize(e) {
    let currentResizer = e.target;
    if (currentResizer.classList.contains("topRight")) {
        console.log(currentResizer.classList.contains("topRight"));
        element.style.width = (e.clientX - element.offsetLeft) + 'px';
        element.style.height = (e.clientY - element.offsetTop) + 'px';
    } else if ((currentResizer.classList.contains("topLeft"))) {
        element.style.width = (e.clientX - element.offsetLeft) + 'px';
        element.style.height = (e.clientY - element.offsetTop) + 'px';
    } else if (currentResizer.classList.contains("bottomRight")) {
        element.style.width = (e.clientX - element.offsetLeft) + 'px';
        element.style.height = (e.clientY - element.offsetTop) + 'px';
    } else {
        element.style.width = (e.clientX - element.offsetLeft) + 'px';
        element.style.height = (e.clientY - element.offsetTop) + 'px';

    }
}

function stopResize() {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}