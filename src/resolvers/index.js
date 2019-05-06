const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
const { Subscription } = require('./Subscription');
const { User } = require('./User');
const { Transaction } = require('./Transaction');

module.exports = {
  Query,
  Mutation: {
    ...auth,
  },
  Subscription,
  User,
  Transaction
};
