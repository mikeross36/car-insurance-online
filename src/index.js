"use strict"
import "./style/main.scss"
import {qs} from "./utils"
import { UiController } from "./uiController"
import { globals } from "./globals"
import {Insurance} from "./Insurance"

(() => {
    UiController.displayYears()
    const form = globals()

    const getSelectInputs = () => {
        const model = qs("[data-select-model]").value;
        const year = qs("[data-select-year]").value;
        const level = qs('input[name="level"]:checked').value;

        return { model, year, level }
    };

    const getInsurance = (model, year, level) => {
        const insurance = new Insurance(model, year, level)
        const insurancePrice = insurance.calculatePrice()
        UiController.displayResult(insurance, insurancePrice)
    };

    const removePrevResult = () => {
        const prevResult = qs(".result div")
        if (prevResult) prevResult.remove()
    };

    form.addEventListener("submit", e => {
        e.preventDefault()
        const { model, year, level } = getSelectInputs()
        if (!model) {
            UiController.displayError("Please select car model")
        }
        else {
            removePrevResult()
            getInsurance(model, year, level)
        }
    });
})();