
const transactions = {
  async createTransaction(parent, args, context) {
    const { data: { user: { connect: { id } } } } = args;
    const result = await context.prisma.createTransaction({ ...args.data })
    await context.prisma.updateUser({
      data: {
        bottle: {
          update: {
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
    const { userID, edit, where: { id } } = args;
    let editedBalance = 0;
    if (edit) {
      const { data } = args;
      const { items } = data;
      const { update } = items;
      const dbItems = await context.prisma.transaction({ id: id }).items();
      const clientItems = update;
      clientItems.map((value) => {
        const { where, data } = value;
        const dbSingleItem = dbItems.find((value) => {
          return where.id === value.id
        })
        if (data.quantity !== dbSingleItem.quantity) {
          editedBalance = (data.quantity - dbSingleItem.quantity) + editedBalance;
        }

        if (data.bottleOut !== dbSingleItem.bottleOut) {
            editedBalance = editedBalance - (data.bottleOut - dbSingleItem.bottleOut);
        }
      })

    }
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
            balance: args.bottleBalance + editedBalance
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
