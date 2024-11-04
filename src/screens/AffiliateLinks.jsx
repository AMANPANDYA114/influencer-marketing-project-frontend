import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { IoFilter } from 'react-icons/io5';
import { DeckOutlined, Pending } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function createData(id, Brand, Metric1, Metric2, Metric3, Link) {
  return {
    id,
    Brand,
    Metric1,
    Metric2,
    Metric3,
    Link,
  };
}

const jsonData =[
  {
    "id": "1",
    "Brand": "Amazon",
    "Metric1": "21K",
    "Metric2": "30K",
    "Metric3": "4K+",
    "Link": "https://www.linkedin.com/"
  },
  {
    "id": "2",
    "Brand": "Flipkart",
    "Metric1": "20K",
    "Metric2": "130K",
    "Metric3": "2K+",
    "Link": "https://www.linkedin.com/"
  },
  {
    "id": "3",
    "Brand": "Myntra",
    "Metric1": "12K",
    "Metric2": "310K",
    "Metric3": "1K+",
    "Link": "https://www.linkedin.com/"
  },
  {
    "id": "4",
    "Brand": "Ajio",
    "Metric1": "11K",
    "Metric2": "300K",
    "Metric3": "8K+",
    "Link": "https://www.linkedin.com/"
  },
  {
    "id": "5",
    "Brand": "Meesho",
    "Metric1": "2K",
    "Metric2": "3K",
    "Metric3": "9K+",
    "Link": "https://www.linkedin.com/"
  },
  {
    "id": "6",
    "Brand": "Zomato",
    "Metric1": "1K",
    "Metric2": "1K",
    "Metric3": "14K+",
    "Link": "https://www.linkedin.com/"
  },
  {
    "id": "7",
    "Brand": "Swiggy",
    "Metric1": "111K",
    "Metric2": "20K",
    "Metric3": "134K+",
    "Link": "https://www.linkedin.com/"
  }
]


const rows = jsonData.map((data, index) => ({
  id: index + 1,
  Brand: data.Brand,
  Metric1: data.Metric1,
  Metric2: data.Metric2,
  Metric3: data.Metric3,
  Link: data.Link
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Brand',
    numeric: false,
    disablePadding: false,
    label: 'Brand',
  },
  {
    id: 'Metric1',
    numeric: false,
    disablePadding: false,
    label: 'Metric1',
  },
  {
    id: 'Metric2',
    numeric: false,
    disablePadding: false,
    label: 'Metric2',
  },
  {
    id: 'Metric3',
    numeric: false,
    disablePadding: false,
    label: 'Metric3',
  },
  {
    id: 'Link',
    numeric: false,
    disablePadding: false,
    label: 'Link',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    if(property!=="Link") onRequestSort(event, property);
    
  };

  return (
    <TableHead>
      <TableRow>
    
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{color:'white'}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              style={{color:'white'}}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{ ...visuallyHidden, color: 'rgba(255, 255, 255, 0.6)' }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function AffiliateLinks() {
  const [query, setQuery] = useState("");
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Metric1');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };


 
  
  
  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const filteredRows = rows.filter(row => 
      row.Brand.toLowerCase().includes(query.toLowerCase()) ||
      row.Metric1.toString().toLowerCase().includes(query.toLowerCase()) ||
      row.Metric2.toString().toLowerCase().includes(query.toLowerCase()) ||
      row.Metric3.toString().toLowerCase().includes(query.toLowerCase()) ||
      row.Link.toLowerCase().includes(query.toLowerCase())
    );

    const visibleRows = React.useMemo(
      () =>
        stableSort(filteredRows, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage, filteredRows],
    );

  const navigate= useNavigate();


  return (
    <div className="w-screen h-screen pb-20 flex flex-col justify-center xl:justify-start mt-16 lg:ml-[320px]" style={{ backgroundColor: '#282E38'}}>
        <div className=" h-fit px-4 mx-4 xl:mx-20 mt-6 rounded-md border-gray-800 border py-8 xl:px-12" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>

        <div className="flex justify-between items-center">
            <div ><p className="font-semibold text-2xl text-white">Campaigns</p></div>
            <div className="w-3/5 flex items-center justify-start py-2 rounded-md" style={{backgroundColor: 'rgb(59 65 77)'}}>
            <div 
      className='flex items-center justify-start'
      style={{ cursor: 'text', width: '100%', padding: '8px', borderRadius: '8px', backgroundColor: 'rgb(59 65 77)' }}
    >
      <CiSearch size={20} color='gray' style={{ marginInline: 8 }} />
      <input
        placeholder="Search"
        className='w-full h-full'
        style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white' }}
        onChange={event => setQuery(event.target.value)}
      />
    </div>
            </div>
            {/* <div>  */}
                {/* <button class="flex text-base items-center bg-transparent hover:bg-blue-500 text-white font-normal hover:text-white py-2 px-4 border hover:border-transparent rounded">
                  <IoFilter style={{marginInline:4}} size={16}/>
                  Filter
                </button> */}

                  
            {/* </div> */}
        </div>









      <Box sx={{ width: '100%', mt: 4, boxShadow: 'none' }}>
      <Paper sx={{ width: '100%', mb: 2,boxShadow: 'none' }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            style={{backgroundColor:'#303743'}}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
             
            />
            <TableBody >
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                // const buttonStyles = getButtonStyles(row.Link);
                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    // sx={{ cursor: 'pointer' }}
                  >
                    {/* <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell> */}
                    {/* <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.Brand}
                    </TableCell> */}
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}>{row.Brand}</TableCell>
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}>{row.Metric1}</TableCell>
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}>{row.Metric2}</TableCell>
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}>{row.Metric3}</TableCell>
                    <TableCell align="left" style={{ color: 'white', borderBottom: '1px solid #969caa' }}>
    <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/individual-affiliate')}>
      Click here
    </span></TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{backgroundColor:'#303743',color:'white'}}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  </div>
 </div>
  );
}