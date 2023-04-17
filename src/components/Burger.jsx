import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__buttons').toggleClass('active');
        $('body').toggleClass('lock');
    })
})
export default class Burger {
}