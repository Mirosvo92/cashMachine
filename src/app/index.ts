import {CashMachineController} from "./cash-machine-controller";
import {CashMachineModel} from "./cash-machine-model";
import {CashMachineView} from "./cash-machine-view";

const cashMachine = new CashMachineController(new CashMachineModel([100, 50, 20, 10]), new CashMachineView());
