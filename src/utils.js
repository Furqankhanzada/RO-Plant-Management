const jwt = require('jsonwebtoken');

function getUserId(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId
  }

  throw new AuthError()
}

async function getUser(context, prisma) {
  try {
      const id = getUserId(context);
      const query = `
        query  {
          user(where: { id: "${id}" }) {
            id
            name
          }
        }`;
      const { user } = await prisma.$graphql(query);
      return user;
  } catch (e) {

  }
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

module.exports = {
  getUser
};
