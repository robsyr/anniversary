# Anniversary Card with Captcha

A fun, interactive anniversary card that requires solving a captcha before revealing your love letter.

## Setup Instructions

1. **Add your images:**
   - Replace `boyfriend1.jpg`, `boyfriend2.jpg`, etc. with actual photos of you
   - Replace `random1.jpg`, `random2.jpg`, etc. with random images (other people, objects, etc.)
   - You can adjust the number of images by editing the HTML

2. **Customize the letter:**
   - Open `index.html` and replace the placeholder text in the letter section with your actual message

3. **Optional decorations:**
   - Add `decoration-left.png` and `decoration-right.png` for corner decorations (or remove those img tags)

4. **Open the card:**
   - Simply open `index.html` in a web browser

## How it works

- She must select ALL images of you (marked with `data-correct="true"`)
- If she misses any or selects wrong ones, it shows "Try again" and resets
- Once she selects all correct images, your letter is revealed

## Customization Tips

- Change colors in `style.css` (search for color codes like `#674ea7`)
- Adjust grid layout by changing `grid-template-columns` in `.image-grid`
- Modify the number of images by adding/removing `.image-box` divs in HTML
