"use strict";

import './style.scss';

const Validation = (function () {
    function isEmail(text = ``) {
        const REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return REG_EXP.test(text.toLowerCase().trim());
    }

    function isEmpty(text = ``) {
        return text === ``;
    }

    return {
        isEmail,
        isEmpty,
    };
})();

const Main = (function () {
    const firstNameInputWrapper = document.getElementById(`first-name-input-wrapper`);
    const firstNameInput = document.getElementById(`first-name`);

    const lastNameInputWrapper = document.getElementById(`last-name-input-wrapper`);
    const lastNameInput = document.getElementById(`last-name`);

    const emailInputWrapper = document.getElementById(`email-input-wrapper`);
    const emailInput = document.getElementById(`email`);

    const passwordInputWrapper = document.getElementById(`password-input-wrapper`);
    const passwordInput = document.getElementById(`password`);

    const submitBtn = document.getElementById(`submit-btn`);

    const ERROR_CLASS_NAME = `js-error`;

    function isFirstNameInputEmpty() {
        return Validation.isEmpty(firstNameInput.value);
    }

    function isLastNameInputEmpty() {
        return Validation.isEmpty(lastNameInput.value);
    }

    function isEmailInputEmpty() {
        return Validation.isEmpty(emailInput.value);
    }

    function isPasswordInputEmpty() {
        return Validation.isEmpty(passwordInput.value);
    }

    function toggleErrorMessage(element, condition) {
        if (condition) {
            element.classList.add(ERROR_CLASS_NAME);
        } else {
            element.classList.remove(ERROR_CLASS_NAME);
        }
    }

    function formHandler(event) {
        event.preventDefault();

        toggleErrorMessage(firstNameInputWrapper, isFirstNameInputEmpty());
        toggleErrorMessage(lastNameInputWrapper, isLastNameInputEmpty());
        toggleErrorMessage(emailInputWrapper, !Validation.isEmail(emailInput.value) || isEmailInputEmpty());
        toggleErrorMessage(passwordInputWrapper, isPasswordInputEmpty());
    }

    submitBtn.addEventListener(`click`, formHandler);
})();
