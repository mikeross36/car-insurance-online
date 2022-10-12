"use strict"

export function qs(selector, parent = document) {
    return parent.querySelector(selector)
};