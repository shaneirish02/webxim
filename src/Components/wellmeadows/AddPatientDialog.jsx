import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AddPatientDialog({ open, onClose }) {
    const [step, setStep] = useState(1);

    const handleProceed = () => {
        setStep(step + 1);
    };

    const handleClose = () => {
        setStep(1); // Reset to step 1 when closing the dialog
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogContent>
                <Box sx={{ padding: 1 }}>
                    <Typography
                        sx={{
                            color: 'black',
                            fontSize: 24,
                            fontFamily: 'Roboto',
                            fontWeight: '700',
                            marginBottom: 2,
                        }}
                    >
                        {step === 1 ? 'Add Patient' : 'Add Patient'}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            background:
                                'linear-gradient(90deg, #009DD1 24%, #00506B 100%)',
                            padding: 1,
                            borderRadius: 1,
                            marginBottom: 2,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: 20,
                                fontFamily: 'Roboto',
                                fontWeight: '400',
                                paddingLeft: 1,
                            }}
                        >
                            {step === 1 ? 'Patient Information' : 'Next-Of-Kin Details'}
                        </Typography>
                    </Box>

                    {step === 1 && (
                        <PatientInformation handleProceed={handleProceed} />
                    )}

                    {step === 2 && (
                        <NextOfKinDetails handleProceed={handleProceed} onClose={handleClose} />
                    )}

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

function PatientInformation({ handleProceed }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <TextField fullWidth variant="outlined" size="small" label="First Name" />
            <TextField fullWidth variant="outlined" size="small" label="Last Name" />
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                select
                label="Sex"
                defaultValue="Male"
            >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <TextField fullWidth variant="outlined" size="small" label="Address" />
            <TextField fullWidth variant="outlined" size="small" label="Telephone Number" />
            <TextField fullWidth variant="outlined" size="small" label="Date Registered" />
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                type="date"
                label="Date of Birth"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                select
                label="Marital Status"
                defaultValue="Single"
            >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
            </TextField>
            
            <Button variant="contained" color="primary" onClick={handleProceed} sx={{ mt: 2 }}>
                Proceed
            </Button>
        </Box>
    );
}

function NextOfKinDetails({ handleProceed, onClose }) {
    const [showAddDoctorDialog, setShowAddDoctorDialog] = useState(false);

    const handleOpenAddDoctorDialog = () => {
        setShowAddDoctorDialog(true);
    };

    const handleCloseAddDoctorDialog = () => {
        setShowAddDoctorDialog(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <TextField fullWidth variant="outlined" size="small" label="First Name" />
            <TextField fullWidth variant="outlined" size="small" label="Last Name" />
            <TextField fullWidth variant="outlined" size="small" label="Relationship" />
            <TextField fullWidth variant="outlined" size="small" label="Address" />
            <TextField fullWidth variant="outlined" size="small" label="Telephone Number" />
            
            <Typography
                sx={{
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    background: 'linear-gradient(90deg, #009DD1 24%, #00506B 100%)',
                    width: '100%',
                    padding: 1,
                    borderRadius: 1,
                    marginBottom: 2,
                    
                }}
            >
                Local Doctor Referral
            </Typography>
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                select
                label="Select the doctor who referred the patient"
            >
                <MenuItem value="Doctor 1">Doctor 1</MenuItem>
                <MenuItem value="Doctor 2">Doctor 2</MenuItem>
                <MenuItem value="Doctor 3">Doctor 3</MenuItem>
            </TextField>
            <Typography
                sx={{ color: 'black', fontSize: 14, mt: 1 }}
            >
                Doctor not listed? <a href="#add-new-doctor" onClick={handleOpenAddDoctorDialog} style={{ color: '#009DD1' }}>Click here</a> to add new local doctor
            </Typography>
            
            <AddDoctorDialog open={showAddDoctorDialog} onClose={handleCloseAddDoctorDialog} />
            
            <Button variant="contained" color="primary" onClick={onClose} sx={{ mt: 2 }}>
                Add Patient
            </Button>
        </Box>
    );
}

function AddDoctorDialog({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogContent>
                <Box sx={{ padding: 1 }}>
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: 20,
                            fontFamily: 'Roboto',
                            fontWeight: '400',
                            background: 'linear-gradient(90deg, #009DD1 24%, #00506B 100%)',
                            width: '100%',
                            padding: 1,
                            borderRadius: 1,
                            marginBottom: 2,
                        }}
                    >
                        Add New Doctor
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <TextField fullWidth variant="outlined" size="small" label="First Name" />
                        <TextField fullWidth variant="outlined" size="small" label="Last Name" />
                        <TextField fullWidth variant="outlined" size="small" label="Specialization" />
                        <TextField fullWidth variant="outlined" size="small" label="Address" />
                        <TextField fullWidth variant="outlined" size="small" label="Telephone Number" />
                    </Box>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={onClose}>
                            Save
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
    );
}