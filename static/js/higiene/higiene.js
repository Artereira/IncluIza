document.addEventListener('DOMContentLoaded', () => {
    const fixedImage = document.getElementById('fixedImage');
    const myAudio = document.getElementById('myAudio');
    const subNodes = document.querySelectorAll('.sub-node');
    const additionalImages = document.querySelectorAll('.additional-image');
    const sideImages = document.querySelectorAll('.sub-image');
    let isImageClicked = false;

    fixedImage.addEventListener('click', () => {
        if (myAudio.paused) {
            myAudio.play();
        }

        if (isImageClicked) {
            subNodes.forEach(subNode => {
                subNode.style.display = 'none';
                subNode.style.opacity = '0';
            });
            additionalImages.forEach(img => img.style.display = 'none');
            sideImages.forEach(img => img.style.display = 'none');
            document.getElementById('output').innerText = '';
        } else {
            subNodes.forEach(subNode => {
                subNode.style.display = 'flex';
                subNode.style.opacity = '1';
            });
            document.getElementById('output').innerText = '';
        }

        isImageClicked = !isImageClicked;
    });

    subNodes.forEach(subNode => {
        subNode.addEventListener('click', () => {
            const id = subNode.id;
            let imageIds = [];

            switch (id) {
                case 'subNode1':
                    imageIds = ['1', '2', '12', '13'];
                    break;
                case 'subNode2':
                    imageIds = ['3', '4', '5'];
                    break;
                case 'subNode3':
                    imageIds = ['6', '7'];
                    break;
                case 'subNode4':
                    imageIds = ['8', '9', '10', '11'];
                    break;


                    case 'subNode5':
                    imageIds = ['12', '13'];
                    break;
                case 'subNode6':
                    imageIds = [];
                    break;
                case 'subNode7':
                    imageIds = [];
                    break;
                case 'subNode8':
                    imageIds = [];
                    break;
            }

            additionalImages.forEach(img => img.style.display = 'none');
            sideImages.forEach(img => img.style.display = 'none');

            imageIds.forEach(num => {
                const imageWrapper = document.querySelector(`.additional-image-wrapper[data-images="${num}"]`);
                if (imageWrapper) {
                    const img = imageWrapper.querySelector('.additional-image');
                    if (img) img.style.display = 'block';
                }
            });

            document.getElementById('output').innerText = ``;
        });
    });

    document.querySelectorAll('.additional-image').forEach(image => {
        image.addEventListener('click', () => {
            const subImagesWrapper = image.nextElementSibling;
            if (subImagesWrapper) {
                const sideImagesInWrapper = subImagesWrapper.querySelectorAll('.sub-image');
                const isVisible = sideImagesInWrapper[0].style.display === 'block';

                sideImagesInWrapper.forEach(img => img.style.display = isVisible ? 'none' : 'block');
                document.getElementById('output').innerText = isVisible ? '' : '';
            }
        });
    });

    document.querySelectorAll('.sub-image').forEach(image => {
        image.addEventListener('click', () => {
            const audioSrc = image.getAttribute('data-audio');
            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.play();
            }
        });
    });
});