import { categoryResolvers } from './categoryResolvers';
import { productResolvers } from './productResolvers';
import { productVariantResolvers } from './productVariantResolvers';
import { variantDetailResolvers } from './variantDetailResolvers';
import { supplierResolvers } from './supplierResolvers';
import { purchaseResolvers } from './purchaseResolvers';
import { purchaseItemResolvers } from './purchaseItemResolvers';
import { saleResolvers } from './saleResolvers';
import { saleItemResolvers } from './saleItemResolvers';
import { inventoryMovementResolvers } from './inventoryMovementResolvers';


export const resolvers = [
    categoryResolvers,
    productResolvers,
    productVariantResolvers,
    variantDetailResolvers,
    supplierResolvers,
    purchaseResolvers,
    purchaseItemResolvers,
    saleResolvers,
    saleItemResolvers,
    inventoryMovementResolvers,
];