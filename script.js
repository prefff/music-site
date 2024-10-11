let timeoutId;
const delay = 3000; // время в миллисекундах

const musicPanelArea = document.querySelector('.music_panel_area');

const hidePanel = () => {
    musicPanelArea.classList.add('hidden');
};

const showPanel = () => {
    musicPanelArea.classList.remove('hidden');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hidePanel, delay);
};

document.body.addEventListener('mousemove', (event) => {
    if (musicPanelArea.contains(event.target)) {
        showPanel();
    }
});

window.onload = () => {
    timeoutId = setTimeout(hidePanel, delay);
};