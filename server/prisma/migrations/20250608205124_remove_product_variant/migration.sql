/*
  Warnings:

  - You are about to drop the column `variant_id` on the `InventoryMovement` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `InventoryMovement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_variant_id_fkey";

-- AlterTable
ALTER TABLE "InventoryMovement" DROP COLUMN "variant_id",
ADD COLUMN     "product_id" TEXT NOT NULL,
ADD COLUMN     "variantDetailId" TEXT;

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_variantDetailId_fkey" FOREIGN KEY ("variantDetailId") REFERENCES "VariantDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
