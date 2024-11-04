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
import {useState} from "react";


const jsonData = [
  {"Campaign": "Allete, Inc.", "Brand": "NYSE", "start date": 2017, "end date": 2005, "status": "Pending"},
  {"Campaign": "Casella Waste Systems, Inc.", "Brand": "NASDAQ", "start date": 0, "end date": 2003, "status": "Declined"},
  {"Campaign": "American Airlines Group, Inc.", "Brand": "NASDAQ", "start date": 2017, "end date": 2019, "status": "Accepted"},
  {"Campaign": "South State Corporation", "Brand": "NASDAQ", "start date": 2015, "end date": 2019, "status": "Inprogress"},
  {"Campaign": "Cascadian Therapeutics, Inc.", "Brand": "NASDAQ", "start date": 2013, "end date": 2010, "status": "Pending"},
  {"Campaign": "Kitov Pharmaceuticals Holdings Ltd.", "Brand": "NASDAQ", "start date": 2019, "end date": 2011, "status": "Declined"},
  {"Campaign": "First Cash, Inc.", "Brand": "NYSE", "start date": 2004, "end date": 2012, "status": "Accepted"},
  {"Campaign": "Independence Contract Drilling, Inc.", "Brand": "NYSE", "start date": 2012, "end date": 1998, "status": "Inprogress"},
  {"Campaign": "Transglobe Energy Corp", "Brand": "NASDAQ", "start date": 2004, "end date": 2013, "status": "Pending"},
  {"Campaign": "KAR Auction Services, Inc", "Brand": "NYSE", "start date": 2007, "end date": 2017, "status": "Accepted"}
];


const rows = jsonData.map((data, index) => ({
  id: index + 1,
  Campaign: data.Campaign,
  Brand: data.Brand,
  StartDate: data["start date"],
  EndDate: data["end date"],
  Status:data.status,
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
    id: 'Campaign',
    numeric: false,
    disablePadding: false,
    label: 'Campaign',
  },
  {
    id: 'Brand',
    numeric: false,
    disablePadding: false,
    label: 'Brand',
  },
  {
    id: 'StartDate',
    numeric: true,
    disablePadding: false,
    label: 'Start Date',
  },
  {
    id: 'EndDate',
    numeric: true,
    disablePadding: false,
    label: 'End Date',
  },
  {
    id: 'Status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
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
              style={{color:'#ffffff'}}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{ ...visuallyHidden, color: '#ffffff' }}>
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

export default function MyCampaigns() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Brand');
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


  function getButtonStyles(text) {
    switch (text.toLowerCase().trim()) {
      case 'pending':
        return {
          borderColor: '#00b6ff',
          color: '#00b6ff',
          backgroundColor: '#00b6ff1f',
        };
      case 'accepted':
        return {
          borderColor: '#00a96e',
          color: '#00a96e',
          backgroundColor: '#00a96e1f',
        };
      case 'inprogress':
        return {
          borderColor: '#ffbe00',
          color: '#ffbe00',
          backgroundColor: '#ffbe001f',
        };
      case 'declined':
        return {
          borderColor: '#ff5861',
          color: '#ff5861',
          backgroundColor: '#ff58611f',
        };
      default:
        return {
          borderColor: '#969caa',
          color: '#969caa',
          backgroundColor: '#969caa1f',
        };
    }
  }
  

  const isSelected = (id) => selected.indexOf(id) !== -1;

 
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const filteredRows = rows.filter(row => 
    row.Campaign.toLowerCase().includes(query.toLowerCase()) ||
    row.Brand.toLowerCase().includes(query.toLowerCase()) ||
    row.Status.toLowerCase().includes(query.toLowerCase()) ||
    row.StartDate.toString().toLowerCase().includes(query.toLowerCase()) ||
    row.EndDate.toString().toLowerCase().includes(query.toLowerCase())
  );

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, filteredRows],
  );

  // const navigate= useNavigate();


  return (
    <div className="w-screen h-screen pb-20 flex flex-col justify-center xl:justify-start mt-16 lg:ml-[320px]" style={{ backgroundColor: '#282E38'}}>
        <div className=" h-fit px-4 mx-4 xl:mx-20 mt-6 rounded-md border-gray-800 border py-8 xl:px-12" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>

        <div className="flex justify-between items-center">
            <div ><p className="font-semibold text-2xl text-white">My Campaigns</p></div>
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
              style={{color:'white'}}
             
            />
            <TableBody >
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                const buttonStyles = getButtonStyles(row.Status);
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    
                  >
                    <TableCell align="left" style={{ color: 'white', borderBottom: '1px solid #969caa' }}>
  {row.Status === "Accepted" ? (
    <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/tasks')}>
      {row.Campaign}
    </span>
  ) : (
    row.Campaign
  )}
</TableCell>
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}>{row.Brand}</TableCell>
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}>{row.StartDate}</TableCell>
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}>{row.EndDate}</TableCell>
                    <TableCell align="left" style={{color:'white',borderBottom: '1px solid #969caa'}}><button className=" px-3 py-1 rounded-md border cursor-auto" style={buttonStyles}>{row.Status}</button></TableCell>
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
          rowsPerPageOptions={[5,10,15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{backgroundColor:'#303743',color:'white'}}
        />
      </Paper>
    </Box>
  </div>
 </div>
  );
}