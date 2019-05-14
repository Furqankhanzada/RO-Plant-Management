const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
const { customers } = require('./Mutation/customers');
const { Subscription } = require('./Subscription');
const { User } = require('./User');
const { Transaction } = require('./Transaction');
const { Item } = require('./Item');
const { Bottle } = require('./Bottle');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...customers
  },
  Subscription,
  User,
  Transaction,
  Item,
  Bottle
};
