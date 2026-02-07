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
        let touchStartTime = 0;
        
        box.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
        });
        
        box.addEventListener('touchend', (e) => {
            e.preventDefault();
            const touchDuration = Date.now() - touchStartTime;
            // Only toggle if touch was brief (not a scroll)
            if (touchDuration < 200) {
                box.classList.toggle('selected');
                errorMessage.textContent = '';
            }
        });
        
        box.addEventListener('click', (e) => {
            box.classList.toggle('selected');
            errorMessage.textContent = '';
        });
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
