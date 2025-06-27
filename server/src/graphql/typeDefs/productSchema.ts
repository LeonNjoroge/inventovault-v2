import { gql } from 'apollo-server';

export const productTypeDefs = gql`
    type Product {
        id: ID!
        name: String!
        description: String
        created_at: String! # Or use a custom scalar like DateTime
        categories: [Category!]
        variants: [VariantDetail!]
        inventoryMovements: [InventoryMovement!]
    }

    extend type Query {
        product(id: ID!): Product
        products: [Product!]!
    }

    input CreateProductInput {
        name: String!
        description: String
    }

    input UpdateProductInput {
        name: String
        description: String
    }

    extend type Mutation {
        createProduct(input: CreateProductInput!): Product!
        updateProduct(id: ID!, input: UpdateProductInput!): Product!
        deleteProduct(id: ID!): Product!
    }
`;
