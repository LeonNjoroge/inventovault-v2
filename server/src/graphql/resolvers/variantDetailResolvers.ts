export const variantDetailResolvers = {
    Query: {
        variantDetail: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.variantDetail.findUnique({
                    where: { id },
                });
            } catch (error) {
                console.error(`Error fetching variantDetail with id ${id}:`, error);
                throw new Error('Failed to fetch variantDetail');
            }
        },
        variantDetails: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.variantDetail.findMany();
            } catch (error) {
                console.error('Error fetching variantDetails:', error);
                throw new Error('Failed to fetch variantDetails');
            }
        },
    },

    Mutation: {
        createVariantDetail: async (_: any, { input }: any, { prisma }: any) => {
            try {
                return await prisma.variantDetail.create({ data: input });
            } catch (error) {
                console.error('Error creating variantDetail:', error);
                throw new Error('Failed to create variantDetail');
            }
        },
        updateVariantDetail: async (_: any, { id, input }: any, { prisma }: any) => {
            try {
                return await prisma.variantDetail.update({
                    where: { id },
                    data: input,
                });
            } catch (error) {
                console.error(`Error updating variantDetail with id ${id}:`, error);
                throw new Error('Failed to update variantDetail');
            }
        },
        deleteVariantDetail: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.variantDetail.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting variantDetail with id ${id}:`, error);
                throw new Error('Failed to delete variantDetail');
            }
        },
    },

    VariantDetail: {
        product: async (parent: any, _: any, { prisma }: any) => {
            return parent.product_id
                ? await prisma.product.findUnique({
                    where: { id: parent.product_id },
                })
                : null;
        },
        purchaseItems: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.purchaseItem.findMany({
                where: { variant_detail_id: parent.id },
            });
        },
        saleItems: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.saleItem.findMany({
                where: { variant_detail_id: parent.id },
            });
        },
    },
};
