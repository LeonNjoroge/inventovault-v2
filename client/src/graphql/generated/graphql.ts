/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Product>>;
};

export type CreateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateInventoryMovementInput = {
  change_type?: InputMaybe<InventoryChangeType>;
  comment?: InputMaybe<Scalars['String']['input']>;
  product_id: Scalars['String']['input'];
  purchase_item_id?: InputMaybe<Scalars['String']['input']>;
  quantity_change: Scalars['Int']['input'];
  sale_item_id?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreatePurchaseInput = {
  date: Scalars['String']['input'];
  invoice_no?: InputMaybe<Scalars['String']['input']>;
  supplier_id: Scalars['String']['input'];
};

export type CreatePurchaseItemInput = {
  cost_price: Scalars['Float']['input'];
  purchase_id: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  variant_detail_id?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSaleInput = {
  customer_id: Scalars['String']['input'];
  date: Scalars['String']['input'];
  total_amount: Scalars['Float']['input'];
};

export type CreateSaleItemInput = {
  quantity: Scalars['Int']['input'];
  sale_id: Scalars['String']['input'];
  sale_price: Scalars['Float']['input'];
  variant_detail_id: Scalars['String']['input'];
};

export type CreateSupplierInput = {
  contact_info?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateVariantDetailInput = {
  price?: InputMaybe<Scalars['Float']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export enum InventoryChangeType {
  Adjustment = 'ADJUSTMENT',
  Purchase = 'PURCHASE',
  Return = 'RETURN',
  Sale = 'SALE'
}

export type InventoryMovement = {
  __typename?: 'InventoryMovement';
  change_type?: Maybe<InventoryChangeType>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  product_id: Scalars['String']['output'];
  purchaseItem?: Maybe<PurchaseItem>;
  purchase_item_id?: Maybe<Scalars['String']['output']>;
  quantity_change: Scalars['Int']['output'];
  saleItem?: Maybe<SaleItem>;
  sale_item_id?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createInventoryMovement: InventoryMovement;
  createProduct: Product;
  createPurchase: Purchase;
  createPurchaseItem: PurchaseItem;
  createSale: Sale;
  createSaleItem: SaleItem;
  createSupplier: Supplier;
  createVariantDetail: VariantDetail;
  deleteCategory: Category;
  deleteInventoryMovement: InventoryMovement;
  deleteProduct: Product;
  deletePurchase: Purchase;
  deletePurchaseItem: PurchaseItem;
  deleteSale: Sale;
  deleteSaleItem: SaleItem;
  deleteSupplier: Supplier;
  deleteVariantDetail: VariantDetail;
  updateCategory: Category;
  updateInventoryMovement: InventoryMovement;
  updateProduct: Product;
  updatePurchase: Purchase;
  updatePurchaseItem: PurchaseItem;
  updateSale: Sale;
  updateSaleItem: SaleItem;
  updateSupplier: Supplier;
  updateVariantDetail: VariantDetail;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateInventoryMovementArgs = {
  input: CreateInventoryMovementInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreatePurchaseArgs = {
  input: CreatePurchaseInput;
};


export type MutationCreatePurchaseItemArgs = {
  input: CreatePurchaseItemInput;
};


export type MutationCreateSaleArgs = {
  input: CreateSaleInput;
};


export type MutationCreateSaleItemArgs = {
  input: CreateSaleItemInput;
};


export type MutationCreateSupplierArgs = {
  input: CreateSupplierInput;
};


export type MutationCreateVariantDetailArgs = {
  input: CreateVariantDetailInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInventoryMovementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePurchaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePurchaseItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSaleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSaleItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVariantDetailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCategoryInput;
};


export type MutationUpdateInventoryMovementArgs = {
  id: Scalars['ID']['input'];
  input: UpdateInventoryMovementInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  input: UpdateProductInput;
};


export type MutationUpdatePurchaseArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePurchaseInput;
};


export type MutationUpdatePurchaseItemArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePurchaseItemInput;
};


export type MutationUpdateSaleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSaleInput;
};


export type MutationUpdateSaleItemArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSaleItemInput;
};


export type MutationUpdateSupplierArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSupplierInput;
};


export type MutationUpdateVariantDetailArgs = {
  id: Scalars['ID']['input'];
  input: UpdateVariantDetailInput;
};

export type Product = {
  __typename?: 'Product';
  categories?: Maybe<Array<Category>>;
  created_at: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inventoryMovements?: Maybe<Array<InventoryMovement>>;
  name: Scalars['String']['output'];
  variants?: Maybe<Array<VariantDetail>>;
};

export type Purchase = {
  __typename?: 'Purchase';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  invoice_no?: Maybe<Scalars['String']['output']>;
  purchaseItems: Array<PurchaseItem>;
  supplier: Supplier;
  supplier_id: Scalars['String']['output'];
};

export type PurchaseItem = {
  __typename?: 'PurchaseItem';
  cost_price: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  inventoryMovement?: Maybe<InventoryMovement>;
  purchase: Purchase;
  purchase_id: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  variantDetail?: Maybe<VariantDetail>;
  variant_detail_id?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  inventoryMovement?: Maybe<InventoryMovement>;
  inventoryMovements: Array<InventoryMovement>;
  product?: Maybe<Product>;
  products: Array<Product>;
  purchase?: Maybe<Purchase>;
  purchaseItem?: Maybe<PurchaseItem>;
  purchaseItems: Array<PurchaseItem>;
  purchases: Array<Purchase>;
  sale?: Maybe<Sale>;
  saleItem?: Maybe<SaleItem>;
  saleItems: Array<SaleItem>;
  sales: Array<Sale>;
  supplier?: Maybe<Supplier>;
  suppliers: Array<Supplier>;
  variantDetail?: Maybe<VariantDetail>;
  variantDetails: Array<VariantDetail>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInventoryMovementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPurchaseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPurchaseItemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySaleArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySaleItemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupplierArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVariantDetailArgs = {
  id: Scalars['ID']['input'];
};

export type Sale = {
  __typename?: 'Sale';
  customer_id: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  saleItems: Array<SaleItem>;
  total_amount: Scalars['Float']['output'];
};

export type SaleItem = {
  __typename?: 'SaleItem';
  id: Scalars['ID']['output'];
  inventoryMovement?: Maybe<InventoryMovement>;
  quantity: Scalars['Int']['output'];
  sale: Sale;
  sale_id: Scalars['String']['output'];
  sale_price: Scalars['Float']['output'];
  variantDetail: VariantDetail;
  variant_detail_id: Scalars['String']['output'];
};

export type Supplier = {
  __typename?: 'Supplier';
  contact_info?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  purchases: Array<Purchase>;
};

export type UpdateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInventoryMovementInput = {
  change_type?: InputMaybe<InventoryChangeType>;
  comment?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  purchase_item_id?: InputMaybe<Scalars['String']['input']>;
  quantity_change?: InputMaybe<Scalars['Int']['input']>;
  sale_item_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePurchaseInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  invoice_no?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePurchaseItemInput = {
  cost_price?: InputMaybe<Scalars['Float']['input']>;
  purchase_id?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variant_detail_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSaleInput = {
  customer_id?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateSaleItemInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sale_id?: InputMaybe<Scalars['String']['input']>;
  sale_price?: InputMaybe<Scalars['Float']['input']>;
  variant_detail_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSupplierInput = {
  contact_info?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVariantDetailInput = {
  price?: InputMaybe<Scalars['Float']['input']>;
  product_id?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

export type VariantDetail = {
  __typename?: 'VariantDetail';
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  product_id?: Maybe<Scalars['ID']['output']>;
  purchaseItems: Array<PurchaseItem>;
  quantity: Scalars['Int']['output'];
  saleItems: Array<SaleItem>;
  size: Scalars['String']['output'];
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, description?: string | null, products?: Array<{ __typename?: 'Product', id: string, name: string }> | null }> };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', category?: { __typename?: 'Category', id: string, name: string, description?: string | null, products?: Array<{ __typename?: 'Product', id: string, name: string }> | null } | null };

export type CreateCategoryMutationVariables = Exact<{
  input: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', id: string, name: string, description?: string | null } };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Category', id: string, name: string, description?: string | null } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'Category', id: string, name: string } };

export type GetInventoryMovementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInventoryMovementsQuery = { __typename?: 'Query', inventoryMovements: Array<{ __typename?: 'InventoryMovement', id: string, product_id: string, purchase_item_id?: string | null, sale_item_id?: string | null, change_type?: InventoryChangeType | null, quantity_change: number, comment?: string | null, created_at: string, product: { __typename?: 'Product', id: string, name: string } }> };

export type GetInventoryMovementQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetInventoryMovementQuery = { __typename?: 'Query', inventoryMovement?: { __typename?: 'InventoryMovement', id: string, product_id: string, purchase_item_id?: string | null, sale_item_id?: string | null, change_type?: InventoryChangeType | null, quantity_change: number, comment?: string | null, created_at: string, product: { __typename?: 'Product', id: string, name: string } } | null };

export type CreateInventoryMovementMutationVariables = Exact<{
  input: CreateInventoryMovementInput;
}>;


export type CreateInventoryMovementMutation = { __typename?: 'Mutation', createInventoryMovement: { __typename?: 'InventoryMovement', id: string, quantity_change: number, change_type?: InventoryChangeType | null, comment?: string | null } };

export type UpdateInventoryMovementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateInventoryMovementInput;
}>;


export type UpdateInventoryMovementMutation = { __typename?: 'Mutation', updateInventoryMovement: { __typename?: 'InventoryMovement', id: string, quantity_change: number, change_type?: InventoryChangeType | null, comment?: string | null } };

export type DeleteInventoryMovementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteInventoryMovementMutation = { __typename?: 'Mutation', deleteInventoryMovement: { __typename?: 'InventoryMovement', id: string } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, description?: string | null, created_at: string, categories?: Array<{ __typename?: 'Category', id: string, name: string }> | null, variants?: Array<{ __typename?: 'VariantDetail', id: string, size: string, quantity: number, price?: number | null }> | null, inventoryMovements?: Array<{ __typename?: 'InventoryMovement', id: string, change_type?: InventoryChangeType | null, quantity_change: number, created_at: string }> | null }> };

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description?: string | null, created_at: string, categories?: Array<{ __typename?: 'Category', id: string, name: string }> | null, variants?: Array<{ __typename?: 'VariantDetail', id: string, size: string, quantity: number, price?: number | null }> | null, inventoryMovements?: Array<{ __typename?: 'InventoryMovement', id: string, change_type?: InventoryChangeType | null, quantity_change: number, created_at: string }> | null } | null };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, name: string, description?: string | null, created_at: string } };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', id: string, name: string, description?: string | null } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'Product', id: string } };

