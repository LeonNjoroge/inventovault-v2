/*
  Warnings:

  - You are about to drop the column `color` on the `ProductVariant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "color",
ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "VariantDetail" ADD COLUMN     "price" DOUBLE PRECISION;
