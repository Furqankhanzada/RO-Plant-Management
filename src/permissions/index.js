const { rule, and, shield } = require('graphql-shield')

const rules = {
    isAuthenticated: rule()((parent, args, { user : { id } }) => {
        return Boolean(id)
    }),
    isAdmin : rule()(async (parent, args, { user : { role } }) => {
        return role === 'ADMIN'
    }),
    isCustomer : rule()(async (parent, args, { user : { role } }) => {
        return role === 'CUSTOMER'
    })
};

const permissions = shield({
    Query: {
        me: rules.isAuthenticated,
        customers: and(rules.isAuthenticated, rules.isAdmin),
        customer: rules.isAuthenticated,
        products: rules.isAuthenticated
    },
    Mutation: {
        createCustomer: and(rules.isAuthenticated, rules.isAdmin),
        updateCustomer: and(rules.isAuthenticated, rules.isAdmin),
        deleteCustomer: and(rules.isAuthenticated, rules.isAdmin),
        createProduct: and(rules.isAuthenticated, rules.isAdmin)
    },
});

module.exports = {
    permissions,
};
