const imageGrid = document.getElementById('imageGrid');
const verifyBtn = document.getElementById('verifyBtn');
const errorMessage = document.getElementById('errorMessage');
const captchaScreen = document.getElementById('captcha-screen');
const letterScreen = document.getElementById('letter-screen');

function shuffleImages() {
    const boxes = Array.from(imageGrid.children);
    boxes.sort(() => Math.random() - 0.5);
    boxes.forEach(box => imageGrid.appendChild(box));
}

function attachClickListeners() {
    const imageBoxes = document.querySelectorAll('.image-box');
    imageBoxes.forEach(box => {
        const toggleSelection = (e) => {
            e.preventDefault();
            box.classList.toggle('selected');
            errorMessage.textContent = '';
        };
        
        box.addEventListener('touchend', toggleSelection);
        box.addEventListener('click', toggleSelection);
    });
}

attachClickListeners();

verifyBtn.addEventListener('click', () => {
    const correctBoxes = document.querySelectorAll('.image-box[data-correct="true"]');
    const selectedBoxes = document.querySelectorAll('.image-box.selected');
    
    let allCorrectSelected = true;
    let noIncorrectSelected = true;
    
    correctBoxes.forEach(box => {
        if (!box.classList.contains('selected')) {
            allCorrectSelected = false;
        }
    });
    
    selectedBoxes.forEach(box => {
        if (box.getAttribute('data-correct') !== 'true') {
            noIncorrectSelected = false;
        }
    });
    
    if (allCorrectSelected && noIncorrectSelected) {
        captchaScreen.classList.remove('active');
        letterScreen.classList.add('active');
    } else {
        errorMessage.textContent = '❌ Are you sure???';
        const imageBoxes = document.querySelectorAll('.image-box');
        imageBoxes.forEach(box => box.classList.remove('selected'));
        shuffleImages();
    }
});
