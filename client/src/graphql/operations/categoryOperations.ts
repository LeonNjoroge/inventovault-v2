import { gql } from "@apollo/client";

// === QUERIES ===

// Get all categories
export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            id
            name
            description
            products {
                id
                name
            }
        }
    }
`;

// Get a single category by ID
export const GET_CATEGORY = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            id
            name
            description
            products {
                id
                name
            }
        }
    }
`;

// === MUTATIONS ===

// Create a new category
export const CREATE_CATEGORY = gql`
    mutation CreateCategory($input: CreateCategoryInput!) {
        createCategory(input: $input) {
            id
            name
            description
        }
    }
`;

// Update a category
export const UPDATE_CATEGORY = gql`
    mutation UpdateCategory($id: ID!, $input: UpdateCategoryInput!) {
        updateCategory(id: $id, input: $input) {
            id
            name
            description
        }
    }
`;

// Delete a category
export const DELETE_CATEGORY = gql`
    mutation DeleteCategory($id: ID!) {
        deleteCategory(id: $id) {
            id
            name
        }
    }
`;
