
import PassengerTable from '../components/Table';
import { Stack, Typography } from '@mui/material';

const PassengerPage = () => {
  return (
    <Stack>
       <Typography variant="h4" component='h1' align="center" gutterBottom>
        Tabel Penumpang
      </Typography>
      <PassengerTable />
    </Stack>
  );
};

export default PassengerPage;
