const Subscription = {
  userSubscription: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .user({
          mutation_in: ['CREATED', 'UPDATED', 'DELETED'],
        })
        .node()
    },
    resolve: payload => {
      return payload
    },
  },
  transactionSubscription: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .transaction({
          mutation_in: ['CREATED', 'UPDATED', 'DELETED'],
        })
        .node()
    },
    resolve: payload => {
      return payload
    },
  }
};

module.exports = { Subscription };
