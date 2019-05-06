
const Query = {
  me(parent, args, { user : { id }, prisma }) {
    return prisma.user({ id })
  }
};

module.exports = { Query };
