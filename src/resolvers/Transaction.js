const Transaction = {
    user: ({ id }, args, context) => {
        return context.prisma.transaction({ id }).user()
    },
    payment: ({ id }, args, context) => {
        return context.prisma.transaction({ id }).payment()
    },
    items: ({ id }, args, context) => {
        return context.prisma.transaction({ id }).items()
    }
};

module.exports = {
    Transaction
};
