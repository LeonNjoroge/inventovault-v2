import { gql } from 'apollo-server';

export const productTypeDefs = gql`
    type Product {
        id: ID!
        name: String!
        sku: String!
        description: String
        price: Float!
        cost_price: Float
        created_at: String! # Consider using DateTime scalar
        categories: [Category!]
        variants: [ProductVariant!]
    }

    type Query {
        product(id: ID!): Product
        products: [Product!]!
    }

    input CreateProductInput {
        name: String!
        sku: String!
        description: String
        price: Float!
        cost_price: Float
    }

    input UpdateProductInput {
        name: String
        sku: String
        description: String
        price: Float
        cost_price: Float
    }

    type Mutation {
        createProduct(input: CreateProductInput!): Product!

        updateProduct(id: ID!, input: UpdateProductInput!): Product!

        deleteProduct(id: ID!): Product!
    }

`;