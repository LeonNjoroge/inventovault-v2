import { gql } from "@apollo/client";

// === ENUMS ===
export const INVENTORY_CHANGE_TYPE = {
    PURCHASE: "PURCHASE",
    SALE: "SALE",
    ADJUSTMENT: "ADJUSTMENT",
    RETURN: "RETURN",
} as const;

// === QUERIES ===

// Get all inventory movements
export const GET_INVENTORY_MOVEMENTS = gql`
    query GetInventoryMovements {
        inventoryMovements {
            id
            product_id
            purchase_item_id
            sale_item_id
            change_type
            quantity_change
            comment
            created_at
            product {
                id
                name
            }
        }
    }
`;

// Get single inventory movement by ID
export const GET_INVENTORY_MOVEMENT = gql`
    query GetInventoryMovement($id: ID!) {
        inventoryMovement(id: $id) {
            id
            product_id
            purchase_item_id
            sale_item_id
            change_type
            quantity_change
            comment
            created_at
            product {
                id
                name
            }
        }
    }
`;

// === MUTATIONS ===

// Create a new inventory movement
export const CREATE_INVENTORY_MOVEMENT = gql`
    mutation CreateInventoryMovement($input: CreateInventoryMovementInput!) {
        createInventoryMovement(input: $input) {
            id
            quantity_change
            change_type
            comment
        }
    }
`;

// Update inventory movement
export const UPDATE_INVENTORY_MOVEMENT = gql`
    mutation UpdateInventoryMovement($id: ID!, $input: UpdateInventoryMovementInput!) {
        updateInventoryMovement(id: $id, input: $input) {
            id
            quantity_change
            change_type
            comment
        }
    }
`;

// Delete inventory movement
export const DELETE_INVENTORY_MOVEMENT = gql`
    mutation DeleteInventoryMovement($id: ID!) {
        deleteInventoryMovement(id: $id) {
            id
        }
    }
`;
