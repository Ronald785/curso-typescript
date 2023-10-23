describe("Testando...", () => {
    it("descrição do teste (IT)", () => {
        const number = 1;
        expect(number).toBe(1);
    });

    test("descrição do teste (TESTE)", () => {
        const string = "Ronald";
        // expect(string).not.toBe("Ronald");
        expect(string).toBe("Ronald");
    });
});
