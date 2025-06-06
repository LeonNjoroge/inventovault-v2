import { gql } from 'apollo-server';

export const purchaseTypeDefs = gql`
    type Purchase {
        id: ID!
        supplier_id: String!
        date: String!
        invoice_no: String
        supplier: Supplier!
        purchaseItems: [PurchaseItem!]!
    }

    type Query {
        purchase(id: ID!): Purchase
        purchases: [Purchase!]!
    }

    input CreatePurchaseInput {
        supplier_id: String!
        date: String!
        invoice_no: String
    }

    input UpdatePurchaseInput {
        supplier_id: String
        date: String
        invoice_no: String
    }

    type Mutation {
        createPurchase(input: CreatePurchaseInput!): Purchase!

        updatePurchase(id: ID!, input: UpdatePurchaseInput!): Purchase!

        deletePurchase(id: ID!): Purchase!
    }
`;