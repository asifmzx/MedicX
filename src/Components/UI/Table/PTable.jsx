const PTable = ({ columns, data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[700px] w-full bg-white border-b border-gray-200 rounded-lg text-sm">
        <thead>
          <tr className=" text-left font-semibold text-gray-600">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-3 whitespace-nowrap border-b border-gray-200"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center px-4 py-4">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                {columns.map((col, colIndex) => {
                  const value = row[col.key];
                  return (
                    <td
                      key={colIndex}
                      className="px-4 py-3 border-b border-gray-200 whitespace-nowrap"
                    >
                      {col.render ? col.render(row) : value || "-"}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PTable;
