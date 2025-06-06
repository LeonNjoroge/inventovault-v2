
// import other typeDefs as needed

import {categoryTypeDefs} from "./categorySchema";
import {productTypeDefs} from "./productSchema";
import {supplierTypeDefs} from "./supplierSchema";
import {productVariantTypeDefs} from "./productVariantSchema";
import {variantDetailTypeDefs} from "./variantDetailSchema";
import {purchaseTypeDefs} from "./purchaseSchema";
import {saleTypeDefs} from "./saleSchema";
import {purchaseItemTypeDefs} from "./purchaseItemSchema";
import {saleItemTypeDefs} from "./saleItemSchema";
import {inventoryMovementTypeDefs} from "./inventoryMovementSchema";

export const typeDefs = [
    categoryTypeDefs,
    productTypeDefs,
    productVariantTypeDefs,
    variantDetailTypeDefs,
    supplierTypeDefs,
    purchaseTypeDefs,
    purchaseItemTypeDefs,
    saleTypeDefs,
    saleItemTypeDefs,
    inventoryMovementTypeDefs,
];