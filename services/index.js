const getCustomer = (customerData, id) => {
    const customer = customerData.find(customer => customer.id === id);
    if (!customer) {
        throw new CustomerNotFound();
    }
    return customer;
}

const telecomProvider = (customerData = []) => ({
    getAll: () => (
        customerData.reduce((acc, customer) => {
            const numbers = customer.phoneNumbers
            return acc.concat(numbers);
        }, [])
    ),
    getNumberById: (id) => {
        const customer = getCustomer(customerData, id);
        return customer.phoneNumbers.map(num => num.number);
    },
    activateNumber: (id, phoneNumber) => {
        const customer = getCustomer(customerData, id);
        const number = customer.phoneNumbers.find(num => num.number === phoneNumber);

        if (!number) {
            throw new NumberNotFound();
        }
        number.activated = true;
    }
});

class CustomerNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomerNotFound";
    }
}

class NumberNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = "NumberNotFound";
    }
}



module.exports = telecomProvider;