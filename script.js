const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const imageDisplay = document.getElementById('image-display');

function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    const randomX = Math.floor(Math.random() * maxX) - (containerRect.width / 4);
    const randomY = Math.floor(Math.random() * maxY) - (containerRect.height / 3);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

noButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});
noButton.addEventListener('mouseover', moveNoButton);

yesButton.addEventListener('click', () => {
    question.textContent = "Yay! See you on our date! 🥰✨";
    imageDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Bnd2M0Z3R4Ym1ldXN6N3g1bWNvbm16NWhid295b3VwZzBwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/26vUxS3WnSCSw8lGw/giphy.gif";
    noButton.style.display = 'none';
});
