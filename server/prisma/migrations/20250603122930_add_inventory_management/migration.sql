/*
  Warnings:

  - You are about to drop the column `reference_id` on the `InventoryMovement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[purchase_item_id]` on the table `InventoryMovement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sale_item_id]` on the table `InventoryMovement` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "InventoryMovement" DROP COLUMN "reference_id",
ADD COLUMN     "purchase_item_id" TEXT,
ADD COLUMN     "sale_item_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "InventoryMovement_purchase_item_id_key" ON "InventoryMovement"("purchase_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryMovement_sale_item_id_key" ON "InventoryMovement"("sale_item_id");

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_purchase_item_id_fkey" FOREIGN KEY ("purchase_item_id") REFERENCES "PurchaseItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_sale_item_id_fkey" FOREIGN KEY ("sale_item_id") REFERENCES "SaleItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
