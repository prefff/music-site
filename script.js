let timeoutId;
let timeoutId1;
const delay = 3000; // время в миллисекундах
const delay_button = 100;
let isActive1= false

const musicPanelArea = document.querySelector('.music_panel_area');
const soundtrackButton = document.querySelector('.soundtrack_button')
const musicPanelHidden = document.querySelector('.music_panel_hidden')

const hidePanel = () => {
    musicPanelArea.classList.add('hidden');
    musicPanelHidden.classList.add('open');
};

const showPanel = () => {
    musicPanelArea.classList.remove('hidden');
    musicPanelHidden.classList.remove('open');
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

// доделать надо
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки внутри body_settings
    const buttons = document.querySelectorAll('.body_settings svg');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Если кнопка уже активна, убираем активный класс
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
            // Если кнопка не активна, добавляем активный класс
            else {
                button.classList.add('active');
            }
        });
    });
});