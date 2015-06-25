describe 'Categories', () ->
    categories = {}
    beforeEach ->
        categories = new Categories()

    xit 'should be able to add two different numbers', () ->
        expect(calc.add 3,4 ).toBe 7

    xit 'should be able to subtract two numbers', () ->
        expect(calc.subtract 32,18 ).toBe 14

    xit 'should be able to multiply two numbers', () ->
        expect(calc.multiply 6,4 ).toBe 24

    xit 'should be able to divide two numbers', () ->
        expect(calc.divide 32,8 ).toBe 4

    xit 'should be able to divide to zero and receive Infinity', () ->
        expect(calc.divide 32,0 ).toBe Infinity

    xit 'should be able to divide to Infinity and receive zero', () ->
        expect(calc.divide 32,Infinity ).toBe 0
