"use strict";
class CounterApp {
    constructor() {
        this.counter = 0;
        this.counterElement = document.getElementById('counter');
        this.incrementBtn = document.getElementById('incrementBtn');
        this.decrementBtn = document.getElementById('decrementBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.init();
    }
    init() {
        this.incrementBtn.addEventListener('click', () => this.increment());
        this.decrementBtn.addEventListener('click', () => this.decrement());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.updateDisplay();
    }
    increment() {
        this.counter++;
        this.updateDisplay();
    }
    decrement() {
        this.counter--;
        this.updateDisplay();
    }
    reset() {
        this.counter = 0;
        this.updateDisplay();
    }
    updateDisplay() {
        this.counterElement.textContent = this.counter.toString();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new CounterApp();
});
