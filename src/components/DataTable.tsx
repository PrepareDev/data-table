import React from "react"

export type DataTableProps = {
    table: Record<string, string | number>[]
    headers: string[]
}

export const DataTable: React.FC<DataTableProps> = ({ table, headers }) => {

    return (
        <div className="">
            <table >
                <thead>
                    <tr>
                        {headers.map((k, i) => <th key={i}>{k}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {table.map((row, i) => <tr key={i}>{Object.values(row).map((v, i) => <td key={i}>{v}</td>)}</tr>)}
                </tbody>
            </table>
        </div>
    )
}