const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const resolvers = require('./resolvers');
const { permissions } = require('./permissions');
const { getUser } = require('./utils');
const { importSchema } = require("graphql-import");
const address = importSchema("src/schema/address.graphql");
const bottle = importSchema("src/schema/bottle.graphql");
const discount = importSchema("src/schema/discount.graphql");
const product = importSchema("src/schema/product.graphql");
const productValidation = importSchema("src/schema/productValidation.graphql");
const userValidation = importSchema("src/schema/userValidation.graphql");
const query = importSchema("src/schema/query.graphql");
const transaction = importSchema("src/schema/transaction.graphql");
const user = importSchema("src/schema/user.graphql");
const mutation = importSchema("src/schema/mutation.graphql");





// const typeDef = address + bottle + discount + product + productValidation + userValidation + query + transaction + user + mutation

console.log(address , bottle, discount,' a++++++++++++++++++b')




// const typeDef = [transaction, user, query, productValidation,userValidation, product, discount, bottle, address]
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
