import { gql } from 'apollo-server';

export const purchaseItemTypeDefs = gql`
    type PurchaseItem {
        id: ID!
        purchase_id: String!
        variant_detail_id: String
        quantity: Int!
        cost_price: Float!
        purchase: Purchase!
        variantDetail: VariantDetail
        inventoryMovement: InventoryMovement
    }

    type Query {
        purchaseItem(id: ID!): PurchaseItem
        purchaseItems: [PurchaseItem!]!
    }

    input CreatePurchaseItemInput {
        purchase_id: String!
        variant_detail_id: String
        quantity: Int!
        cost_price: Float!
    }

    input UpdatePurchaseItemInput {
        purchase_id: String
        variant_detail_id: String
        quantity: Int
        cost_price: Float
    }

    type Mutation {
        createPurchaseItem(input: CreatePurchaseItemInput!): PurchaseItem!

        updatePurchaseItem(id: ID!, input: UpdatePurchaseItemInput!): PurchaseItem!

        deletePurchaseItem(id: ID!): PurchaseItem!
    }

`;