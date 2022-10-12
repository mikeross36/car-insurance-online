"use strict"
import "./style/main.scss"
import { qs } from "./utils.js"
import { globals } from "./globals.js"
export const form = globals()
import { UIController } from "./UIController"
import { Insurance } from "./Insurance"

(function () {
    UIController.displayYears()
    form.addEventListener("submit", e => {
        e.preventDefault()
        const { model, year, level } = getSelectInputs()
        if (!model) {
            UIController.displayError("Please select the model")
        }
        else {
            removePrevResult()
            getInsurance(model, year, level)
        }
    });

    function getSelectInputs() {
        const model = qs("[data-select-model]").value;
        const year = qs("[data-select-year]").value;
        const level = qs('input[name="level"]:checked').value;

        return {model, year, level}
    }

    function getInsurance(model, year, level) {
        const insurance = new Insurance(model, year, level)
        const insurancePrice = insurance.calculatePrice();
        UIController.displayResult(insurance, insurancePrice)
    }

    function removePrevResult() {
        const prevResult = qs(".result div")
        if(prevResult) prevResult.remove()
    }
})();