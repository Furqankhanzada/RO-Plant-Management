const bcrypt = require('bcryptjs');

const customers = {
    async createCustomer(parent, args, context) {
        const password = await bcrypt.hash(args.data.password, 10);
        const role = 'CUSTOMER';
        args.data.bottle = {
            create: {
                balance: 0
            }
        };
        return await context.prisma.createUser({ ...args.data, password, role });
    },
    async updateCustomer(parent, args, context) {
        const result = await context.prisma.updateUser({
            data: args.data,
            where: {
                id: args.id
            }
        });
        return result;
    },
    async deleteCustomer(parent, args, context) {
        return await context.prisma.deleteUser({ ...args.where });
    }
};

module.exports = { customers };
