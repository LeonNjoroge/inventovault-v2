import { gql } from "@apollo/client";

// === QUERIES ===

// Get all sale items
export const GET_SALE_ITEMS = gql`
    query GetSaleItems {
        saleItems {
            id
            sale_id
            variant_detail_id
            quantity
            sale_price
            sale {
                id
                date
                total_amount
                payment_method
                customer_id
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

// Get a single sale item
export const GET_SALE_ITEM = gql`
    query GetSaleItem($id: ID!) {
        saleItem(id: $id) {
            id
            sale_id
            variant_detail_id
            quantity
            sale_price
            sale {
                id
                date
                total_amount
                payment_method
                customer_id
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

// Create a sale item
export const CREATE_SALE_ITEM = gql`
    mutation CreateSaleItem($input: CreateSaleItemInput!) {
        createSaleItem(input: $input) {
            id
            quantity
            sale_price
        }
    }
`;

// Update a sale item
export const UPDATE_SALE_ITEM = gql`
    mutation UpdateSaleItem($id: ID!, $input: UpdateSaleItemInput!) {
        updateSaleItem(id: $id, input: $input) {
            id
            quantity
            sale_price
        }
    }
`;

// Delete a sale item
export const DELETE_SALE_ITEM = gql`
    mutation DeleteSaleItem($id: ID!) {
        deleteSaleItem(id: $id) {
            id
        }
    }
`;
