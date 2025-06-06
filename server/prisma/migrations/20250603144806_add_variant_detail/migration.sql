-- AlterTable
ALTER TABLE "PurchaseItem" ADD COLUMN     "variant_detail_id" TEXT;

-- AddForeignKey
ALTER TABLE "PurchaseItem" ADD CONSTRAINT "PurchaseItem_variant_detail_id_fkey" FOREIGN KEY ("variant_detail_id") REFERENCES "VariantDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
