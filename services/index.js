
const telecomProvider = (customerData = []) => ({
    getAll: () => {
        return customerData.reduce((acc, customer) => {
            const numbers = customer.phoneNumbers.map(num => num.number);
            return acc.concat(numbers);
        }, [])
    },
    getNumberById: () => {

    },
    activateNumber: () => {

    }
});

module.exports = telecomProvider;