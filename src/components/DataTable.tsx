import React from "react"
import { Table } from "../types"

export type DataTableProps = {
    table: Record<string, string | number>[]

}



export const DataTable: React.FC<DataTableProps> = ({ table }) => {

    const tableHeaders = Object.keys(table[0])
    const rows = Object.values(table)

    console.log(rows)
    return (
        <div className="">
            <h1 className="font-bold text-5xl"> Data Table Project </h1>
            <table >
                <thead>
                    <tr>
                        {tableHeaders.map(k => <th>{k}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => <tr>{Object.values(row).map(v => <td>{v}</td>)}</tr>)}
                </tbody>
            </table>
            <h2 className="text-4xl"> Implement me </h2>
        </div>
    )
}