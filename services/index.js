
const getCustomer = (customerData, id) => {
    const customer = customerData.find(customer => customer.id === id);
    if(!customer) {
        throw new CustomerNotFound();
    }
    return customer;
}

const telecomProvider = (customerData = []) => ({
    getAll: () => (
         customerData.reduce((acc, customer) => {
            const numbers = customer.phoneNumbers.map(num => num.number);
            return acc.concat(numbers);
        }, [])
    ),
    getNumberById: (id) => {
        const customer = getCustomer(customerData, id);
        return customer.phoneNumbers.map(num => num.number);
    },
    activateNumber: id => {
        const result = getCustomer(customerData, id);
        return result;
    }
});

class CustomerNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomerNotFound";
    }
}



module.exports = telecomProvider;