import {ReactNode} from "react";
import {ColumnDef} from "@tanstack/react-table";

export interface LayoutProps {
    children: ReactNode;
}
export interface TableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T, any>[];
    loading?: boolean;
    onRowClick?: (row: T) => void;
}