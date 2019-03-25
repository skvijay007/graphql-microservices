const { makeExecutableSchema } = require('graphql-tools');
const data = require('./data');

// SCHEMA DEFINITION
const typeDefs = `
type Query {
  item(id: ID!): Item
}
type Item {
  id: ID!
  product: String
  price: [Int]
}`

// RESOLVERS
const resolvers = {
	Query: {
		item: (root, args, context, info) => {
			return data.find(ele => ele.id == args.id);
		}
	},
}

// (EXECUTABLE) SCHEMA
module.exports = makeExecutableSchema({
	typeDefs,
	resolvers
});