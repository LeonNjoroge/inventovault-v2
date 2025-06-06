export const categoryResolvers = {
    Query: {
        categories: async (_: any, __: any, { prisma }: any) => {
            try {
                return await prisma.category.findMany();
            } catch (error) {
                console.error('Error fetching categories:', error);
                throw new Error('Failed to fetch categories');
            }
        },
        category: async (_: any, { id }: { id: string }, { prisma }: any) => {
            try {
                return await prisma.category.findUnique({ where: { id } });
            } catch (error) {
                console.error(`Error fetching category with id ${id}:`, error);
                throw new Error('Failed to fetch category');
            }
        },
    },


    Mutation: {
        createCategory: async (_: any, { input }: any, { prisma }: any) => {
            try {
                return await prisma.category.create({ data: input });
            } catch (error) {
                console.error('Error creating category:', error);
                throw new Error('Failed to create category');
            }
        },
        updateCategory: async (_: any, { id, input }: any, { prisma }: any) => {
            try {
                return await prisma.category.update({
                    where: { id },
                    data: input,
                });
            } catch (error) {
                console.error(`Error updating category with id ${id}:`, error);
                throw new Error('Failed to update category');
            }
        },
        deleteCategory: async (_: any, { id }: any, { prisma }: any) => {
            try {
                return await prisma.category.delete({ where: { id } });
            } catch (error) {
                console.error(`Error deleting category with id ${id}:`, error);
                throw new Error('Failed to delete category');
            }
        },
    },


    Category: {
        products: async (parent: any, _: any, { prisma }: any) => {
            return await prisma.product.findMany({
                where: {
                    categories: {
                        some: { id: parent.id },
                    },
                },
            });
        },
    },
};
