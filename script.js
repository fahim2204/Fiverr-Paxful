const buttons = document.querySelectorAll('.login-btn');

buttons.forEach(button => {
  button.addEventListener('mousedown', (event) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${event.offsetX}px`;
    ripple.style.top = `${event.offsetY}px`;
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 700);
  });
});

