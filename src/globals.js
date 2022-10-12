"use strict"
import { qs } from "./utils.js"

export function globals() {
    const form = qs("[data-quote-form]")
    return form;
};