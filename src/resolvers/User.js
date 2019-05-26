const User = {
  address: ({ id }, args, context) => {
    return context.prisma.user({ id }).address()
  },
  transactions: ({ id }, { where, first }, context) => {
    let query =  {};
    if(where) {
      query.where = {
        ...where
      }
    }
    if(first) {
      query.first = first
    }
    return context.prisma.user({ id }).transactions(query)
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
