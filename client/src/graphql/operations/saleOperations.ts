import { gql } from "@apollo/client";

// === QUERIES ===

// Get all sales
export const GET_SALES = gql`
    query GetSales {
        sales {
            id
            customer_id
            date
            total_amount
            saleItems {
                id
                quantity
                sale_price
                variantDetail {
                    id
                    size
                    price
                }
            }
        }
    }
`;

// Get a single sale by ID
export const GET_SALE = gql`
    query GetSale($id: ID!) {
        sale(id: $id) {
            id
            customer_id
            date
            total_amount
            saleItems {
                id
                quantity
                sale_price
            }
        }
    }
`;

// === MUTATIONS ===

// Create a new sale
export const CREATE_SALE = gql`
    mutation CreateSale($input: CreateSaleInput!) {
        createSale(input: $input) {
            id
            customer_id
            date
            total_amount
        }
    }
`;

// Update a sale
export const UPDATE_SALE = gql`
    mutation UpdateSale($id: ID!, $input: UpdateSaleInput!) {
        updateSale(id: $id, input: $input) {
            id
            customer_id
            date
            total_amount
        }
    }
`;

// Delete a sale
export const DELETE_SALE = gql`
    mutation DeleteSale($id: ID!) {
        deleteSale(id: $id) {
            id
        }
    }
`;
