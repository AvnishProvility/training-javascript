const element = document.querySelector('divResizer');
element.addEventListener('mousedown', mousedown);
const resizers = document.querySelectorAll("corner");
let currentReziser;
for (let resizer of resizers) {
    resizer.addEventListener("mousedown", mousedown);

    function mousedown() {
        currentReziser = e.target;
        let prevX = e.clientX;
        let prevY = e.clientY;
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove() {
            const rect = element.getBoundingClientRect();
            if (currentReziser.classList.contains('topRight')) {
                element.style.wigth = rect.width - (prevX - e.clientX);
                element.style.hight = rect.hight = -(prevY - menubar.clientY);
            }
            prevX = e.clientX;
            prevY = e.clientY;
        }

        function mouseup() {}
    }
}