export const productResolvers = {
    Query: {
        product: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.product.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching product with id ${id}:`, error);
                throw new Error('Failed to fetch product');
            }
        },
        products: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.product.findMany();
            } catch (error) {
                console.error('Error fetching products:', error);
                throw new Error('Failed to fetch products');
            }
        },
    },
    Mutation: {
        createProduct: async (_: any, args: any, { prisma }: any) => {
            try {
                return await prisma.product.create({ data: args });
            } catch (error) {
                console.error('Error creating product:', error);
                throw new Error('Failed to create product');
            }
        },
        updateProduct: async (
            _: any,
            { id, ...args }: { id: string; [key: string]: any },
            { prisma }: any
        ) => {
            try {
                return await prisma.product.update({ where: { id }, data: args });
            } catch (error) {
                console.error(`Error updating product with id ${id}:`, error);
                throw new Error('Failed to update product');
            }
        },
        deleteProduct: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.product.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting product with id ${id}:`, error);
                throw new Error('Failed to delete product');
            }
        },
    },

    Product: {
        categories: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.category.findMany({
                where: {
                    products: {
                        some: { id: parent.id },
                    },
                },
            });
        },
        variants: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.variantDetail.findMany({
                where: { product_id: parent.id },
            });
        },
    },
};
