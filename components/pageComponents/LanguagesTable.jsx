
import { useMemo } from 'react'
import { useTable } from 'react-table'

export default function LangaugesTable(props){
    
  const data = useMemo(()=>
    [
        {
          "name": "Python",
          "compatibility":["web","desktop"],
          "scope":["backend"]
        },
        {
            "name": "React",
            "compatibility":["web","desktop"],
            "scope":["frontend"]
        },
        {
            "name": "Javascript",
            "compatibility":["web","desktop"],
            "scope":["frontend","backend"]
        },
        {
            "name": "TypeScript",
            "compatibility":["web","desktop"],
            "scope":["frontend","backend"]
        },
    
    ],[])

    const columns = useMemo(
        () => [
          {
            Header: 'Programming Language',
            columns: [
            {
                Header: 'Name',
                accessor: 'name',
                },
              {
                Header: 'Compatibility',
                accessor: 'compatibility',
              },
              {
                Header: 'Scope',
                accessor: 'scope',
              },
            ],
          }
        ],
        []
      )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        } = useTable({ columns, data })

    const cellClass = "px-4 py-1 "


    return(
        <table {...getTableProps()}>
                
        <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}  className = {cellClass}>{column.render('Header')}</th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()} className = {cellClass}>{cell.render('Cell')}</td>
                })}
                </tr>
            )
            })}
        </tbody>
        </table>
    )
    
}