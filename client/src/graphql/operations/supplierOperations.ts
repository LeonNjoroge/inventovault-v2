import { gql } from "@apollo/client";

// === QUERIES ===

// Get all suppliers
export const GET_SUPPLIERS = gql`
    query GetSuppliers {
        suppliers {
            id
            name
            contact_info
            purchases {
                id
                date
                invoice_no
            }
        }
    }
`;

// Get a single supplier
export const GET_SUPPLIER = gql`
    query GetSupplier($id: ID!) {
        supplier(id: $id) {
            id
            name
            contact_info
            purchases {
                id
                date
                invoice_no
            }
        }
    }
`;

// === MUTATIONS ===

// Create a supplier
export const CREATE_SUPPLIER = gql`
    mutation CreateSupplier($input: CreateSupplierInput!) {
        createSupplier(input: $input) {
            id
            name
            contact_info
        }
    }
`;

// Update a supplier
export const UPDATE_SUPPLIER = gql`
    mutation UpdateSupplier($id: ID!, $input: UpdateSupplierInput!) {
        updateSupplier(id: $id, input: $input) {
            id
            name
            contact_info
        }
    }
`;

// Delete a supplier
export const DELETE_SUPPLIER = gql`
    mutation DeleteSupplier($id: ID!) {
        deleteSupplier(id: $id) {
            id
        }
    }
`;
