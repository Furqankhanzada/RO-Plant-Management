const Item = {
    product: ({ id }, args, context) => {
        return context.prisma.item({ id }).product()
    }
};

module.exports = {
    Item
};
