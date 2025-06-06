-- AlterTable
ALTER TABLE "PurchaseItem" ADD COLUMN     "product_variant_id" TEXT;

-- AlterTable
ALTER TABLE "SaleItem" ADD COLUMN     "product_variant_id" TEXT;

-- AddForeignKey
ALTER TABLE "PurchaseItem" ADD CONSTRAINT "PurchaseItem_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_product_variant_id_fkey" FOREIGN KEY ("product_variant_id") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
