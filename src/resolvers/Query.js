
const Query = {
  me(parent, { where = {} }, { user: { id }, prisma }) {
    return prisma.user({ id })
  },
  customers(parent, args, { prisma }) {
    return prisma.users({
      where: {
        ...args.where,
        role: 'CUSTOMER'
      }
    })
  },
  customer(parent, args, { prisma }) {
    return prisma.user({id:args.where.id})
  },
  transactions(parent, args, { prisma }) {
    return prisma.transactions({
      where: {
        ...args.where
      }
    })
  },
  products(parent, args, { prisma }) {
    return prisma.products({
      where: {
        ...args.where
      }
    })
  }
};

module.exports = { Query };
