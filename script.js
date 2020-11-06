const cube = document.querySelector('.cube');
const container = document.querySelector('.cube-container');


// TURN CUBE ON MOUSEMOUSE
container.addEventListener('mousemove',(e) => {

    rotY = e.clientX/1.8;
    rotZ = e.clientY/1.8;
    cube.style.animation='none';
    cube.style.transform = `rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
    cube.style.transition = '0.5s ease-out';

    container.addEventListener('mouseleave', (e) => {
        cube.style.animation = 'spin 1500s infinite linear';
    });
})
