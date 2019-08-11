const teleComProvider = require('./');

describe('get all phone numbers', () => {

    it('should return an empty array when customerData is empty', () => {
        const provider = teleComProvider([]);
        const result = provider.getAll();
        expect(result.length).toBe(0);
    });

    it('should return an empty array when customerData is undefined', () => {
        const provider = teleComProvider();
        const result = provider.getAll();
        expect(result.length).toBe(0);
    });

    it ('should return all phone numbers', () => {
        const customers = [{
            phoneNumbers: [{
                number: 1234,
            },
            {
                number: 5678,
            }],
        },
        {
            phoneNumbers: [{
                number: 91011
            },
            {
                number: 121314
            }],
        }];
        const provider = teleComProvider(customers);
        const result = provider.getAll();
        expect(result).toEqual([1234, 5678, 91011, 121314]);
    })
}); 