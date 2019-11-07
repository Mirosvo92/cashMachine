import {CashMachineModel} from "../cash-machine-model";

describe('model', () => {
    it('model can be create', () => {
        const cashMachineModel: CashMachineModel = new CashMachineModel([100, 50, 20, 10]);
        expect(cashMachineModel).toBeTruthy();
    });

    it('should has array of banknotes', () => {
        const cashMachineModel: CashMachineModel = new CashMachineModel([100, 50, 20, 10]);
        expect(cashMachineModel.availableNotes).toEqual([100, 50, 20, 10]);
    });
});