export class CashMachineView {

    private list: Element = document.querySelectorAll('.js-banknotes-list')[0];
    private errorEl: Element = document.querySelectorAll('.js-error')[0];

    constructor() {}

    showWithdrawResult(banknotesList: number[] | null, error: string): void {
        this.deleteBanknotesList();
        this.deleteError();
        if (error) {
            this.showError(error);
        } else {
            this.createBanknotesList(banknotesList);
        }
    }

    private deleteBanknotesList(): void {
        this.list.innerHTML = '';
    }

    private createBanknotesList(banknotesList: number[]): void {
        banknotesList.forEach( (banknote: number) => {
            const li: HTMLLIElement = document.createElement('li');
            li.innerHTML = String(banknote);
            this.list.append(li);
        });
    }

    private showError(error: string): never {
        this.errorEl.innerHTML = error;
        throw new Error(error);
    }

    private deleteError(): void {
        this.errorEl.innerHTML = '';
    }

}