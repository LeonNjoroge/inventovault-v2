export const purchaseItemResolvers = {
    Query: {
        purchaseItem: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.purchaseItem.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching purchaseItem with id ${id}:`, error);
                throw new Error('Failed to fetch purchaseItem');
            }
        },
        purchaseItems: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.purchaseItem.findMany();
            } catch (error) {
                console.error('Error fetching purchaseItems:', error);
                throw new Error('Failed to fetch purchaseItems');
            }
        },
    },
    Mutation: {
        createPurchaseItem: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.purchaseItem.create({ data: args });
            } catch (error) {
                console.error('Error creating purchaseItem:', error);
                throw new Error('Failed to create purchaseItem');
            }
        },
        updatePurchaseItem: async (
            _: any,
            { id, ...args }: { id: string; [key: string]: any },
            { prisma }: any
        ) => {
            try {
                return await prisma.purchaseItem.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating purchaseItem with id ${id}:`, error);
                throw new Error('Failed to update purchaseItem');
            }
        },
        deletePurchaseItem: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.purchaseItem.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting purchaseItem with id ${id}:`, error);
                throw new Error('Failed to delete purchaseItem');
            }
        },
    },
    PurchaseItem: {
        purchase: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.purchase.findUnique({
                where: { id: parent.purchase_id },
            });
        },
        variantDetail: async (parent: any, _: any, { prisma }: any) => {
            if (!parent.variant_detail_id) return null;
            return await prisma.variantDetail.findUnique({
                where: { id: parent.variant_detail_id },
            });
        },
        inventoryMovement: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.inventoryMovement.findUnique({
                where: { purchase_item_id: parent.id },
            });
        },
    },
};
