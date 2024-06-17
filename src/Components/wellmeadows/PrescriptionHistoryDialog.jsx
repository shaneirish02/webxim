import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PrescriptionHistoryDialog = ({ open, onClose }) => {
  const [selectedPatient, setSelectedPatient] = useState('');

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleCreatePrescription = () => {
    // Implement logic to create prescription here
    console.log('Prescription created!');
    onClose();
  };

  // Sample data for prescription history
  const prescriptionHistory = [
    { drugName: 'Drug A', unitsPerDay: '2', methodOfAdmin: 'Oral', startDate: '2023-01-01', endDate: '2023-01-10' },
    { drugName: 'Drug B', unitsPerDay: '1', methodOfAdmin: 'Injection', startDate: '2023-02-01', endDate: '2023-02-07' },
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Prescription History</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} fontFamily="Roboto">
          <Box style={{ background: 'linear-gradient(90deg, #009DD1 24%, #00506B 100%)', padding: '10px 15px', borderRadius: '4px' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#FFF' }}>
              Patient Prescription History
            </Typography>
          </Box>
        
          <Typography variant="subtitle1" gutterBottom>In-Patient</Typography>
          <Box>
            <Select value={selectedPatient} onChange={handlePatientChange} fullWidth>
              <MenuItem value="">Select Patient</MenuItem>
              <MenuItem value="John Doe">John Doe</MenuItem>
              <MenuItem value="Jane Doe">Jane Doe</MenuItem>
            </Select>
          </Box>

          <Box style={{ background: 'linear-gradient(90deg, #009DD1 24%, #00506B 100%)', padding: '10px 15px', borderRadius: '4px', marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#FFF' }}>
              Prescription Details
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Drug Name</TableCell>
                  <TableCell>Units Per Day</TableCell>
                  <TableCell>Method of Admin</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {prescriptionHistory.map((prescription, index) => (
                  <TableRow key={index}>
                    <TableCell>{prescription.drugName}</TableCell>
                    <TableCell>{prescription.unitsPerDay}</TableCell>
                    <TableCell>{prescription.methodOfAdmin}</TableCell>
                    <TableCell>{prescription.startDate}</TableCell>
                    <TableCell>{prescription.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button variant="contained" onClick={handleCreatePrescription}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PrescriptionHistoryDialog;
