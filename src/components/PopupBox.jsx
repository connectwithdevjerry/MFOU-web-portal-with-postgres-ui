const PopupBox = ({
  name,
  number,
  id,
  plot = false,
  land_use,
  date_registered,
  surveyor,
  plot_owner,
  ccp_number,
  block_number,
}) => {
  return (
    <div
      style={{
        margin: "0px 0px 0px 0px",
        overflow: "auto",
        background: "#FFFFFF",
      }}
    >
      <table
        style={{
          fontFamily: "Arial,Verdana,Times",
          fontSize: "12px",
          textAlign: "left",
          width: "100%",
          borderCollapse: "collapse",
          padding: "3px 3px 3px 3px",
        }}
      >
        <tr
          style={{
            textAlign: "center",
            fontWeight: "bold",
            background: "#9CBCE2",
          }}
        >
          <td>{plot ? plot_owner : name}</td>
        </tr>

        <tr>
          <td>
            <table
              style={{
                fontFamily: "Arial,Verdana,Times",
                fontSize: "12px",
                textAlign: "left",
                width: "100%",
                borderSpacing: "0px",
                padding: "3px 3px 3px 3px",
              }}
            >
              <tr>
                <td>FID</td>

                <td>0</td>
              </tr>

              <tr bgcolor="#D4E4F3">
                <td>Id</td>

                <td>{id}</td>
              </tr>

              <tr>
                <td>{plot ? "plot_owner" : "Name"}</td>

                <td>{plot ? plot_owner : name}</td>
              </tr>

              {plot && (
                <>
                  <tr bgcolor="#D4E4F3">
                    <td>ccp_number</td>

                    <td>{ccp_number}</td>
                  </tr>
                  <tr>
                    <td>land_use</td>

                    <td>{land_use}</td>
                  </tr>
                  <tr bgcolor="#D4E4F3">
                    <td>date_registered</td>

                    <td>{date_registered}</td>
                  </tr>
                  <tr>
                    <td>surveyor</td>

                    <td>{surveyor}</td>
                  </tr>
                  <tr bgcolor="#D4E4F3">
                    <td>block_number</td>

                    <td>{block_number}</td>
                  </tr>
                </>
              )}

              <tr bgcolor="#D4E4F3">
                <td>{!plot && "Block No"}</td>

                <td>{!plot && number}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PopupBox;
