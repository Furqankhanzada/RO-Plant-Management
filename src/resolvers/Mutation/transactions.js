
const transactions = {
  async createTransaction(parent, args, context) {
    const { data:{user:{connect:{id}}} } = args;
    const result = await context.prisma.createTransaction({ ...args.data })
    await context.prisma.updateUser({
      data: {
        bottle:{
          update:{
            balance: args.bottleBalance
          }
        }
      },
      where: {
        id
      }
    });
    return result
    
  },
  async updateTransaction(parent, args, context) {
    const { userID } = args;
    const result = await context.prisma.updateTransaction({
      data: args.data,
      where: {
        ...args.where
      }
    });
    await context.prisma.updateUser({
      data: {
        bottle:{
          update:{
            balance: args.bottleBalance
          }
        }
      },
      where: {
        id: userID
      }
    });
    return result
  },
  async deleteTransaction(parent, args, context) {
    return await context.prisma.deleteTransaction({ ...args.where });
  }
};

module.exports = { transactions };
