import React from "react";
import millify from "millify";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Trow = ({ d1, d2 }) => (
  <>
    <Tr>
      <Td>{d1}</Td>
      <Td>{d2}</Td>
    </Tr>
  </>
);

const TableData = ({
  newCase,
  active,
  critical,
  recovered,
  perMillion,
  total,
}) => {
  return (
    <div>
      <TableContainer mt="3">
        <Table variant={"simple"} size={"md"}>
          <TableCaption placement="top">Cases</TableCaption>
          <Tbody>
            <Trow d1="New" d2={newCase} />
            <Trow d1="Active" d2={millify(active)} />
            <Trow d1="Critical" d2={critical || "no data"} />
            <Trow d1="Recovered" d2={millify(recovered)} />
            <Trow d1="Per Million" d2={millify(perMillion)} />
            <Trow d1="total" d2={millify(total)} />
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
