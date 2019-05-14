const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = {
  // async signup(parent, args, context) {
  //   const password = await bcrypt.hash(args.password, 10);
  //   const user = await context.prisma.createUser({ ...args, password });
  //
  //   return {
  //     token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  //     user,
  //   }
  // },

  async login(parent, { mobile, password }, context) {
    const user = await context.prisma.user({ mobile });
    if (!user) {
      throw new Error(`No user found for email: ${mobile}`)
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid password')
    }
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
};

module.exports = { auth }
