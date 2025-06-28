import { gql } from "@apollo/client";

// === QUERIES ===

// Get all purchase items
export const GET_PURCHASE_ITEMS = gql`
    query GetPurchaseItems {
        purchaseItems {
            id
            purchase_id
            variant_detail_id
            quantity
            cost_price
            purchase {
                id
                date
            }
            variantDetail {
                id
                size
                price
            }
            inventoryMovement {
                id
                change_type
                quantity_change
                created_at
            }
        }
    }
`;

// Get single purchase item by ID
export const GET_PURCHASE_ITEM = gql`
    query GetPurchaseItem($id: ID!) {
        purchaseItem(id: $id) {
            id
            purchase_id
            variant_detail_id
            quantity
            cost_price
            purchase {
                id
                date
            }
            variantDetail {
                id
                size
                price
            }
            inventoryMovement {
                id
                change_type
                quantity_change
                created_at
            }
        }
    }
`;

// === MUTATIONS ===

// Create purchase item
export const CREATE_PURCHASE_ITEM = gql`
    mutation CreatePurchaseItem($input: CreatePurchaseItemInput!) {
        createPurchaseItem(input: $input) {
            id
            quantity
            cost_price
        }
    }
`;

// Update purchase item
export const UPDATE_PURCHASE_ITEM = gql`
    mutation UpdatePurchaseItem($id: ID!, $input: UpdatePurchaseItemInput!) {
        updatePurchaseItem(id: $id, input: $input) {
            id
            quantity
            cost_price
        }
    }
`;

// Delete purchase item
export const DELETE_PURCHASE_ITEM = gql`
    mutation DeletePurchaseItem($id: ID!) {
        deletePurchaseItem(id: $id) {
            id
        }
    }
`;
