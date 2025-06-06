export const purchaseResolvers = {
    Query: {
        purchase: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.purchase.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching purchase with id ${id}:`, error);
                throw new Error('Failed to fetch purchase');
            }
        },
        purchases: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.purchase.findMany();
            } catch (error) {
                console.error('Error fetching purchases:', error);
                throw new Error('Failed to fetch purchases');
            }
        },
    },
    Mutation: {
        createPurchase: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.purchase.create({ data: args });
            } catch (error) {
                console.error('Error creating purchase:', error);
                throw new Error('Failed to create purchase');
            }
        },
        updatePurchase: async (
            _: any,
            { id, ...args }: { id: string; [key: string]: any },
            { prisma }: any
        ) => {
            try {
                return await prisma.purchase.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating purchase with id ${id}:`, error);
                throw new Error('Failed to update purchase');
            }
        },
        deletePurchase: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.purchase.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting purchase with id ${id}:`, error);
                throw new Error('Failed to delete purchase');
            }
        },
    },
    Purchase: {
        purchaseItems: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.purchaseItem.findMany({
                where: { purchase_id: parent.id },
            });
        },
        supplier: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.supplier.findUnique({
                where: { id: parent.supplier_id },
            });
        },
    },
};
