
const transactions = {
  async createTransaction(parent, args, context) {
    return await context.prisma.createTransaction({ ...args.data });
  },
  async updateTransaction(parent, args, context) {
    return await context.prisma.updateTransaction({
      data: args.data,
      where: {
        id: args.id
      }
    });
  },
  async deleteTransaction(parent, args, context) {
    return await context.prisma.deleteTransaction({ ...args.where });
  }
};

module.exports = { transactions };
