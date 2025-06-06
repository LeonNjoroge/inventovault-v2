/*
  Warnings:

  - You are about to drop the column `variant_id` on the `PurchaseItem` table. All the data in the column will be lost.
  - You are about to drop the column `variant_id` on the `SaleItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_variant_id_fkey";

-- DropForeignKey
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_variant_id_fkey";

-- AlterTable
ALTER TABLE "PurchaseItem" DROP COLUMN "variant_id",
ADD COLUMN     "productVariantId" TEXT;

-- AlterTable
ALTER TABLE "SaleItem" DROP COLUMN "variant_id",
ADD COLUMN     "productVariantId" TEXT,
ADD COLUMN     "variant_detail_id" TEXT;

-- AddForeignKey
ALTER TABLE "PurchaseItem" ADD CONSTRAINT "PurchaseItem_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_variant_detail_id_fkey" FOREIGN KEY ("variant_detail_id") REFERENCES "VariantDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
