const User = {
    address: ({ id }, args, context) => {
        return context.prisma.user({ id }).address()
    },
    transactions: ({ id }, args, context) => {
        return context.prisma.user({ id }).transactions()
    }
};

module.exports = {
  User
};
