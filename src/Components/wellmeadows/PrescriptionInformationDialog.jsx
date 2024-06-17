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

const PrescriptionInformationDialog = ({ open, onClose }) => {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedPatientName, setSelectedPatientName] = useState('');
  const [drugName, setDrugName] = useState('');
  const [methodOfAdmin, setMethodOfAdmin] = useState('');
  const [startDate, setStartDate] = useState('');
  const [unitsPerDay, setUnitsPerDay] = useState('');
  const [finishDate, setFinishDate] = useState('');

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleSelectedPatientNameChange = (event) => {
    setSelectedPatientName(event.target.value);
  };

  const handleDrugNameChange = (event) => {
    setDrugName(event.target.value);
  };

  const handleMethodOfAdminChange = (event) => {
    setMethodOfAdmin(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleUnitsPerDayChange = (event) => {
    setUnitsPerDay(event.target.value);
  };

  const handleFinishDateChange = (event) => {
    setFinishDate(event.target.value);
  };

  const handleCreatePrescription = () => {
    // Implement logic to create prescription here
    console.log('Prescription created!');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Prescription Information</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} fontFamily="Roboto">
          <Box style={{ background: 'linear-gradient(90deg, #009DD1 24%, #00506B 100%)', padding: '10px 15px', borderRadius: '4px' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#FFF' }}>
              Select Patient
            </Typography>
          </Box>
        
          <Typography variant="subtitle1" gutterBottom>In-Patient Name</Typography>
          <Box>
            <Select value={selectedPatient} onChange={handlePatientChange} fullWidth>
              <MenuItem value="">Select Patient</MenuItem>
              <MenuItem value="John Doe" onClick={() => setSelectedPatientName("John Doe")}>John Doe</MenuItem>
              <MenuItem value="Jane Doe" onClick={() => setSelectedPatientName("Jane Doe")}>Jane Doe</MenuItem>
            </Select>
          </Box>
          <Box style={{ background: 'linear-gradient(90deg, #009DD1 24%, #00506B 100%)', padding: '10px 15px', borderRadius: '4px' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#FFF' }}>
              Prescription Details
            </Typography>
          </Box>
          <TextField
            label="Drug Name"
            value={drugName}
            onChange={handleDrugNameChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Method of Admin"
            value={methodOfAdmin}
            onChange={handleMethodOfAdminChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Units Per Day"
            value={unitsPerDay}
            onChange={handleUnitsPerDayChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Finish Date"
            type="date"
            value={finishDate}
            onChange={handleFinishDateChange}
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" onClick={handleCreatePrescription}>
            Create Prescription
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PrescriptionInformationDialog;
