class CounterApp {
    private counter: number = 0;
    private counterElement: HTMLElement;
    private incrementBtn: HTMLButtonElement;
    private decrementBtn: HTMLButtonElement;
    private resetBtn: HTMLButtonElement;

    constructor() {
        this.counterElement = document.getElementById('counter') as HTMLElement;
        this.incrementBtn = document.getElementById('incrementBtn') as HTMLButtonElement;
        this.decrementBtn = document.getElementById('decrementBtn') as HTMLButtonElement;
        this.resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
        
        this.init();
    }

    private init(): void {
        this.incrementBtn.addEventListener('click', () => this.increment());
        this.decrementBtn.addEventListener('click', () => this.decrement());
        this.resetBtn.addEventListener('click', () => this.reset());
        
        this.updateDisplay();
    }

    private increment(): void {
        this.counter++;
        this.updateDisplay();
    }

    private decrement(): void {
        this.counter--;
        this.updateDisplay();
    }

    private reset(): void {
        this.counter = 0;
        this.updateDisplay();
    }

    private updateDisplay(): void {
        this.counterElement.textContent = this.counter.toString();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CounterApp();
});