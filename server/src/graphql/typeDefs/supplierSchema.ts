import { gql } from 'apollo-server';

export const supplierTypeDefs = gql`
    type Supplier {
        id: ID!
        name: String!
        contact_info: String
        purchases: [Purchase!]!
    }

    type Query {
        supplier(id: ID!): Supplier
        suppliers: [Supplier!]!
    }

    input CreateSupplierInput {
        name: String!
        contact_info: String
    }

    input UpdateSupplierInput {
        name: String
        contact_info: String
    }

    type Mutation {
        createSupplier(input: CreateSupplierInput!): Supplier!
        updateSupplier(id: ID!, input: UpdateSupplierInput!): Supplier!
        deleteSupplier(id: ID!): Supplier!
    }

`;