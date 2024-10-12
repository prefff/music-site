let timeoutId;
let timeoutId1;
const delay = 3000; // время в миллисекундах
const delay_button = 100;

const musicPanelArea = document.querySelector('.music_panel_area');
const soundtrackButton = document.querySelector('.soundtrack_button')
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

document.querySelectorAll('.svg_text_panel_button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.svg_text_panel_button').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.querySelectorAll('.svg_icons_panel_button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.svg_icons_panel_button').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});