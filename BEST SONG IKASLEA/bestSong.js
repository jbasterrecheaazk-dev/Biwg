const accessibilityButton = document.getElementById('accessibilityButton');
const accessibilityPanel = document.getElementById('accessibilityPanel');
const themeSelect = document.getElementById('themeSelect');
const options = document.querySelectorAll('.option');

themeSelect.addEventListener('click', () => {
//alert("click");

function aldatukontrastea() {
    const html = document.documentElement;
    const invertido = html.style.filter === 'invert(100%)';
    html.style.filter = invertido ? 'none' : 'invert(100%)';
    document.querySelectorAll('img, video').forEach(media => {
        media.style.filter = invertido ? 'none' : 'invert(100%)';
    });
}

/*
if (options == "light") {
    alert("click");
    document.body.classList.add('light-theme');
} else if (options == "dark") {
    alert("clock");
    document.body.classList.add('dark-theme');
}
*/
});
accessibilityButton.addEventListener('click', () => {
//alert('ggg');
accessibilityPanel.classList.toggle('hidden');
});