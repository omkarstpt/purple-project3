const typeDefs = 
  `type Poll {
    id: ID!
    question: String!
    options: [Option!]!
  }

  type Option {
    id: ID!
    name: String!
    votes: Float!
  }

  type Query {
    polls: [Poll!]!
    poll(pollId: ID!): Poll
    option(optionId: ID!): Option
  }

  type Mutation {
    addPoll(question: String!): Poll!
    addOption(name: String!, pollId: ID!): Option!
    vote(optionId: ID!): Option
  }`;

module.exports = typeDefs;