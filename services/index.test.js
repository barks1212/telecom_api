const teleComProvider = require('./');

describe('get all phone numbers', () => {

    const customers = [{
        id: '1',
        phoneNumbers: [{
            number: 1234,
            activated: false
        },
        {
            number: 5678,
            activated: false
        }],
    },
    {
        id: '2',
        phoneNumbers: [{
            number: 91011,
            activated: false
        },
        {
            number: 121314,
            activated: false
        }],
    }];

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
        const provider = teleComProvider(customers);
        const result = provider.getAll();
        expect(result).toEqual([1234, 5678, 91011, 121314]);
    })
}); 