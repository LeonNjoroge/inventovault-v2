import { gql } from 'apollo-server';

export const inventoryMovementTypeDefs = gql`
    enum InventoryChangeType {
        PURCHASE
        SALE
        ADJUSTMENT
        RETURN
    }

    type InventoryMovement {
        id: ID!
        variant_id: String!
        purchase_item_id: String
        sale_item_id: String
        change_type: InventoryChangeType
        quantity_change: Int!
        comment: String
        created_at: String! # Consider using a custom scalar like DateTime

        variant: ProductVariant!
        purchaseItem: PurchaseItem
        saleItem: SaleItem
    }

    type Query {
        inventoryMovement(id: ID!): InventoryMovement
        inventoryMovements: [InventoryMovement!]!
    }

    input CreateInventoryMovementInput {
        variant_id: String!
        purchase_item_id: String
        sale_item_id: String
        change_type: InventoryChangeType
        quantity_change: Int!
        comment: String
    }

    input UpdateInventoryMovementInput {
        variant_id: String
        purchase_item_id: String
        sale_item_id: String
        change_type: InventoryChangeType
        quantity_change: Int
        comment: String
    }

    type Mutation {
        createInventoryMovement(input: CreateInventoryMovementInput!): InventoryMovement!

        updateInventoryMovement(id: ID!, input: UpdateInventoryMovementInput!): InventoryMovement!

        deleteInventoryMovement(id: ID!): InventoryMovement!
    }

`;