const product = {
  async createProduct(parent, args, context) {
    return await context.prisma.createProduct({ ...args.data});
  }
};

module.exports = { product };
