import { gql } from 'apollo-server';

export const saleTypeDefs = gql`
    type Sale {
        id: ID!
        customer_id: String!
        date: String!
        total_amount: Float!
        saleItems: [SaleItem!]!
    }

    type Query {
        sale(id: ID!): Sale
        sales: [Sale!]!
    }

    input CreateSaleInput {
        customer_id: String!
        date: String!
        total_amount: Float!
    }

    input UpdateSaleInput {
        
        customer_id: String
        date: String
        total_amount: Float
    }

    type Mutation {
        createSale(input: CreateSaleInput!): Sale!

        updateSale(id: ID!, input: UpdateSaleInput!): Sale!

        deleteSale(id: ID!): Sale!
    }

`;