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
