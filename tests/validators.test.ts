import { strValidator, urlValidator } from "../src/utility/Validators";

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

});

describe("urlValidator()", () => {
    it("Should return FALSE on invalid url", () => {
        let response : boolean = false;
        let strOne = "hxtp://google.com";
        let strTwo = "http://googlecom";
        let strThree = "hxtp://google.com";

        expect(urlValidator(strOne)).toBe(response);
        expect(urlValidator(strTwo)).toBe(response);
        expect(urlValidator(strThree)).toBe(response);
    });

    it("Should return TRUE on valid url", () => {
        let response : boolean = true;
        let strs : string[] = [];
        strs[0] = "https://google.com";
        strs[1] = "http://example.com";
        strs[2] = "http://test.myapp.com";
        strs[3] = "https://test.myapp.com/path/to/something";
        strs[4] = "http://test.myapp.com/path/to/something/";

        expect(urlValidator(strs[0])).toBe(response);
        expect(urlValidator(strs[1])).toBe(response);
        expect(urlValidator(strs[2])).toBe(response);
        expect(urlValidator(strs[3])).toBe(response);
        expect(urlValidator(strs[4])).toBe(response);
    });
})