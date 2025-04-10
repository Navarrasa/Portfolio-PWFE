import { Ex01 } from './ex01.js';
import { Ex02 } from './ex02.js';
import { Ex03 } from './ex03.js';
import { Ex04 } from './ex04.js';
import { Ex05 } from './ex05.js';
import { Ex06 } from './ex06.js';
import { Ex07 } from './ex07.js';
import { Ex08 } from './ex08.js';
import { Ex09 } from './ex09.js';

// Mapeia os números dos exercícios para as funções
const exercises = {
    1: Ex01,
    2: Ex02,
    3: Ex03,
    4: Ex04,
    5: Ex05,
    6: Ex06,
    7: Ex07,
    8: Ex08,
    9: Ex09
};

// Adiciona event listeners aos botões
document.querySelectorAll('.ex-btn').forEach(button => {
    button.addEventListener('click', () => {
        const exNumber = button.getAttribute('data-ex');
        const exerciseFunction = exercises[exNumber];
        if (exerciseFunction) {
            exerciseFunction();
        }
    });
});

export { Ex01, Ex02, Ex03, Ex04, Ex05, Ex06, Ex07, Ex08, Ex09 };