"use strict";
/* Record<Keys, Type>는 객체의 키와 값의 타입을
    간편하게 정의할 수 있게 도와주는 유틸리티 타입 */
const prices = {
    apple: 2000,
    peach: 3500,
    plum: 1500
};
console.log(`사과의 가격 : ${prices.apple}`);
const translations = {
    hello: "안녕하세요",
    goodbye: "안녕히가세요"
};
console.log(translations.hello);
console.log(translations.goodbye);
