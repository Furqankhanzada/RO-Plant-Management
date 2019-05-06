"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Address",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Discount",
    embedded: false
  },
  {
    name: "Transaction",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "TransactionType",
    embedded: false
  },
  {
    name: "TransactionStatus",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "PaymentMethod",
    embedded: false
  },
  {
    name: "PaymentStatus",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://ro-plant-d678feb064.herokuapp.com/ro-plant-backend/dev`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
