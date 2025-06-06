/*
  Warnings:

  - You are about to drop the column `product_variant_id` on the `PurchaseItem` table. All the data in the column will be lost.
  - You are about to drop the column `product_variant_id` on the `SaleItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_product_variant_id_fkey";

-- DropForeignKey
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_product_variant_id_fkey";

-- AlterTable
ALTER TABLE "PurchaseItem" DROP COLUMN "product_variant_id";

-- AlterTable
ALTER TABLE "SaleItem" DROP COLUMN "product_variant_id";
