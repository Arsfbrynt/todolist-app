import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2fcc71',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const passengerList = [
  {
    "id": "KJSD93",
    "name": "Maria Anders",
    "age": 20,
  },
  {
    "id": "KJSD94",
    "name": "Francisco Chang",
    "age": 35,
  },
  {
    "id": "KJSD95",
    "name": "Anna Angelo",
    "age": 28,
  }
];

const PassengerTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {passengerList.map((passenger) => (
            <TableRow key={passenger.id}>
              <TableCell>{passenger.id}</TableCell>
              <TableCell>{passenger.name}</TableCell>
              <TableCell>{passenger.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PassengerTable;
