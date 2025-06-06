export const inventoryMovementResolvers = {
    Query: {
        inventoryMovement: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.inventoryMovement.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching inventoryMovement with id ${id}:`, error);
                throw new Error('Failed to fetch inventoryMovement');
            }
        },
        inventoryMovements: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.inventoryMovement.findMany();
            } catch (error) {
                console.error('Error fetching inventoryMovements:', error);
                throw new Error('Failed to fetch inventoryMovements');
            }
        },
    },
    Mutation: {
        createInventoryMovement: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.inventoryMovement.create({ data: args });
            } catch (error) {
                console.error('Error creating inventoryMovement:', error);
                throw new Error('Failed to create inventoryMovement');
            }
        },
        updateInventoryMovement: async (
            _: any,
            { id, ...args }: { id: string; [key: string]: any },
            { prisma }: any
        ) => {
            try {
                return await prisma.inventoryMovement.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating inventoryMovement with id ${id}:`, error);
                throw new Error('Failed to update inventoryMovement');
            }
        },
        deleteInventoryMovement: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.inventoryMovement.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting inventoryMovement with id ${id}:`, error);
                throw new Error('Failed to delete inventoryMovement');
            }
        },
    },
    InventoryMovement: {
        variant: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.productVariant.findUnique({
                where: { id: parent.variant_id },
            });
        },
        purchaseItem: async (parent: any, _: any, { prisma }: any) => {
            if (!parent.purchase_item_id) return null;
            return await prisma.purchaseItem.findUnique({
                where: { id: parent.purchase_item_id },
            });
        },
        saleItem: async (parent: any, _: any, { prisma }: any) => {
            if (!parent.sale_item_id) return null;
            return await prisma.saleItem.findUnique({
                where: { id: parent.sale_item_id },
            });
        },
    },
};
