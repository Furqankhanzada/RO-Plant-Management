const Bottle = {
    bottleTransactions: ({ id }, args, context) => {
        return context.prisma.bottle({ id }).bottleTransactions()
    }
};

module.exports = {
    Bottle
};
