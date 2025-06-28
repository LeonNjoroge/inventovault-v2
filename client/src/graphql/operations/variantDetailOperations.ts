import { gql } from "@apollo/client";

// === QUERIES ===

// Get all variant details
export const GET_VARIANT_DETAILS = gql`
    query GetVariantDetails {
        variantDetails {
            id
            size
            quantity
            price
            product_id
            product {
                id
                name
            }
            purchaseItems {
                id
                quantity
            }
            saleItems {
                id
                quantity
            }
        }
    }
`;

// Get a single variant detail by ID
export const GET_VARIANT_DETAIL = gql`
    query GetVariantDetail($id: ID!) {
        variantDetail(id: $id) {
            id
            size
            quantity
            price
            product_id
            product {
                id
                name
            }
            purchaseItems {
                id
                quantity
            }
            saleItems {
                id
                quantity
            }
        }
    }
`;

// === MUTATIONS ===

// Create a variant detail
export const CREATE_VARIANT_DETAIL = gql`
    mutation CreateVariantDetail($input: CreateVariantDetailInput!) {
        createVariantDetail(input: $input) {
            id
            size
            quantity
            price
            product_id
        }
    }
`;

// Update a variant detail
export const UPDATE_VARIANT_DETAIL = gql`
    mutation UpdateVariantDetail($id: ID!, $input: UpdateVariantDetailInput!) {
        updateVariantDetail(id: $id, input: $input) {
            id
            size
            quantity
            price
            product_id
        }
    }
`;

// Delete a variant detail
export const DELETE_VARIANT_DETAIL = gql`
    mutation DeleteVariantDetail($id: ID!) {
        deleteVariantDetail(id: $id) {
            id
        }
    }
`;
