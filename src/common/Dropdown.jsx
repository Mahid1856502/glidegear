import { Select, styled } from '@mui/material';

const MinimalSelect = styled(Select)(() => ({
  //   width: 100,
  color: '#fff',
  fontWeight: '400',
  fontSize: '0.9rem',
  background: 'transparent',
  border: 0,
  boxShadow: 'none',
  '.MuiOutlinedInput-notchedOutline': { border: 0 },
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
}));

export default MinimalSelect;
