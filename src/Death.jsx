import React from 'react'
import millify from 'millify'
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
  } from '@chakra-ui/react'

const Trow=({d1,d2})=>(
<>
<Tr>
    <Td>{d1}</Td>
    <Td>{d2}</Td>
</Tr>
</>
)

const Death = ({newCase, perMillion, total}) => {
  return (
    <div>
        <TableContainer mt='3'>
            <Table variant={'simple'} size={'md'} >
                <TableCaption placement='top'>
                    Deaths
                </TableCaption>
                <Tbody>
                  <Trow d1='New' d2={newCase}/>
                  <Trow d1='Per Million' d2={millify(perMillion)}/>
                  <Trow d1='total' d2={millify(total)}/>
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Death