/*
  Warnings:

  - You are about to drop the column `variantDetailId` on the `InventoryMovement` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_variantDetailId_fkey";

-- AlterTable
ALTER TABLE "InventoryMovement" DROP COLUMN "variantDetailId";
