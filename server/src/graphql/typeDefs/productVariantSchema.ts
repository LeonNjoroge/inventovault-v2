import { gql } from 'apollo-server';

export const productVariantTypeDefs = gql`
    type ProductVariant {
        id: ID!
        name: String!
        product_id: String!
        product: Product!
        details: [VariantDetail!]!
        inventoryMovements: [InventoryMovement!]!
    }

    type Query {
        productVariant(id: ID!): ProductVariant
        productVariants: [ProductVariant!]!
    }

    input CreateProductVariantInput {
        name: String!
        product_id: String!
    }

    input UpdateProductVariantInput {
        name: String
        product_id: String
    }

    type Mutation {
        createProductVariant(input: CreateProductVariantInput!): ProductVariant!

        updateProductVariant(id: ID!, input: UpdateProductVariantInput!): ProductVariant!

        deleteProductVariant(id: ID!): ProductVariant!
    }

`;