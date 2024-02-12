import { strValidator } from "../src/utility/Validators";

describe('strValidator()', () =>{
    it('Should return FALSE in empty-undefined-null cases', async () => {
        let response : boolean = false;
        let emptyStr = "";
        let und = undefined;
        let nl = null;
        expect(strValidator(emptyStr)).toBe(response);
        expect(strValidator(und)).toBe(response);
        expect(strValidator(nl)).toBe(response);
    });
    it('Should return TRUE in valid cases', async () =>{
        let response : boolean = true;
        let strOne = "a";
        let strTwo = "2";
        let strThree = "data"
        expect(strValidator(strOne)).toBe(response);
        expect(strValidator(strTwo)).toBe(response);
        expect(strValidator(strThree)).toBe(response);

    });

})