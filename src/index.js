const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const resolvers = require('./resolvers');
const { permissions } = require('./permissions');
const { getUser } = require('./utils');

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
    middlewares: [permissions],
    context: async request => {
    return {
      ...request,
      prisma,
      user: await getUser(request, prisma)
    }
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
