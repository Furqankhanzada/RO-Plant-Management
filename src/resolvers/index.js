const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
const { customers } = require('./Mutation/customers');
const { transactions } = require('./Mutation/transactions');
const { product } = require('./Mutation/product');

const { Subscription } = require('./Subscription');
const { User } = require('./User');
const { Discount } = require('./Discount');
const { Transaction } = require('./Transaction');
const { Item } = require('./Item');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...customers,
    ...transactions,
    ...product
  },
  Subscription,
  User,
  Discount,
  Transaction,
  Item
};
