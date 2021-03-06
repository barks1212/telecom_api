const teleComProvider = require('./');

describe('Telecom Provider', () => {

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

        it('should return all phone numbers', () => {
            const customers = [{
                    phoneNumbers: [{
                        number: '1234',
                        activated: false
                    }, ],
                },
                {
                    phoneNumbers: [{
                        number: '91011',
                        activated: true
                    }, ],
                }
            ];

            const result = [{
                    number: '1234',
                    activated: false
                },
                {
                    number: '91011',
                    activated: true
                }
            ]


            const provider = teleComProvider(customers);
            const actual = provider.getAll();
            expect(actual).toEqual(result);
        })
    });

    describe('get all phone numbers of a single customer ', () => {
        const customers = [{
                id: '1',
                phoneNumbers: [{
                    number: '5678',
                    activated: true
                }],
            },
            {
                id: '2',
                phoneNumbers: [{
                    number: '91011',
                    activated: false
                }, ],
            }
        ];

        const provider = teleComProvider(customers);

        it('should throw an error if customer does not exist', () => {
            expect(() => provider.getNumberById()).toThrow();
        })
        it('should return the numbers belonging to the passed customer id', () => {

            const result = [{
                number: '91011',
                activated: false
            }]

            const actual = provider.getNumberById('2')
            expect(actual).toEqual(result);
        })
    });

    describe('activate number', () => {
        const customers = [{
            id: '1',
            phoneNumbers: [{
                number: '1234',
                activated: false
            }],
        }];

        const provider = teleComProvider(customers);

        it('should throw an error if customer phone number does not exist', () => {
            expect(() => provider.activateNumber('1', 'no exist')).toThrow();
        })

        it('should update when phone number exists', () => {
            const customerId = '1';
            const number = '1234';

            provider.activateNumber(customerId, number);

            expect(customers[0].phoneNumbers[0].activated).toBe(true);

        })
    })
});