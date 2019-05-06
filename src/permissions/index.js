const { rule, and, shield } = require('graphql-shield')

const rules = {
    isAuthenticatedUser: rule()((parent, args, { user : { id } }) => {
        return Boolean(id)
    })
};

const permissions = shield({
    Query: {
        me: rules.isAuthenticatedUser
    }
});

module.exports = {
    permissions,
};
