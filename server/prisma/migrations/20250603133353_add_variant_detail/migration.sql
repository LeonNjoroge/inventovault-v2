/*
  Warnings:

  - The `change_type` column on the `InventoryMovement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `size` on the `ProductVariant` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "InventoryChangeType" AS ENUM ('PURCHASE', 'SALE', 'ADJUSTMENT', 'RETURN');

-- AlterTable
ALTER TABLE "InventoryMovement" DROP COLUMN "change_type",
ADD COLUMN     "change_type" "InventoryChangeType";

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "size";

-- CreateTable
CREATE TABLE "VariantDetail" (
    "id" TEXT NOT NULL,
    "product_variant_id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "VariantDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VariantDetail" ADD CONSTRAINT "VariantDetail_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
