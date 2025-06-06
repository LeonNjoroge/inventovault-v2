/*
  Warnings:

  - You are about to drop the column `productVariantId` on the `PurchaseItem` table. All the data in the column will be lost.
  - You are about to drop the column `productVariantId` on the `SaleItem` table. All the data in the column will be lost.
  - Made the column `variant_detail_id` on table `SaleItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_variant_detail_id_fkey";

-- AlterTable
ALTER TABLE "PurchaseItem" DROP COLUMN "productVariantId";

-- AlterTable
ALTER TABLE "SaleItem" DROP COLUMN "productVariantId",
ALTER COLUMN "variant_detail_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_variant_detail_id_fkey" FOREIGN KEY ("variant_detail_id") REFERENCES "VariantDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
