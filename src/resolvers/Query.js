
const Query = {
  me(parent, { where = {} }, { user: { id }, prisma }) {
    return prisma.user({ id })
  },
  customers(parent, { where, first }, { prisma }) {
    let query =  {};
    if(where) {
      query.where = {
        ...where,
        role: 'CUSTOMER'
      }
    }
    if(first) {
      query.first = first
    }
    return prisma.users(query)
  },
  customer(parent, args, { prisma }) {
    return prisma.user({id: args.where.id})
  },
  transactions(parent, args, { prisma }) {
    return prisma.transactions({
      where: {
        ...args.where 
      },
      orderBy: "createdAt_DESC" 
    })
  },
  transaction(parent, args, { prisma }) {
    return prisma.transaction({id: args.where.id})
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
