export const saleItemResolvers = {
    Query: {
        saleItem: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.saleItem.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching saleItem with id ${id}:`, error);
                throw new Error('Failed to fetch saleItem');
            }
        },
        saleItems: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.saleItem.findMany();
            } catch (error) {
                console.error('Error fetching saleItems:', error);
                throw new Error('Failed to fetch saleItems');
            }
        },
    },
    Mutation: {
        createSaleItem: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.saleItem.create({ data: args });
            } catch (error) {
                console.error('Error creating saleItem:', error);
                throw new Error('Failed to create saleItem');
            }
        },
        updateSaleItem: async (
            _: any,
            { id, ...args }: { id: string; [key: string]: any },
            { prisma }: any
        ) => {
            try {
                return await prisma.saleItem.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating saleItem with id ${id}:`, error);
                throw new Error('Failed to update saleItem');
            }
        },
        deleteSaleItem: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.saleItem.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting saleItem with id ${id}:`, error);
                throw new Error('Failed to delete saleItem');
            }
        },
    },
    SaleItem: {
        sale: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.sale.findUnique({
                where: { id: parent.sale_id },
            });
        },
        variantDetail: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.variantDetail.findUnique({
                where: { id: parent.variant_detail_id },
            });
        },
        inventoryMovement: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.inventoryMovement.findUnique({
                where: { sale_item_id: parent.id },
            });
        },
    },
};
