/*
  Warnings:

  - Made the column `customer_id` on table `Sale` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Sale" ALTER COLUMN "customer_id" SET NOT NULL;
