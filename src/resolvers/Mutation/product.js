const product = {
  async createProduct(parent, args, context) {
    return await context.prisma.createProduct({ ...args.data});
  },

  async deleteProduct(parent, args, context) {
    return await context.prisma.deleteProduct({ ...args.where });
  },

};

module.exports = { product };
