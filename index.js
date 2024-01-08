let cursor = document.querySelector('.cursor');
let textContainer = document.querySelector('.text-container');
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let secondText = document.querySelector('#second h2');

const isOverlaping = (a, b) => {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top > bRect.bottom ||
    aRect.bottom < bRect.top ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
};

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';

  if (isOverlaping(cursor, secondText)) {
    first.style.display = 'flex';
    cursor.style.transform = 'scale(12)';
    const cursorRect = cursor.getBoundingClientRect();
    let cursorWidth = cursorRect.width / 2;
    let cursorX = cursorRect.x;
    let cursorY = cursorRect.y;

    first.style.maskPosition = `${cursorX}px ${cursorY}px`;
    first.style.maskSize = `${cursorWidth * 2}px`;
  } else {
    first.style.display = 'none';
    cursor.style.transform = 'scale(1)';
  }
});
