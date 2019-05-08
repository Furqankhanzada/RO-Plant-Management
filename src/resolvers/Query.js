
const Query = {
    me(parent, args, { user : { id }, prisma }) {
        return prisma.user({ id })
    },
    customers(parent, args, { prisma }) {
        return prisma.users({
            where: {
              role: 'CUSTOMER'
            }
        })
    }
};

module.exports = { Query };
