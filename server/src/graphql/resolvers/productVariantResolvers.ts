export const productVariantResolvers = {
    Query: {
        productVariant: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.productVariant.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching productVariant with id ${id}:`, error);
                throw new Error('Failed to fetch productVariant');
            }
        },
        productVariants: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.productVariant.findMany();
            } catch (error) {
                console.error('Error fetching productVariants:', error);
                throw new Error('Failed to fetch productVariants');
            }
        },
    },
    Mutation: {
        createProductVariant: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.productVariant.create({ data: args });
            } catch (error) {
                console.error('Error creating productVariant:', error);
                throw new Error('Failed to create productVariant');
            }
        },
        updateProductVariant: async (
            _: any,
            { id, ...args }: { id: string; [key: string]: any },
            { prisma }: any
        ) => {
            try {
                return await prisma.productVariant.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating productVariant with id ${id}:`, error);
                throw new Error('Failed to update productVariant');
            }
        },
        deleteProductVariant: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.productVariant.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting productVariant with id ${id}:`, error);
                throw new Error('Failed to delete productVariant');
            }
        },
    },

    ProductVariant: {
        product: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.product.findUnique({
                where: { id: parent.product_id },
            });
        },
        details: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.variantDetail.findMany({
                where: { product_variant_id: parent.id },
            });
        },
        inventoryMovements: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.inventoryMovement.findMany({
                where: { variant_id: parent.id },
            });
        },
    },
};
