import {CashMachineModel} from "../cash-machine-model";
import {CashMachineController} from "../cash-machine-controller";
import {CashMachineView} from "../cash-machine-view";

describe('controller', () => {

    beforeEach(() => {
        const fixture = `<div class="container">
        <div class="cash-machine-container">
            <input type="text" class="js-amount">
            <button class="js-cash-button withdraw-button">Withdraw money</button>
        </div>
        <div class="js-error error"></div>
        <ol clas`;

        document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    it('controller can be create', () => {
        const model: CashMachineModel = new CashMachineModel([100, 50, 20, 10]);
        const view: CashMachineView = new CashMachineView();
        const cashMachineController: CashMachineController = new CashMachineController(model, view);
        expect(cashMachineController).toBeTruthy();
    });

    it('should always deliver the lowest number of possible notes;', () => {
        const model: CashMachineModel = new CashMachineModel([100, 50, 20, 10]);
        const view: CashMachineView = new CashMachineView();
        const cashMachineController: CashMachineController = new CashMachineController(model, view);
        const rez: number[] = cashMachineController.sortByBanknotes([100, 50, 20, 10], 110);
        expect(rez).toEqual([100, 10]);
    });
});