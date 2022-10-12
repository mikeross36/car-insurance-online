"use strict";
import { UIController } from "./UIController";

export class Insurance {
    constructor(model, year, level) {
        this.model = model;
        this.year = year;
        this.level = level;
    }

    calculatePrice() {
        let price;
        const basePrice = 2000;
        switch (this.model) {
            case "1":
                price = basePrice * 1.15;
                break;
            case "2":
                price = basePrice * 1.05;
                break;
            case "3":
                price = basePrice * 1.3;
                break;
            default: UIController.displayError("Model based price error!");
        }
        const diffYear = getYearDifference(this.year);
        price -= ((diffYear * 3) - price) / 100;
        price = calculateLevel(this.level, price);

        function getYearDifference(year) {
            const difference = new Date().getFullYear() - year;
            return difference;
        };

        function calculateLevel(level, price) {
            if (level === "basic") {
                price *= 1.3;
            }
            else {
                price *= 1.5;
            }
            return +price.toFixed(2);
        };

        return price;
    }
}
