export const supplierResolvers = {
    Query: {
        supplier: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.supplier.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching supplier with id ${id}:`, error);
                throw new Error('Failed to fetch supplier');
            }
        },
        suppliers: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.supplier.findMany();
            } catch (error) {
                console.error('Error fetching suppliers:', error);
                throw new Error('Failed to fetch suppliers');
            }
        },
    },
    Mutation: {
        createSupplier: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.supplier.create({ data: args });
            } catch (error) {
                console.error('Error creating supplier:', error);
                throw new Error('Failed to create supplier');
            }
        },
        updateSupplier: async (_: any, { id, ...args }: { id: string; [key: string]: any }, { prisma }: any) => {
            try {
                return await prisma.supplier.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating supplier with id ${id}:`, error);
                throw new Error('Failed to update supplier');
            }
        },
        deleteSupplier: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.supplier.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting supplier with id ${id}:`, error);
                throw new Error('Failed to delete supplier');
            }
        },
    },
    Supplier: {
        purchases: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.purchase.findMany({
                where: { supplier_id: parent.id },
            });
        },
    },
};
