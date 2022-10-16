"use strict"
import {UiController} from "./uiController"

export class Insurance {
    constructor(model, year, level) {
        this.model = model;
        this.year = year;
        this.level = level;
    }
    
    calculatePrice() {
        let price;
        const basePrice = 2000;
        // based on model price calculation
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
            default: UiController.displayError("Model based price error!")
        };

        // based on car age price caculation
        const getYearDifference = () => {
            return new Date().getFullYear() - this.year;
        };
        const diffYear = getYearDifference()
        price -= ((diffYear * 3) - price) / 100;

        // based on insurance level price caculation
        const calculateLevel = price => {
            if (this.level === "basic") {
                price *= 1.3;
            }
            price *= 1.5;

            return +price.toFixed(2)
        };
        
        price = calculateLevel(price);

        return price;
    };
};