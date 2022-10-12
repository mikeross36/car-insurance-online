"use strict";
import { qs } from "./utils.js";
import spinnerGif from "./assets/images/spinner.gif";
import { form } from "./index";

export class UIController {
    static displayYears() {
        const presentYear = new Date().getFullYear();
        const maxYear = presentYear - 20;
        const yearSelect = qs("[data-select-year]");
        createOptions();

        function createOptions() {
            for (let i = presentYear; i >= maxYear; i--) {
                const option = document.createElement("option");
                option.value = i;
                option.textContent = i;
                yearSelect.append(option);
            }
        }
    }

    static displayError(message) {
        createErrDiv();

        function createErrDiv() {
            const div = document.createElement("div");
            div.classList.add("error");
            div.innerHTML = `<p>${message}</p>`;
            const formGroup = qs(".form-group");
            form.insertBefore(div, formGroup);
        };

        function removeErrDiv() {
            const timer = setTimeout(() => {
                qs(".error").remove();
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        };
        return removeErrDiv();
    }

    static displayResult(insurance, price) {
        let model = defineModel();

        function defineModel() {
            let model = insurance.model;
            switch (model) {
                case "1":
                    model = "American";
                    break;
                case "2":
                    model = "Asian";
                    break;
                case "3":
                    model = "European";
                    break;
                default: UIController.displayError("Cannot get model name");
            }
            return model;
        }

        function displaySummaryDiv() {
            const div = document.createElement("div");
            if (div) {
                div.innerHTML = `
                    <p class="header">Summary</p>
                    <p>Model: ${model}</p>
                    <p>Year: ${insurance.year}<p/>
                    <p>Level: ${insurance.level}</p>
                    <p>Total: ${price}</p>
                `;
            }
            return div;
        };

        function displaySpinner() {
            const spinner = getSpinner();
            const div = displaySummaryDiv();
            const result = qs(".result");

            const timer = setTimeout(() => {
                spinner.style.display = "none";
                result.append(div);
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
        return displaySpinner();

        function getSpinner() {
            const spinnerCont = qs(".spinner");
            const spinnerImg = document.createElement("img");
            spinnerImg.src = spinnerGif;
            spinnerImg.style.display = "block";
            return spinnerCont.appendChild(spinnerImg);
        }
    }
}
;
