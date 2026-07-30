import { cn } from "@/lib/utils";

interface Column {
  header: string;
  key: string;
}

interface DataTableProps {
  columns: Column[];
  rows: Record<string, React.ReactNode>[];
  className?: string;
}

export function DataTable({ columns, rows, className }: DataTableProps) {
  return (
    <div className={cn("overflow-x-auto my-8", className)}>
      <table className="w-full text-left border-collapse bg-surface-container-lowest glass-edge">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-4 font-label text-label-caps text-on-surface-variant uppercase"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={cn(
                "border-b border-white/5",
                index === rows.length - 1 && "border-b-0"
              )}
            >
              {columns.map((column) => (
                <td key={column.key} className="p-4 text-on-surface">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
