
const Query = {
    me(parent, { where = {}}, { user : { id }, prisma }) {
        return prisma.user({ id })
    },
    customers(parent, args, { prisma }) {
        return prisma.users({
            where: {
                ...args.where,
              role: 'CUSTOMER'
            }
        })
    }
};

module.exports = { Query };
