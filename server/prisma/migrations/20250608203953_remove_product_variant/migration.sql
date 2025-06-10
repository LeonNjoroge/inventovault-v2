/*
  Warnings:

  - You are about to drop the column `cost_price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_variant_id` on the `VariantDetail` table. All the data in the column will be lost.
  - You are about to drop the `ProductVariant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_variant_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariant" DROP CONSTRAINT "ProductVariant_product_id_fkey";

-- DropForeignKey
ALTER TABLE "VariantDetail" DROP CONSTRAINT "VariantDetail_product_variant_id_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cost_price",
DROP COLUMN "price";

-- AlterTable
ALTER TABLE "VariantDetail" DROP COLUMN "product_variant_id",
ADD COLUMN     "product_id" TEXT;

-- DropTable
DROP TABLE "ProductVariant";

-- AddForeignKey
ALTER TABLE "VariantDetail" ADD CONSTRAINT "VariantDetail_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "VariantDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
