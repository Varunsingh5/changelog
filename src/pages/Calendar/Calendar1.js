import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  day: string,
  holiday: number,
) {
  return { name, day, holiday, };
}

const rows = [
  createData('26 January', 'Wed', 'Republic Day',),
  createData('18 March', 'Friday', 'Holi',),
  createData('15 August', 'Monday', 'Independence',),
  createData('24 October', 'Monday', 'Diwali',),
  createData('25 December', 'Sunday', "Christmas"),
];



function Calendar1() {



  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container' style={{ marginLeft: "32%" }}>

        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        {/* <span className='bold'>Selected Date:</span>{' '} */}
        {date.toDateString()}
      </p>



      <TableContainer component={Paper} style={{ marginTop: "25px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black", color: "white" }}>
              <TableCell style={{ color: "white" }}>Date</TableCell>
              <TableCell style={{ color: "white" }} align="right">Day</TableCell>
              <TableCell style={{ color: "white" }} align="right">Holiday</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.day}</TableCell>
                <TableCell align="right">{row.holiday}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  );
}

export default Calendar1;