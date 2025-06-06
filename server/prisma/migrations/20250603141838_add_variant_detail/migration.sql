/*
  Warnings:

  - Made the column `name` on table `ProductVariant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProductVariant" ALTER COLUMN "name" SET NOT NULL;
