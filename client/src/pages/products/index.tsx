// // pages/products/index.tsx
//
// import React from 'react';
// import { GetProductsDocument } from '@/graphql/generated/graphql'; // Adjust if your path is different
// import Link from 'next/link';
// import {useQuery} from "@apollo/client";
//
// const ProductsPage = () => {
//     const { data, loading, error } = useQuery(GetProductsDocument);
//
//     if (loading) return <p className="text-center py-10">Loading products...</p>;
//     if (error) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;
//
//     return (
//         <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">Products</h1>
//                 <Link href="/products/create">
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                         + Add Product
//                     </button>
//                 </Link>
//             </div>
//
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {data?.products.map((product) => (
//                     <div key={product.id} className="bg-white shadow p-4 rounded border border-gray-100">
//                         <h2 className="text-lg font-semibold text-blue-700">{product.name}</h2>
//                         <p className="text-sm text-gray-600">{product.description || 'No description'}</p>
//                         <ul className="flex flex-wrap gap-2 mt-1">
//                             {product.categories?.map((category) => (
//                                 <li
//                                     key={category.id}
//                                     className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
//                                 >
//                                     {category.name}
//                                 </li>
//                             ))}
//                         </ul>
//                         {/* Optional: actions like edit/delete can go here */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default ProductsPage;


import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { ColumnDef } from '@tanstack/react-table';


import { GetProductsDocument, Product, Category } from '@/graphql/generated/graphql';
import {Table} from "@/components/common/table";

const ProductsPage = () => {
    const { data, loading, error } = useQuery(GetProductsDocument);

    const columns: ColumnDef<Product>[] = [
        {
            header: '#',
            cell: ({ row }) => row.index + 1,
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Description',
            accessorKey: 'description',
            cell: info => info.getValue() || '—',
        },
        {
            header: 'Categories',
            accessorKey: 'categories',
            cell: info => {
                const cats = info.getValue() as Category[] | null | undefined;
                return cats?.map(c => c.name).join(', ') || '—';
            },
        },
        {
            header: 'Actions',
            cell: ({ row }) => (
                <Link
                    href={`/products/${row.original.id}/edit`}
                    className="text-blue-600 hover:underline"
                >
                    Edit
                </Link>
            ),
        },
    ];

    //if (loading) return <p className="text-center py-10">Loading products...</p>;
    if (error) return <p className="text-center text-red-500 py-10">Error: {error.message}</p>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                <Link href="/products/create">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        + Add Product
                    </button>
                </Link>
            </div>

            <Table<Product>
                data={(data?.products || []) as Product[]}
                columns={columns}
                loading={loading}
            />
        </div>
    );
};

export default ProductsPage;
