const User = {
    address: ({ id }, args, context) => {
        return context.prisma.user({ id }).address()
    },
    transactions: ({ id }, args, context) => {
        return context.prisma.user({ id }).transactions()
    },
    bottle: ({ id }, args, context) => {
        return context.prisma.user({ id }).bottle()
    },
    discounts: ({ id }, args, context) => {
        return context.prisma.user({ id }).discounts()
    }
};

module.exports = {
  User
};
