import { gql } from 'apollo-server';

export const variantDetailTypeDefs = gql`
    type VariantDetail {
        id: ID!
        size: String!
        quantity: Int!
        price: Float
        product_variant_id: ID!
        productVariant: ProductVariant!
        purchaseItems: [PurchaseItem!]!
        saleItems: [SaleItem!]!
    }

    extend type Query {
        variantDetail(id: ID!): VariantDetail
        variantDetails: [VariantDetail!]!
    }

    input CreateVariantDetailInput {
        size: String!
        quantity: Int!
        price: Float
        product_variant_id: ID!
    }

    input UpdateVariantDetailInput {
        size: String
        quantity: Int
        price: Float
        product_variant_id: ID
    }

    extend type Mutation {
        createVariantDetail(input: CreateVariantDetailInput!): VariantDetail!
        updateVariantDetail(id: ID!, input: UpdateVariantDetailInput!): VariantDetail!
        deleteVariantDetail(id: ID!): VariantDetail!
    }


`;