import React, { useContext, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';

interface ItemProps {
  name: string;
  qty: number;
  price: number | string;
}

const ItemContext = React.createContext<ItemProps | undefined>(undefined);

const Item = () => {
  const item = useContext(ItemContext);

  useEffect(() => {
    console.log('data', item);
  }, [item]);

  return (
    <div className="item">
      <span>Hello World</span>
    </div>
  );
};

const ContextPage = () => {
  return (
    <Stack>
       <Typography variant="h4" component='h1' align="center" gutterBottom>
        React Context Pattern
      </Typography>
      <ItemContext.Provider value={{ name: 'Bread', qty: 20, price: '$3' }}>
        <Item />
      </ItemContext.Provider>
    </Stack>
  );
};

export default ContextPage;
