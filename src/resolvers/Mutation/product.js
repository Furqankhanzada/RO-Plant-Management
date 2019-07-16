const product = {
  async createProduct(parent, args, context) {
    return await context.prisma.createProduct({ ...args.data});
  },

  async deleteProduct(parent, args, context) {
    return await context.prisma.deleteProduct({ ...args.where });
  },

  async updateProduct(parent, args, context) {
    const result = await context.prisma.updateProduct({
      data: args.data,
      where: {
        id: args.id
      }
    });
    return result;
    },

};

module.exports = { product };
