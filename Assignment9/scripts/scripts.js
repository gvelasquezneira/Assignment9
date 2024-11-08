let button = document.querySelector('button');
let image1 = document.querySelector('#image1');
let image2 = document.querySelector('#image2');

image1.style.display = 'none';
image2.style.display = 'block';

button.onclick = () => {
    if (image1.style.display === 'none') {
        image1.style.display = 'block';
    } else {
        image1.style.display = 'none';
    }
}


image2.onmouseover = () => {
    if (image2.style.display === 'block') {
        image2.style.display = 'none';
    } else {
        image2.style.display = 'block';
    }
}

image2.onmouseout = () => {
    if (image2.style.display === 'block') {
        image2.style.display = 'none';
    } else {
        image2.style.display = 'block';
    }
}