export type GetPurchaseItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPurchaseItemsQuery = { __typename?: 'Query', purchaseItems: Array<{ __typename?: 'PurchaseItem', id: string, purchase_id: string, variant_detail_id?: string | null, quantity: number, cost_price: number, purchase: { __typename?: 'Purchase', id: string, date: string }, variantDetail?: { __typename?: 'VariantDetail', id: string, size: string, price?: number | null } | null, inventoryMovement?: { __typename?: 'InventoryMovement', id: string, change_type?: InventoryChangeType | null, quantity_change: number, created_at: string } | null }> };

export type GetPurchaseItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPurchaseItemQuery = { __typename?: 'Query', purchaseItem?: { __typename?: 'PurchaseItem', id: string, purchase_id: string, variant_detail_id?: string | null, quantity: number, cost_price: number, purchase: { __typename?: 'Purchase', id: string, date: string }, variantDetail?: { __typename?: 'VariantDetail', id: string, size: string, price?: number | null } | null, inventoryMovement?: { __typename?: 'InventoryMovement', id: string, change_type?: InventoryChangeType | null, quantity_change: number, created_at: string } | null } | null };

export type CreatePurchaseItemMutationVariables = Exact<{
  input: CreatePurchaseItemInput;
}>;


export type CreatePurchaseItemMutation = { __typename?: 'Mutation', createPurchaseItem: { __typename?: 'PurchaseItem', id: string, quantity: number, cost_price: number } };

