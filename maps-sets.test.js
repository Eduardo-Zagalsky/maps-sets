describe("hasDuplicate", () => {
    it("should accept an array and returns true or false if that array contains a duplicate", () => {
        expect(hasDuplicate([1, 3, 2, 1])).toEqual(true);
        expect(hasDuplicate([1, 5, -1, 4])).toEqual(false);
    });
});