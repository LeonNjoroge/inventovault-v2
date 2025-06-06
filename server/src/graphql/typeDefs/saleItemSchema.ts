import { gql } from 'apollo-server';

export const saleItemTypeDefs = gql`
    type SaleItem {
        id: ID!
        sale_id: String!
        variant_detail_id: String!
        quantity: Int!
        sale_price: Float!
        sale: Sale!
        variantDetail: VariantDetail!
        inventoryMovement: InventoryMovement
    }

    type Query {
        saleItem(id: ID!): SaleItem
        saleItems: [SaleItem!]!
    }

    input CreateSaleItemInput {
        sale_id: String!
        variant_detail_id: String!
        quantity: Int!
        sale_price: Float!
    }

    input UpdateSaleItemInput {
        sale_id: String
        variant_detail_id: String
        quantity: Int
        sale_price: Float
    }

    type Mutation {
        createSaleItem(input: CreateSaleItemInput!): SaleItem!

        updateSaleItem(id: ID!, input: UpdateSaleItemInput!): SaleItem!

        deleteSaleItem(id: ID!): SaleItem!
    }

`;