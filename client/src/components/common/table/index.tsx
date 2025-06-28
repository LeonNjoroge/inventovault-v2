import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table';
import {TableProps} from "@/interfaces";



export function Table<T extends object>({ data, columns, loading = false, onRowClick }: TableProps<T>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="p-4">
        <table className="min-w-full table-auto border border-gray-200">
        <thead className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                                <th key={header.id} className="p-2 text-left border-b border-gray-300">
                            {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
    ))}
    </tr>
))}
    </thead>
    <tbody>
    {loading ? (
        Array.from({ length: 5 }).map((_, rowIdx) => (
            <tr key={`skeleton-${rowIdx}`} className="animate-pulse">
                {columns.map((_, colIdx) => (
                    <td key={colIdx} className="p-2 border-b border-gray-200">
                        <div className="h-4 bg-gray-300 rounded w-full" />
                    </td>
                ))}
            </tr>
        ))
    ) : (
        table.getRowModel().rows.map(row => (
            <tr
                key={row.id}
    className="hover:bg-gray-100 cursor-pointer"
    onClick={() => onRowClick?.(row.original)}
>
    {row.getVisibleCells().map(cell => (
        <td key={cell.id} className="p-2 border-b border-gray-200">
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
    ))}
    </tr>
))
)}
    </tbody>
    </table>

    <div className="mt-4 flex justify-between items-center">
    <button
        onClick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
    className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
        Previous
        </button>
        <span>
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </span>
    <button
    onClick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
    className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
        Next
        </button>
        </div>
        </div>
);
}
