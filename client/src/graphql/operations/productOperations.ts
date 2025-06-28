import { gql } from "@apollo/client";

// === QUERIES ===

// Get all products
export const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            id
            name
            description
            created_at
            categories {
                id
                name
            }
            variants {
                id
                size
                quantity
                price
            }
            inventoryMovements {
                id
                change_type
                quantity_change
                created_at
            }
        }
    }
`;

// Get product by ID
export const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
        product(id: $id) {
            id
            name
            description
            created_at
            categories {
                id
                name
            }
            variants {
                id
                size
                quantity
                price
            }
            inventoryMovements {
                id
                change_type
                quantity_change
                created_at
            }
        }
    }
`;

// === MUTATIONS ===

// Create product
export const CREATE_PRODUCT = gql`
    mutation CreateProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
            id
            name
            description
            created_at
        }
    }
`;

// Update product
export const UPDATE_PRODUCT = gql`
    mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {
        updateProduct(id: $id, input: $input) {
            id
            name
            description
        }
    }
`;

// Delete product
export const DELETE_PRODUCT = gql`
    mutation DeleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            id
        }
    }
`;
