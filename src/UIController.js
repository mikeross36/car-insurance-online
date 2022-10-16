"use strict"
import { qs } from "./utils";
import { globals } from "./globals"
const form = globals();
import spinnerGif from "./assets/images/spinner.gif"

export class UiController { 
    static displayYears() {
        const presentYear = new Date().getFullYear()
        const maxYear = presentYear - 20;
        const yearSelect = qs("[data-select-year]")
        
        const createOptions = () => {
            for (let i = presentYear; i >= maxYear; i--){
                const option = document.createElement("option")
                option.value = i;
                option.textContent = i;
                yearSelect.append(option)
            }
        }
        createOptions()
    };

    static displayError(message) {
        const createErrorDiv = () => {
            const div = document.createElement("div")
            div.classList.add("error")
            div.innerHTML = `<p>${message}</p>`;
            const formGroup = qs(".form-group");
            form.insertBefore(div, formGroup)
        };
        
        const removeErrDiv = () => {
            const timer = setTimeout(() => {
                qs(".error").remove();
            }, 2000)
            return () => {
                clearTimeout(timer)
            }
        };

        createErrorDiv()
        removeErrDiv()
    };

    static displayResult(insurance, price) {
        // define model name
        const defineModel = () => {
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
                default: UiController.displayError("Cannot get model name!")
            }
            return model;
        };

        const displaySummaryDiv = () => {
            const modelName = defineModel()
            const div = document.createElement("div")
            if (div) {
                div.innerHTML = `
                    <p class="header">Summary</div>
                    <p>Model: ${modelName}</p>
                    <p>Year: ${insurance.year}</p>
                    <p>Level: ${insurance.level}</p>
                    <p>Total: ${price}</p>
                `
            }
            return div;
        };

        const displaySpinner = () => {
            const getSpinner = () => {
                const spinnerContainer = qs(".spinner")
                const spinnerImg = document.createElement("img")
                spinnerImg.src = spinnerGif;
                spinnerImg.style.display = "block";

                return spinnerContainer.appendChild(spinnerImg)
            };

            const spinner = getSpinner()
            const div = displaySummaryDiv()
            const result = qs(".result")

            const timer = setTimeout(() => {
                spinner.style.display = "none";
                result.append(div)
            },2000)
            return () => {
                clearTimeout(timer)
            }
        };

        displaySpinner()
    };
};
 