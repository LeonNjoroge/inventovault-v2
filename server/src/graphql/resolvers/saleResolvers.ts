export const saleResolvers = {
    Query: {
        sale: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.sale.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching sale with id ${id}:`, error);
                throw new Error('Failed to fetch sale');
            }
        },
        sales: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.sale.findMany();
            } catch (error) {
                console.error('Error fetching sales:', error);
                throw new Error('Failed to fetch sales');
            }
        },
    },
    Mutation: {
        createSale: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.sale.create({ data: args });
            } catch (error) {
                console.error('Error creating sale:', error);
                throw new Error('Failed to create sale');
            }
        },
        updateSale: async (_: any, { id, ...args }: { id: string; [key: string]: any }, { prisma }: any) => {
            try {
                return await prisma.sale.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating sale with id ${id}:`, error);
                throw new Error('Failed to update sale');
            }
        },
        deleteSale: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.sale.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting sale with id ${id}:`, error);
                throw new Error('Failed to delete sale');
            }
        },
    },
    Sale: {
        saleItems: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.saleItem.findMany({
                where: { sale_id: parent.id },
            });
        },
    },
};