export type UpdatePurchaseItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdatePurchaseItemInput;
}>;


export type UpdatePurchaseItemMutation = { __typename?: 'Mutation', updatePurchaseItem: { __typename?: 'PurchaseItem', id: string, quantity: number, cost_price: number } };

export type DeletePurchaseItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePurchaseItemMutation = { __typename?: 'Mutation', deletePurchaseItem: { __typename?: 'PurchaseItem', id: string } };

export type GetSaleItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSaleItemsQuery = { __typename?: 'Query', saleItems: Array<{ __typename?: 'SaleItem', id: string, sale_id: string, variant_detail_id: string, quantity: number, sale_price: number, sale: { __typename?: 'Sale', id: string, date: string, total_amount: number, customer_id: string }, variantDetail: { __typename?: 'VariantDetail', id: string, size: string, price?: number | null }, inventoryMovement?: { __typename?: 'InventoryMovement', id: string, change_type?: InventoryChangeType | null, quantity_change: number, created_at: string } | null }> };

export type GetSaleItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetSaleItemQuery = { __typename?: 'Query', saleItem?: { __typename?: 'SaleItem', id: string, sale_id: string, variant_detail_id: string, quantity: number, sale_price: number, sale: { __typename?: 'Sale', id: string, date: string, total_amount: number, customer_id: string }, variantDetail: { __typename?: 'VariantDetail', id: string, size: string, price?: number | null }, inventoryMovement?: { __typename?: 'InventoryMovement', id: string, change_type?: InventoryChangeType | null, quantity_change: number, created_at: string } | null } | null };

