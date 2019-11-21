import {CashMachineModel} from "./cash-machine-model";
import {CashMachineView} from "./cash-machine-view";
import {ErrorHandler} from "./helpers/error-handler";


export class CashMachineController {

    constructor(private model: CashMachineModel, private view: CashMachineView) {
        const input: Element = document.querySelectorAll('.js-amount')[0];
        this.withdrawMoney(input, view.showWithdrawResult.bind(view));
        this.validateInput(input);
    }

    // sortByBanknotes(availableNotes: number[], amount: number): number[] {
    //     const banknotes: number[] = [];
    //     const notesLength: number = availableNotes.length;
    //     for (let i = 0; i < notesLength;) {
    //         if (amount - availableNotes[i] >= 0) {
    //             banknotes.push(availableNotes[i]);
    //             amount -= availableNotes[i];
    //         } else if (amount === 0) {
    //             break;
    //         } else {
    //             i++;
    //         }
    //     }
    //     console.log('banknotes', banknotes);
    //     return banknotes;
    // }

    sortByBanknotes(availableNotes: number[], amount: number): any {
        const banknotes: {[key in string] : number} = {};
        const notesLength: number = availableNotes.length;
        for (let i = 0; i < notesLength;) {
            if (amount / availableNotes[i] >= 1) {
                banknotes[availableNotes[i]] = Math.floor(amount / availableNotes[i]);
                amount -= Math.floor(amount / availableNotes[i]) * availableNotes[i];
            } else if (amount === 0) {
                break;
            }
            i++;
        }
        console.log('banknotes', banknotes);
        return banknotes;
    }

    private validateInput(input: Element): void {
        const regex=/^[0-9]+$/;
        input.addEventListener('keypress', (event: KeyboardEvent) => {
            if (!event.key.match(regex)) {
                event.preventDefault();
            }
        });
    }

    private withdrawMoney(input: Element, callback: (banknotesList: number[] | null, error?: string) => void): void {
        const button: Element = document.querySelectorAll('.js-cash-button')[0];
        button.addEventListener('click', () => {
            const moneyAmount = (input as HTMLInputElement).value;
            const error = ErrorHandler.checkAmount(moneyAmount);
            if (error) {
                callback(null, error);
            } else {
                const banknotesList = this.sortByBanknotes(this.model.availableNotes, Number(moneyAmount));
                callback(banknotesList);
            }
        });
    }
}