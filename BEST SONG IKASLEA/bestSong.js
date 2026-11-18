const accessibilityButton = document.getElementById('accessibilityButton');
const accessibilityPanel = document.getElementById('accessibilityPanel');
const themeSelect = document.getElementById('themeSelect');
const options = document.querySelectorAll('.option');

accessibilityPanel.addEventListener('click', () => {
/*
alert("click");
function aldatukontrastea() {
    const html = document.documentElement;
    const invertido = html.style.filter === 'invert(100%)';
    html.style.filter = invertido ? 'none' : 'invert(100%)';
    document.querySelectorAll('img, video').forEach(media => {
        media.style.filter = invertido ? 'none' : 'invert(100%)';
    });
}
    document.body.classList.add('light-theme');
    document.body.classList.add('dark-theme');
*/

if (options === "light") {
    alert("click");
    document.body.style.filter = 'invert(100%)';
} else if (options === "dark") {
    alert("clock");
    document.body.style.filter = 'invert(0%)';
}

});
accessibilityButton.addEventListener('click', () => {
//alert('ggg');
accessibilityPanel.classList.toggle('hidden');
});