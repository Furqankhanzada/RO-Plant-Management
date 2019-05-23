const Discount = {
    product: ({ id }, args, context) => {
        return context.prisma.discount({ id }).product()
    }
};

module.exports = {
    Discount
};