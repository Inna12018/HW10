// Задание
// Реализовать переключение вкладок (табы) на чистом Javascript.

// Технические требования:

// В папке tabs лежит разметка для вкладок. Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки. При этом остальной текст должен быть скрыт. В комментариях указано, какой текст должен отображаться для какой вкладки.
// Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
// Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться. При этом нужно, чтобы функция, написанная в джаваскрипте, из-за таких правок не переставала работать.




//***********************/
// 1) перебрать все табы и на каждый таб повесить ивент клика
//2) узнать какая из лишек относится к этому табу ( чтобы это сделать можно добавить id к лишкам- id Akali, а к тексту добавить id="akali-content)
//3)по клику на таб можно прочитать атрибут id
//4) document.getElementById(`${founded id}-content`)//founded id - подставится атрибут id на который кликнули (пункт 3)
//5) находим нужную лишку и присваиваем класс актив ( всем остальным этот класс удалить)

//1) второй вариант решения использование data-atributes (чаще используют с табами)

const getTabs = document.querySelectorAll('.tabs-title');
const getTabsContent = document.querySelectorAll('.tab-content'); 


getTabs.forEach(tab => tab.addEventListener('click',() => {
    const attr = tab.dataset.tab;
    console.log(attr);
    document.querySelector('.tabs-title.active').classList.remove('active');
    tab.classList.add('active');
    document.querySelector('.tab-content.active').classList.remove('active');
    document.querySelector(`[data-content = ${attr}-content]`).classList.add('active');

}));



