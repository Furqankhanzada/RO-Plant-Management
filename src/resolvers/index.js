const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
const { customers } = require('./Mutation/customers');
const { product } = require('./Mutation/product');

const { Subscription } = require('./Subscription');
const { User } = require('./User');
const { Discount } = require('./Discount');
const { Transaction } = require('./Transaction');
const { Item } = require('./Item');
const { Bottle } = require('./Bottle');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...customers,
    ...product
  },
  Subscription,
  User,
  Discount,
  Transaction,
  Item,
  Bottle
};
