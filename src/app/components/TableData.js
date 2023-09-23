const TableData = ({ updateData, page, showPage }) => {
  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Email</th>
            <th>Severity</th>
            <th>Timestamp</th>
          </tr>

          {updateData
            .slice(page * showPage - showPage, page * showPage)
            ?.map((el, index) => (
              <tr key={index}>
                <td>{el?.stringValue}</td>
                <td>{el?.severity}</td>
                <td>{el?.timestamp?.seconds}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
