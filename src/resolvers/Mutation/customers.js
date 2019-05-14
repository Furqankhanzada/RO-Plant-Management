const bcrypt = require('bcryptjs');

const customers = {
  async createCustomer(parent, args, context) {
    const password = await bcrypt.hash(args.data.password, 10);
    const role = 'CUSTOMER';
    return await context.prisma.createUser({ ...args.data, password, role });
  }
};

module.exports = { customers };