export type CreateSaleItemMutationVariables = Exact<{
  input: CreateSaleItemInput;
}>;


export type CreateSaleItemMutation = { __typename?: 'Mutation', createSaleItem: { __typename?: 'SaleItem', id: string, quantity: number, sale_price: number } };

export type UpdateSaleItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateSaleItemInput;
}>;


export type UpdateSaleItemMutation = { __typename?: 'Mutation', updateSaleItem: { __typename?: 'SaleItem', id: string, quantity: number, sale_price: number } };

export type DeleteSaleItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteSaleItemMutation = { __typename?: 'Mutation', deleteSaleItem: { __typename?: 'SaleItem', id: string } };

export type GetSalesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSalesQuery = { __typename?: 'Query', sales: Array<{ __typename?: 'Sale', id: string, customer_id: string, date: string, total_amount: number, saleItems: Array<{ __typename?: 'SaleItem', id: string, quantity: number, sale_price: number, variantDetail: { __typename?: 'VariantDetail', id: string, size: string, price?: number | null } }> }> };

export type GetSaleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetSaleQuery = { __typename?: 'Query', sale?: { __typename?: 'Sale', id: string, customer_id: string, date: string, total_amount: number, saleItems: Array<{ __typename?: 'SaleItem', id: string, quantity: number, sale_price: number }> } | null };

export type CreateSaleMutationVariables = Exact<{
  input: CreateSaleInput;
}>;


export type CreateSaleMutation = { __typename?: 'Mutation', createSale: { __typename?: 'Sale', id: string, customer_id: string, date: string, total_amount: number } };

export type UpdateSaleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateSaleInput;
}>;


export type UpdateSaleMutation = { __typename?: 'Mutation', updateSale: { __typename?: 'Sale', id: string, customer_id: string, date: string, total_amount: number } };

export type DeleteSaleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteSaleMutation = { __typename?: 'Mutation', deleteSale: { __typename?: 'Sale', id: string } };

export type GetSuppliersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSuppliersQuery = { __typename?: 'Query', suppliers: Array<{ __typename?: 'Supplier', id: string, name: string, contact_info?: string | null, purchases: Array<{ __typename?: 'Purchase', id: string, date: string, invoice_no?: string | null }> }> };

export type GetSupplierQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetSupplierQuery = { __typename?: 'Query', supplier?: { __typename?: 'Supplier', id: string, name: string, contact_info?: string | null, purchases: Array<{ __typename?: 'Purchase', id: string, date: string, invoice_no?: string | null }> } | null };

export type CreateSupplierMutationVariables = Exact<{
  input: CreateSupplierInput;
}>;


