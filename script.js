let init = () => {
    const videoElement = document.getElementById('video');

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            videoElement.srcObject = stream;
            let height = videoElement.offsetHeight; // Или используйте clientHeight в зависимости от нужд
            videoElement.style.clipPath = `circle(${height/1.5}px at center)`;

            // Если вы хотите использовать проценты или другие значения, просто подставьте их в строку
            // Например, создаем эллипс, который покрывает весь элемент
            // element.style.clipPath = `ellipse(50% 50% at 50% 50%)`;
        })
        .catch(function(error) {
        console.log("Что-то пошло не так: ", error);
        });
    }
}

document.addEventListener('DOMContentLoaded', init);