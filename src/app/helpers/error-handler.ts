export class ErrorHandler {

    static checkAmount(amount: string): string {
        const amountStr: string = String(amount);
        const pattern: RegExp = /[1-9]/;
        const isAvailableNumb: boolean = !!pattern.test(amountStr[amountStr.length - 1]);
        if (Number(amount) < 0) {
            return 'InvalidArgumentException'
        } else if(isAvailableNumb) {
            return 'NoteUnavailableException';
        } else if(amount === null) {
            return 'Empty Set';
        }
    }

}