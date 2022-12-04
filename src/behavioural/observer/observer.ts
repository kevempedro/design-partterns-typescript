// Interface Observable
interface Observable {
    subscribe(...observers: Observer[]): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

// Interface Observer
interface Observer {
    update(...args: unknown[]): void;
}

// Concrete Observable
class InputObservable implements Observable {
    private observers: Observer[] = [];

    constructor(public element: HTMLInputElement) {}

    subscribe(...observers: Observer[]): void {
        observers.forEach(obesrver => {
            if (!this.observers.includes(obesrver)) {
                this.observers.push(obesrver)
            }
        });
    }

    unsubscribe(observer: Observer): void {
        const obesrverIndex = this.observers.indexOf(observer);

        if (obesrverIndex !== -1) {
            this.observers.splice(obesrverIndex, 1);
        }
    }

    notify(): void {
        this.observers.forEach(observer => observer.update(this))
    }
}

// Concrete Observer
class ParagraphObserver implements Observer {
    constructor(public element: HTMLParagraphElement) {}

    update(observable: Observable): void {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}

// Concrete Observer
class DivObserver implements Observer {
    constructor(public element: HTMLDivElement) {}

    update(observable: Observable): void {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}

// Client Code
function makeInput(): HTMLInputElement {
    const input = document.createElement('input');
    document.body.appendChild(input);

    return input;
}

function makeParagraph(): HTMLParagraphElement {
    const p = document.createElement('p');
    document.body.appendChild(p);

    p.innerText = 'Texto Parágrafo';

    return p;
}

function makeDiv(): HTMLDivElement {
    const div = document.createElement('div');
    document.body.appendChild(div);

    div.innerText = 'Texto Div';

    return div;
}


const input = new InputObservable(makeInput());

const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());

const div1 = new DivObserver(makeDiv());

input.subscribe(p1, p2, div1);

input.element.addEventListener('keyup', function() {
    input.notify();
});

input.unsubscribe(p2);

// npx tsc .\src\behavioural\observer\observer.ts -w
