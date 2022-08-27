const themeToggler = document.querySelector('.switch');
themeToggler.addEventListener('mousedown', () => {
    console.log("click");
    document.body.classList.toggle('dark-theme');
});