export type CreateSupplierMutation = { __typename?: 'Mutation', createSupplier: { __typename?: 'Supplier', id: string, name: string, contact_info?: string | null } };

export type UpdateSupplierMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateSupplierInput;
}>;


export type UpdateSupplierMutation = { __typename?: 'Mutation', updateSupplier: { __typename?: 'Supplier', id: string, name: string, contact_info?: string | null } };

export type DeleteSupplierMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteSupplierMutation = { __typename?: 'Mutation', deleteSupplier: { __typename?: 'Supplier', id: string } };

export type GetVariantDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVariantDetailsQuery = { __typename?: 'Query', variantDetails: Array<{ __typename?: 'VariantDetail', id: string, size: string, quantity: number, price?: number | null, product_id?: string | null, product?: { __typename?: 'Product', id: string, name: string } | null, purchaseItems: Array<{ __typename?: 'PurchaseItem', id: string, quantity: number }>, saleItems: Array<{ __typename?: 'SaleItem', id: string, quantity: number }> }> };

export type GetVariantDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetVariantDetailQuery = { __typename?: 'Query', variantDetail?: { __typename?: 'VariantDetail', id: string, size: string, quantity: number, price?: number | null, product_id?: string | null, product?: { __typename?: 'Product', id: string, name: string } | null, purchaseItems: Array<{ __typename?: 'PurchaseItem', id: string, quantity: number }>, saleItems: Array<{ __typename?: 'SaleItem', id: string, quantity: number }> } | null };

export type CreateVariantDetailMutationVariables = Exact<{
  input: CreateVariantDetailInput;
}>;


export type CreateVariantDetailMutation = { __typename?: 'Mutation', createVariantDetail: { __typename?: 'VariantDetail', id: string, size: string, quantity: number, price?: number | null, product_id?: string | null } };

export type UpdateVariantDetailMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateVariantDetailInput;
}>;


export type UpdateVariantDetailMutation = { __typename?: 'Mutation', updateVariantDetail: { __typename?: 'VariantDetail', id: string, size: string, quantity: number, price?: number | null, product_id?: string | null } };

export type DeleteVariantDetailMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVariantDetailMutation = { __typename?: 'Mutation', deleteVariantDetail: { __typename?: 'VariantDetail', id: string } };


