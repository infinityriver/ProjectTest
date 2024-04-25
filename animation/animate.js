function start() {
    var elementstart1 = document.getElementById('mainText');
    elementstart1.classList.add('active')
    setTimeout(start1, 1000)
}

function start1() {
    var elementstart2 = document.getElementById('form');
    elementstart2.classList.add('active')
    setTimeout(start2, 500)
}


function start2() {
    var elementstart11 = document.getElementById('check');
    elementstart11.classList.add('active')
    setTimeout(PrintText_1, 1000)
}

const text_1 = 'Отсрочка платежей для постоянных клиентов';
var index_1 = 0;
var printed_1 = false;

function PrintText_1() {
    const element_1 = document.getElementById('text1');
    if (index_1 < text_1.length) {
        element_1.textContent += text_1[index_1]

        index_1++

    
        setTimeout(PrintText_1, 30)
    }else {
        printed_1 = true;
        setTimeout(PrintText_2, 500)

    }
}   

const text_2 = 'Бесплатная доставка по Москве и СПБ в течение 2х часов';
var index_2 = 0;
var printed_2 = false;

function PrintText_2() {
    const element_2 = document.getElementById('text2');
    if (index_2 < text_2.length) {
        element_2.textContent += text_2[index_2]

        index_2++

    
        setTimeout(PrintText_2, 30)
    }else {
        printed_2 = true;
        setTimeout(PrintText_3, 500)

    }
}   


const text_3 = 'Квалифицированный персональный менеджер';
var index_3 = 0;
var printed_3 = false;

function PrintText_3() {
    const element_3 = document.getElementById('text3');
    if (index_3 < text_3.length) {
        element_3.textContent += text_3[index_3]

        index_3++

    
        setTimeout(PrintText_3, 30)
    }else {
        printed_3 = true;

    }
}   
