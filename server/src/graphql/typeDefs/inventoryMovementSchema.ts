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
        product_id: String!
        purchase_item_id: String
        sale_item_id: String
        change_type: InventoryChangeType
        quantity_change: Int!
        comment: String
        created_at: String!

        product: Product!
        purchaseItem: PurchaseItem
        saleItem: SaleItem
    }

    extend type Query {
        inventoryMovement(id: ID!): InventoryMovement
        inventoryMovements: [InventoryMovement!]!
    }

    input CreateInventoryMovementInput {
        product_id: String!
        purchase_item_id: String
        sale_item_id: String
        change_type: InventoryChangeType
        quantity_change: Int!
        comment: String
    }

    input UpdateInventoryMovementInput {
        product_id: String
        purchase_item_id: String
        sale_item_id: String
        change_type: InventoryChangeType
        quantity_change: Int
        comment: String
    }

    extend type Mutation {
        createInventoryMovement(input: CreateInventoryMovementInput!): InventoryMovement!
        updateInventoryMovement(id: ID!, input: UpdateInventoryMovementInput!): InventoryMovement!
        deleteInventoryMovement(id: ID!): InventoryMovement!
    }
`;
