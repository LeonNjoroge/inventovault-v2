/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query GetCategories {\n        categories {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetCategoriesDocument,
    "\n    query GetCategory($id: ID!) {\n        category(id: $id) {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetCategoryDocument,
    "\n    mutation CreateCategory($input: CreateCategoryInput!) {\n        createCategory(input: $input) {\n            id\n            name\n            description\n        }\n    }\n": typeof types.CreateCategoryDocument,
    "\n    mutation UpdateCategory($id: ID!, $input: UpdateCategoryInput!) {\n        updateCategory(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n": typeof types.UpdateCategoryDocument,
    "\n    mutation DeleteCategory($id: ID!) {\n        deleteCategory(id: $id) {\n            id\n            name\n        }\n    }\n": typeof types.DeleteCategoryDocument,
    "\n    query GetInventoryMovements {\n        inventoryMovements {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetInventoryMovementsDocument,
    "\n    query GetInventoryMovement($id: ID!) {\n        inventoryMovement(id: $id) {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetInventoryMovementDocument,
    "\n    mutation CreateInventoryMovement($input: CreateInventoryMovementInput!) {\n        createInventoryMovement(input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n": typeof types.CreateInventoryMovementDocument,
    "\n    mutation UpdateInventoryMovement($id: ID!, $input: UpdateInventoryMovementInput!) {\n        updateInventoryMovement(id: $id, input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n": typeof types.UpdateInventoryMovementDocument,
    "\n    mutation DeleteInventoryMovement($id: ID!) {\n        deleteInventoryMovement(id: $id) {\n            id\n        }\n    }\n": typeof types.DeleteInventoryMovementDocument,
    "\n    query GetProducts {\n        products {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": typeof types.GetProductsDocument,
    "\n    query GetProduct($id: ID!) {\n        product(id: $id) {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": typeof types.GetProductDocument,
    "\n    mutation CreateProduct($input: CreateProductInput!) {\n        createProduct(input: $input) {\n            id\n            name\n            description\n            created_at\n        }\n    }\n": typeof types.CreateProductDocument,
    "\n    mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {\n        updateProduct(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n": typeof types.UpdateProductDocument,
    "\n    mutation DeleteProduct($id: ID!) {\n        deleteProduct(id: $id) {\n            id\n        }\n    }\n": typeof types.DeleteProductDocument,
    "\n    query GetPurchaseItems {\n        purchaseItems {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": typeof types.GetPurchaseItemsDocument,
    "\n    query GetPurchaseItem($id: ID!) {\n        purchaseItem(id: $id) {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": typeof types.GetPurchaseItemDocument,
    "\n    mutation CreatePurchaseItem($input: CreatePurchaseItemInput!) {\n        createPurchaseItem(input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n": typeof types.CreatePurchaseItemDocument,
    "\n    mutation UpdatePurchaseItem($id: ID!, $input: UpdatePurchaseItemInput!) {\n        updatePurchaseItem(id: $id, input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n": typeof types.UpdatePurchaseItemDocument,
    "\n    mutation DeletePurchaseItem($id: ID!) {\n        deletePurchaseItem(id: $id) {\n            id\n        }\n    }\n": typeof types.DeletePurchaseItemDocument,
    "\n    query GetSaleItems {\n        saleItems {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": typeof types.GetSaleItemsDocument,
    "\n    query GetSaleItem($id: ID!) {\n        saleItem(id: $id) {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": typeof types.GetSaleItemDocument,
    "\n    mutation CreateSaleItem($input: CreateSaleItemInput!) {\n        createSaleItem(input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n": typeof types.CreateSaleItemDocument,
    "\n    mutation UpdateSaleItem($id: ID!, $input: UpdateSaleItemInput!) {\n        updateSaleItem(id: $id, input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n": typeof types.UpdateSaleItemDocument,
    "\n    mutation DeleteSaleItem($id: ID!) {\n        deleteSaleItem(id: $id) {\n            id\n        }\n    }\n": typeof types.DeleteSaleItemDocument,
    "\n    query GetSales {\n        sales {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n                variantDetail {\n                    id\n                    size\n                    price\n                }\n            }\n        }\n    }\n": typeof types.GetSalesDocument,
    "\n    query GetSale($id: ID!) {\n        sale(id: $id) {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n            }\n        }\n    }\n": typeof types.GetSaleDocument,
    "\n    mutation CreateSale($input: CreateSaleInput!) {\n        createSale(input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n": typeof types.CreateSaleDocument,
    "\n    mutation UpdateSale($id: ID!, $input: UpdateSaleInput!) {\n        updateSale(id: $id, input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n": typeof types.UpdateSaleDocument,
    "\n    mutation DeleteSale($id: ID!) {\n        deleteSale(id: $id) {\n            id\n        }\n    }\n": typeof types.DeleteSaleDocument,
    "\n    query GetSuppliers {\n        suppliers {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n": typeof types.GetSuppliersDocument,
    "\n    query GetSupplier($id: ID!) {\n        supplier(id: $id) {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n": typeof types.GetSupplierDocument,
    "\n    mutation CreateSupplier($input: CreateSupplierInput!) {\n        createSupplier(input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n": typeof types.CreateSupplierDocument,
    "\n    mutation UpdateSupplier($id: ID!, $input: UpdateSupplierInput!) {\n        updateSupplier(id: $id, input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n": typeof types.UpdateSupplierDocument,
    "\n    mutation DeleteSupplier($id: ID!) {\n        deleteSupplier(id: $id) {\n            id\n        }\n    }\n": typeof types.DeleteSupplierDocument,
    "\n    query GetVariantDetails {\n        variantDetails {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n": typeof types.GetVariantDetailsDocument,
    "\n    query GetVariantDetail($id: ID!) {\n        variantDetail(id: $id) {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n": typeof types.GetVariantDetailDocument,
    "\n    mutation CreateVariantDetail($input: CreateVariantDetailInput!) {\n        createVariantDetail(input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n": typeof types.CreateVariantDetailDocument,
    "\n    mutation UpdateVariantDetail($id: ID!, $input: UpdateVariantDetailInput!) {\n        updateVariantDetail(id: $id, input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n": typeof types.UpdateVariantDetailDocument,
    "\n    mutation DeleteVariantDetail($id: ID!) {\n        deleteVariantDetail(id: $id) {\n            id\n        }\n    }\n": typeof types.DeleteVariantDetailDocument,
};
const documents: Documents = {
    "\n    query GetCategories {\n        categories {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n": types.GetCategoriesDocument,
    "\n    query GetCategory($id: ID!) {\n        category(id: $id) {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n": types.GetCategoryDocument,
    "\n    mutation CreateCategory($input: CreateCategoryInput!) {\n        createCategory(input: $input) {\n            id\n            name\n            description\n        }\n    }\n": types.CreateCategoryDocument,
    "\n    mutation UpdateCategory($id: ID!, $input: UpdateCategoryInput!) {\n        updateCategory(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n": types.UpdateCategoryDocument,
    "\n    mutation DeleteCategory($id: ID!) {\n        deleteCategory(id: $id) {\n            id\n            name\n        }\n    }\n": types.DeleteCategoryDocument,
    "\n    query GetInventoryMovements {\n        inventoryMovements {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n": types.GetInventoryMovementsDocument,
    "\n    query GetInventoryMovement($id: ID!) {\n        inventoryMovement(id: $id) {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n": types.GetInventoryMovementDocument,
    "\n    mutation CreateInventoryMovement($input: CreateInventoryMovementInput!) {\n        createInventoryMovement(input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n": types.CreateInventoryMovementDocument,
    "\n    mutation UpdateInventoryMovement($id: ID!, $input: UpdateInventoryMovementInput!) {\n        updateInventoryMovement(id: $id, input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n": types.UpdateInventoryMovementDocument,
    "\n    mutation DeleteInventoryMovement($id: ID!) {\n        deleteInventoryMovement(id: $id) {\n            id\n        }\n    }\n": types.DeleteInventoryMovementDocument,
    "\n    query GetProducts {\n        products {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": types.GetProductsDocument,
    "\n    query GetProduct($id: ID!) {\n        product(id: $id) {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": types.GetProductDocument,
    "\n    mutation CreateProduct($input: CreateProductInput!) {\n        createProduct(input: $input) {\n            id\n            name\n            description\n            created_at\n        }\n    }\n": types.CreateProductDocument,
    "\n    mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {\n        updateProduct(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n": types.UpdateProductDocument,
    "\n    mutation DeleteProduct($id: ID!) {\n        deleteProduct(id: $id) {\n            id\n        }\n    }\n": types.DeleteProductDocument,
    "\n    query GetPurchaseItems {\n        purchaseItems {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": types.GetPurchaseItemsDocument,
    "\n    query GetPurchaseItem($id: ID!) {\n        purchaseItem(id: $id) {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": types.GetPurchaseItemDocument,
    "\n    mutation CreatePurchaseItem($input: CreatePurchaseItemInput!) {\n        createPurchaseItem(input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n": types.CreatePurchaseItemDocument,
    "\n    mutation UpdatePurchaseItem($id: ID!, $input: UpdatePurchaseItemInput!) {\n        updatePurchaseItem(id: $id, input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n": types.UpdatePurchaseItemDocument,
    "\n    mutation DeletePurchaseItem($id: ID!) {\n        deletePurchaseItem(id: $id) {\n            id\n        }\n    }\n": types.DeletePurchaseItemDocument,
    "\n    query GetSaleItems {\n        saleItems {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": types.GetSaleItemsDocument,
    "\n    query GetSaleItem($id: ID!) {\n        saleItem(id: $id) {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n": types.GetSaleItemDocument,
    "\n    mutation CreateSaleItem($input: CreateSaleItemInput!) {\n        createSaleItem(input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n": types.CreateSaleItemDocument,
    "\n    mutation UpdateSaleItem($id: ID!, $input: UpdateSaleItemInput!) {\n        updateSaleItem(id: $id, input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n": types.UpdateSaleItemDocument,
    "\n    mutation DeleteSaleItem($id: ID!) {\n        deleteSaleItem(id: $id) {\n            id\n        }\n    }\n": types.DeleteSaleItemDocument,
    "\n    query GetSales {\n        sales {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n                variantDetail {\n                    id\n                    size\n                    price\n                }\n            }\n        }\n    }\n": types.GetSalesDocument,
    "\n    query GetSale($id: ID!) {\n        sale(id: $id) {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n            }\n        }\n    }\n": types.GetSaleDocument,
    "\n    mutation CreateSale($input: CreateSaleInput!) {\n        createSale(input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n": types.CreateSaleDocument,
    "\n    mutation UpdateSale($id: ID!, $input: UpdateSaleInput!) {\n        updateSale(id: $id, input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n": types.UpdateSaleDocument,
    "\n    mutation DeleteSale($id: ID!) {\n        deleteSale(id: $id) {\n            id\n        }\n    }\n": types.DeleteSaleDocument,
    "\n    query GetSuppliers {\n        suppliers {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n": types.GetSuppliersDocument,
    "\n    query GetSupplier($id: ID!) {\n        supplier(id: $id) {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n": types.GetSupplierDocument,
    "\n    mutation CreateSupplier($input: CreateSupplierInput!) {\n        createSupplier(input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n": types.CreateSupplierDocument,
    "\n    mutation UpdateSupplier($id: ID!, $input: UpdateSupplierInput!) {\n        updateSupplier(id: $id, input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n": types.UpdateSupplierDocument,
    "\n    mutation DeleteSupplier($id: ID!) {\n        deleteSupplier(id: $id) {\n            id\n        }\n    }\n": types.DeleteSupplierDocument,
    "\n    query GetVariantDetails {\n        variantDetails {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n": types.GetVariantDetailsDocument,
    "\n    query GetVariantDetail($id: ID!) {\n        variantDetail(id: $id) {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n": types.GetVariantDetailDocument,
    "\n    mutation CreateVariantDetail($input: CreateVariantDetailInput!) {\n        createVariantDetail(input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n": types.CreateVariantDetailDocument,
    "\n    mutation UpdateVariantDetail($id: ID!, $input: UpdateVariantDetailInput!) {\n        updateVariantDetail(id: $id, input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n": types.UpdateVariantDetailDocument,
    "\n    mutation DeleteVariantDetail($id: ID!) {\n        deleteVariantDetail(id: $id) {\n            id\n        }\n    }\n": types.DeleteVariantDetailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCategories {\n        categories {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCategories {\n        categories {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCategory($id: ID!) {\n        category(id: $id) {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCategory($id: ID!) {\n        category(id: $id) {\n            id\n            name\n            description\n            products {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateCategory($input: CreateCategoryInput!) {\n        createCategory(input: $input) {\n            id\n            name\n            description\n        }\n    }\n"): (typeof documents)["\n    mutation CreateCategory($input: CreateCategoryInput!) {\n        createCategory(input: $input) {\n            id\n            name\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateCategory($id: ID!, $input: UpdateCategoryInput!) {\n        updateCategory(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateCategory($id: ID!, $input: UpdateCategoryInput!) {\n        updateCategory(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteCategory($id: ID!) {\n        deleteCategory(id: $id) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteCategory($id: ID!) {\n        deleteCategory(id: $id) {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetInventoryMovements {\n        inventoryMovements {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetInventoryMovements {\n        inventoryMovements {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetInventoryMovement($id: ID!) {\n        inventoryMovement(id: $id) {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetInventoryMovement($id: ID!) {\n        inventoryMovement(id: $id) {\n            id\n            product_id\n            purchase_item_id\n            sale_item_id\n            change_type\n            quantity_change\n            comment\n            created_at\n            product {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateInventoryMovement($input: CreateInventoryMovementInput!) {\n        createInventoryMovement(input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n"): (typeof documents)["\n    mutation CreateInventoryMovement($input: CreateInventoryMovementInput!) {\n        createInventoryMovement(input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateInventoryMovement($id: ID!, $input: UpdateInventoryMovementInput!) {\n        updateInventoryMovement(id: $id, input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateInventoryMovement($id: ID!, $input: UpdateInventoryMovementInput!) {\n        updateInventoryMovement(id: $id, input: $input) {\n            id\n            quantity_change\n            change_type\n            comment\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteInventoryMovement($id: ID!) {\n        deleteInventoryMovement(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteInventoryMovement($id: ID!) {\n        deleteInventoryMovement(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProducts {\n        products {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProducts {\n        products {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProduct($id: ID!) {\n        product(id: $id) {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProduct($id: ID!) {\n        product(id: $id) {\n            id\n            name\n            description\n            created_at\n            categories {\n                id\n                name\n            }\n            variants {\n                id\n                size\n                quantity\n                price\n            }\n            inventoryMovements {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateProduct($input: CreateProductInput!) {\n        createProduct(input: $input) {\n            id\n            name\n            description\n            created_at\n        }\n    }\n"): (typeof documents)["\n    mutation CreateProduct($input: CreateProductInput!) {\n        createProduct(input: $input) {\n            id\n            name\n            description\n            created_at\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {\n        updateProduct(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {\n        updateProduct(id: $id, input: $input) {\n            id\n            name\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteProduct($id: ID!) {\n        deleteProduct(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteProduct($id: ID!) {\n        deleteProduct(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPurchaseItems {\n        purchaseItems {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPurchaseItems {\n        purchaseItems {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPurchaseItem($id: ID!) {\n        purchaseItem(id: $id) {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPurchaseItem($id: ID!) {\n        purchaseItem(id: $id) {\n            id\n            purchase_id\n            variant_detail_id\n            quantity\n            cost_price\n            purchase {\n                id\n                date\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreatePurchaseItem($input: CreatePurchaseItemInput!) {\n        createPurchaseItem(input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n"): (typeof documents)["\n    mutation CreatePurchaseItem($input: CreatePurchaseItemInput!) {\n        createPurchaseItem(input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdatePurchaseItem($id: ID!, $input: UpdatePurchaseItemInput!) {\n        updatePurchaseItem(id: $id, input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n"): (typeof documents)["\n    mutation UpdatePurchaseItem($id: ID!, $input: UpdatePurchaseItemInput!) {\n        updatePurchaseItem(id: $id, input: $input) {\n            id\n            quantity\n            cost_price\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeletePurchaseItem($id: ID!) {\n        deletePurchaseItem(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeletePurchaseItem($id: ID!) {\n        deletePurchaseItem(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSaleItems {\n        saleItems {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSaleItems {\n        saleItems {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSaleItem($id: ID!) {\n        saleItem(id: $id) {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSaleItem($id: ID!) {\n        saleItem(id: $id) {\n            id\n            sale_id\n            variant_detail_id\n            quantity\n            sale_price\n            sale {\n                id\n                date\n                total_amount\n                customer_id\n            }\n            variantDetail {\n                id\n                size\n                price\n            }\n            inventoryMovement {\n                id\n                change_type\n                quantity_change\n                created_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateSaleItem($input: CreateSaleItemInput!) {\n        createSaleItem(input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n"): (typeof documents)["\n    mutation CreateSaleItem($input: CreateSaleItemInput!) {\n        createSaleItem(input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateSaleItem($id: ID!, $input: UpdateSaleItemInput!) {\n        updateSaleItem(id: $id, input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateSaleItem($id: ID!, $input: UpdateSaleItemInput!) {\n        updateSaleItem(id: $id, input: $input) {\n            id\n            quantity\n            sale_price\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteSaleItem($id: ID!) {\n        deleteSaleItem(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteSaleItem($id: ID!) {\n        deleteSaleItem(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSales {\n        sales {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n                variantDetail {\n                    id\n                    size\n                    price\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSales {\n        sales {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n                variantDetail {\n                    id\n                    size\n                    price\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSale($id: ID!) {\n        sale(id: $id) {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSale($id: ID!) {\n        sale(id: $id) {\n            id\n            customer_id\n            date\n            total_amount\n            saleItems {\n                id\n                quantity\n                sale_price\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateSale($input: CreateSaleInput!) {\n        createSale(input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n"): (typeof documents)["\n    mutation CreateSale($input: CreateSaleInput!) {\n        createSale(input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateSale($id: ID!, $input: UpdateSaleInput!) {\n        updateSale(id: $id, input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateSale($id: ID!, $input: UpdateSaleInput!) {\n        updateSale(id: $id, input: $input) {\n            id\n            customer_id\n            date\n            total_amount\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteSale($id: ID!) {\n        deleteSale(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteSale($id: ID!) {\n        deleteSale(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSuppliers {\n        suppliers {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSuppliers {\n        suppliers {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSupplier($id: ID!) {\n        supplier(id: $id) {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSupplier($id: ID!) {\n        supplier(id: $id) {\n            id\n            name\n            contact_info\n            purchases {\n                id\n                date\n                invoice_no\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateSupplier($input: CreateSupplierInput!) {\n        createSupplier(input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n"): (typeof documents)["\n    mutation CreateSupplier($input: CreateSupplierInput!) {\n        createSupplier(input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateSupplier($id: ID!, $input: UpdateSupplierInput!) {\n        updateSupplier(id: $id, input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateSupplier($id: ID!, $input: UpdateSupplierInput!) {\n        updateSupplier(id: $id, input: $input) {\n            id\n            name\n            contact_info\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteSupplier($id: ID!) {\n        deleteSupplier(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteSupplier($id: ID!) {\n        deleteSupplier(id: $id) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetVariantDetails {\n        variantDetails {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetVariantDetails {\n        variantDetails {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetVariantDetail($id: ID!) {\n        variantDetail(id: $id) {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetVariantDetail($id: ID!) {\n        variantDetail(id: $id) {\n            id\n            size\n            quantity\n            price\n            product_id\n            product {\n                id\n                name\n            }\n            purchaseItems {\n                id\n                quantity\n            }\n            saleItems {\n                id\n                quantity\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateVariantDetail($input: CreateVariantDetailInput!) {\n        createVariantDetail(input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateVariantDetail($input: CreateVariantDetailInput!) {\n        createVariantDetail(input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateVariantDetail($id: ID!, $input: UpdateVariantDetailInput!) {\n        updateVariantDetail(id: $id, input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateVariantDetail($id: ID!, $input: UpdateVariantDetailInput!) {\n        updateVariantDetail(id: $id, input: $input) {\n            id\n            size\n            quantity\n            price\n            product_id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteVariantDetail($id: ID!) {\n        deleteVariantDetail(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteVariantDetail($id: ID!) {\n        deleteVariantDetail(id: $id) {\n            id\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;