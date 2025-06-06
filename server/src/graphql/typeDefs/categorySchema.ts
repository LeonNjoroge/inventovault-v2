import { gql } from 'apollo-server';

export const categoryTypeDefs = gql`
    type Category {
        id: ID!
        name: String!
        description: String
        products: [Product!]
    }

    type Query {
        categories: [Category!]!
        category(id: ID!): Category
    }

    input CreateCategoryInput {
        name: String!
        description: String
    }

    input UpdateCategoryInput {
        name: String
        description: String
    }

    type Mutation {
        createCategory(input: CreateCategoryInput!): Category!
        updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
        deleteCategory(id: ID!): Category!
    }

`;