export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoryQuery, GetCategoryQueryVariables>;
export const CreateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const UpdateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const GetInventoryMovementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInventoryMovements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inventoryMovements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"purchase_item_id"}},{"kind":"Field","name":{"kind":"Name","value":"sale_item_id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetInventoryMovementsQuery, GetInventoryMovementsQueryVariables>;
export const GetInventoryMovementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInventoryMovement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inventoryMovement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"purchase_item_id"}},{"kind":"Field","name":{"kind":"Name","value":"sale_item_id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetInventoryMovementQuery, GetInventoryMovementQueryVariables>;
export const CreateInventoryMovementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInventoryMovement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateInventoryMovementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInventoryMovement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<CreateInventoryMovementMutation, CreateInventoryMovementMutationVariables>;
export const UpdateInventoryMovementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInventoryMovement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateInventoryMovementInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInventoryMovement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<UpdateInventoryMovementMutation, UpdateInventoryMovementMutationVariables>;
export const DeleteInventoryMovementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteInventoryMovement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteInventoryMovement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteInventoryMovementMutation, DeleteInventoryMovementMutationVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventoryMovements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventoryMovements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const GetPurchaseItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPurchaseItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"purchaseItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"purchase_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_detail_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"cost_price"}},{"kind":"Field","name":{"kind":"Name","value":"purchase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variantDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventoryMovement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<GetPurchaseItemsQuery, GetPurchaseItemsQueryVariables>;
export const GetPurchaseItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPurchaseItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"purchaseItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"purchase_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_detail_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"cost_price"}},{"kind":"Field","name":{"kind":"Name","value":"purchase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variantDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventoryMovement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<GetPurchaseItemQuery, GetPurchaseItemQueryVariables>;
export const CreatePurchaseItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePurchaseItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePurchaseItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPurchaseItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"cost_price"}}]}}]}}]} as unknown as DocumentNode<CreatePurchaseItemMutation, CreatePurchaseItemMutationVariables>;
export const UpdatePurchaseItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePurchaseItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePurchaseItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePurchaseItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"cost_price"}}]}}]}}]} as unknown as DocumentNode<UpdatePurchaseItemMutation, UpdatePurchaseItemMutationVariables>;
export const DeletePurchaseItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePurchaseItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePurchaseItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePurchaseItemMutation, DeletePurchaseItemMutationVariables>;
export const GetSaleItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSaleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sale_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_detail_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sale_price"}},{"kind":"Field","name":{"kind":"Name","value":"sale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"customer_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variantDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventoryMovement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<GetSaleItemsQuery, GetSaleItemsQueryVariables>;
export const GetSaleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSaleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saleItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sale_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_detail_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sale_price"}},{"kind":"Field","name":{"kind":"Name","value":"sale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"customer_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variantDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventoryMovement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"change_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity_change"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<GetSaleItemQuery, GetSaleItemQueryVariables>;
export const CreateSaleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSaleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSaleItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSaleItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sale_price"}}]}}]}}]} as unknown as DocumentNode<CreateSaleItemMutation, CreateSaleItemMutationVariables>;
export const UpdateSaleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSaleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSaleItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSaleItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sale_price"}}]}}]}}]} as unknown as DocumentNode<UpdateSaleItemMutation, UpdateSaleItemMutationVariables>;
export const DeleteSaleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSaleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSaleItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSaleItemMutation, DeleteSaleItemMutationVariables>;
export const GetSalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"saleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sale_price"}},{"kind":"Field","name":{"kind":"Name","value":"variantDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSalesQuery, GetSalesQueryVariables>;
export const GetSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"saleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"sale_price"}}]}}]}}]}}]} as unknown as DocumentNode<GetSaleQuery, GetSaleQueryVariables>;
export const CreateSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}}]}}]}}]} as unknown as DocumentNode<CreateSaleMutation, CreateSaleMutationVariables>;
export const UpdateSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}}]}}]}}]} as unknown as DocumentNode<UpdateSaleMutation, UpdateSaleMutationVariables>;
export const DeleteSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSaleMutation, DeleteSaleMutationVariables>;
export const GetSuppliersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSuppliers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suppliers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_info"}},{"kind":"Field","name":{"kind":"Name","value":"purchases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_no"}}]}}]}}]}}]} as unknown as DocumentNode<GetSuppliersQuery, GetSuppliersQueryVariables>;
export const GetSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_info"}},{"kind":"Field","name":{"kind":"Name","value":"purchases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_no"}}]}}]}}]}}]} as unknown as DocumentNode<GetSupplierQuery, GetSupplierQueryVariables>;
export const CreateSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSupplierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSupplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_info"}}]}}]}}]} as unknown as DocumentNode<CreateSupplierMutation, CreateSupplierMutationVariables>;
export const UpdateSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSupplierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSupplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_info"}}]}}]}}]} as unknown as DocumentNode<UpdateSupplierMutation, UpdateSupplierMutationVariables>;
export const DeleteSupplierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSupplier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSupplier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSupplierMutation, DeleteSupplierMutationVariables>;
export const GetVariantDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVariantDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variantDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"purchaseItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]} as unknown as DocumentNode<GetVariantDetailsQuery, GetVariantDetailsQueryVariables>;
export const GetVariantDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVariantDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variantDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"purchaseItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]} as unknown as DocumentNode<GetVariantDetailQuery, GetVariantDetailQueryVariables>;
export const CreateVariantDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVariantDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateVariantDetailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVariantDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}}]}}]}}]} as unknown as DocumentNode<CreateVariantDetailMutation, CreateVariantDetailMutationVariables>;
export const UpdateVariantDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVariantDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateVariantDetailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVariantDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}}]}}]}}]} as unknown as DocumentNode<UpdateVariantDetailMutation, UpdateVariantDetailMutationVariables>;
export const DeleteVariantDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteVariantDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteVariantDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteVariantDetailMutation, DeleteVariantDetailMutationVariables>;