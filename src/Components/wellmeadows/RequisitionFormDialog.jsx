import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Typography,
  TextField
} from '@mui/material';

const RequisitionFormDialog = ({ open, onClose }) => {
  const [supplyType, setSupplyType] = useState('');
  const [item, setItem] = useState({
    name: '',
    ward: '',
    costPerUnit: '',
    quantityInStock: '',
    reorderLevel: ''
  });
  const [drug, setDrug] = useState({
    name: '',
    ward: '',
    dosage: '',
    methodOfAdmin: '',
    quantityAdmin: '',
    costPerUnit: '',
    reorderLevel: ''
  });
  const [surgicalHistory, setSurgicalHistory] = useState([]);
  const [pharmaceuticalHistory, setPharmaceuticalHistory] = useState([]);

  const handleSupplyTypeChange = (event) => {
    setSupplyType(event.target.value);
  };

  const handleItemChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleDrugChange = (event) => {
    const { name, value } = event.target;
    setDrug((prevDrug) => ({
      ...prevDrug,
      [name]: value
    }));
  };

  const handleAdd = () => {
    // Add the current item or drug to the appropriate history
    if (supplyType === 'surgical') {
      setSurgicalHistory((prevHistory) => [...prevHistory, { ...item, type: 'Item' }]);
    } else if (supplyType === 'pharmaceutical') {
      setPharmaceuticalHistory((prevHistory) => [...prevHistory, { ...drug, type: 'Drug' }]);
    }

    // Reset the form fields
    setItem({
      name: '',
      ward: '',
      costPerUnit: '',
      quantityInStock: '',
      reorderLevel: ''
    });
    setDrug({
      name: '',
      ward: '',
      dosage: '',
      methodOfAdmin: '',
      quantityAdmin: '',
      costPerUnit: '',
      reorderLevel: ''
    });
  };

  const handleSubmit = () => {
    // Add the current item or drug to the appropriate history
    handleAdd();
    // Close the dialog
    onClose();
  };

  const getTitle = () => {
    switch (supplyType) {
      case 'surgical':
        return 'Requisition Form';
      case 'pharmaceutical':
        return 'Requisition Form';
      default:
        return 'Requisition Form';
    }
  };

  const renderFormFields = () => {
    if (supplyType === 'surgical') {
      return (
        <>
          <Typography
            variant="h6"
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
            Create Item Requisition
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
            <Select
              label="Item"
              name="name"
              value={item.name}
              onChange={handleItemChange}
              sx={{ width: '48%', marginBottom: 1 }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em>Select Item</em>
              </MenuItem>
              <MenuItem value="item1">Item 1</MenuItem>
              <MenuItem value="item2">Item 2</MenuItem>
              <MenuItem value="item3">Item 3</MenuItem>
            </Select>
            <Select
              label="Ward"
              name="ward"
              value={item.ward}
              onChange={handleItemChange}
              sx={{ width: '48%', marginBottom: 1 }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em>Select Ward</em>
              </MenuItem>
              <MenuItem value="ward1">Ward 1</MenuItem>
              <MenuItem value="ward2">Ward 2</MenuItem>
              <MenuItem value="ward3">Ward 3</MenuItem>
            </Select>
            <TextField
              label="Cost per Unit"
              name="costPerUnit"
              value={item.costPerUnit}
              onChange={handleItemChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
            <TextField
              label="Quantity in Stock"
              name="quantityInStock"
              value={item.quantityInStock}
              onChange={handleItemChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
            <TextField
              label="Reorder Level"
              name="reorderLevel"
              value={item.reorderLevel}
              onChange={handleItemChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
          </Box>
          <DialogActions>
            <Button onClick={handleAdd} color="primary">
              Add Item
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Create Requisition
            </Button>
          </DialogActions>
        </>
      );
    } else if (supplyType === 'pharmaceutical') {
      return (
        <>
          <Typography
            variant="h6"
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
            Create Drug Requisition
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
            <Select
              label="Drug"
              name="name"
              value={drug.name}
              onChange={handleDrugChange}
              sx={{ width: '48%', marginBottom: 1 }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em>Select Drug</em>
              </MenuItem>
              <MenuItem value="drug1">Drug 1</MenuItem>
              <MenuItem value="drug2">Drug 2</MenuItem>
              <MenuItem value="drug3">Drug 3</MenuItem>
            </Select>
            <Select
              label="Ward"
              name="ward"
              value={drug.ward}
              onChange={handleDrugChange}
              sx={{ width: '48%', marginBottom: 1 }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em>Select Ward</em>
              </MenuItem>
              <MenuItem value="ward1">Ward 1</MenuItem>
              <MenuItem value="ward2">Ward 2</MenuItem>
              <MenuItem value="ward3">Ward 3</MenuItem>
            </Select>
            <TextField
              label="Dosage"
              name="dosage"
              value={drug.dosage}
              onChange={handleDrugChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
            <TextField
              label="Method of Administration"
              name="methodOfAdmin"
              value={drug.methodOfAdmin}
              onChange={handleDrugChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
            <TextField
              label="Quantity of Administration"
              name="quantityAdmin"
              value={drug.quantityAdmin}
              onChange={handleDrugChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
            <TextField
              label="Cost per Unit"
              name="costPerUnit"
              value={drug.costPerUnit}
              onChange={handleDrugChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
            <TextField
              label="Reorder Level"
              name="reorderLevel"
              value={drug.reorderLevel}
              onChange={handleDrugChange}
              sx={{ width: '48%', marginBottom: 1 }}
              margin="dense"
            />
          </Box>
          <DialogActions>
            <Button onClick={handleAdd} color="primary">
              Add Drug
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Create Requisition
            </Button>
          </DialogActions>
        </>
      );
    }
    return null;
  };

  const renderHistory = () => {
    const history = supplyType === 'surgical' ? surgicalHistory : pharmaceuticalHistory;
    return (
      <Box sx={{ maxHeight: 200, overflowY: 'auto', border: '1px solid #ccc', padding: 1 }}>
        {history.map((entry, index) => (
          <Box key={index} sx={{ marginBottom: 1, padding: 1, border: '1px solid #ddd' }}>
            <Typography variant="body1"><strong>Type:</strong> {entry.type}</Typography>
            <Typography variant="body2"><strong>Name:</strong> {entry.name}</Typography>
            <Typography variant="body2"><strong>Ward:</strong> {entry.ward}</Typography>
            {entry.type === 'Item' ? (
              <>
                <Typography variant="body2"><strong>Cost per Unit:</strong> {entry.costPerUnit}</Typography>
                <Typography variant="body2"><strong>Quantity in Stock:</strong> {entry.quantityInStock}</Typography>
                <Typography variant="body2"><strong>Reorder Level:</strong> {entry.reorderLevel}</Typography>
              </>
            ) : (
              <>
                <Typography variant="body2"><strong>Dosage:</strong> {entry.dosage}</Typography>
                <Typography variant="body2"><strong>Method of Administration:</strong> {entry.methodOfAdmin}</Typography>
                <Typography variant="body2"><strong>Quantity of Administration:</strong> {entry.quantityAdmin}</Typography>
                <Typography variant="body2"><strong>Cost per Unit:</strong> {entry.costPerUnit}</Typography>
                <Typography variant="body2"><strong>Reorder Level:</strong> {entry.reorderLevel}</Typography>
              </>
            )}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogContent>
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h6"
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
            Create Requisition
          </Typography>
          <Typography sx={{ marginBottom: 1 }}>Choose from</Typography>
          <Select
            value={supplyType}
            onChange={handleSupplyTypeChange}
            displayEmpty
            fullWidth
            sx={{ marginBottom: 4 }}
          >
            <MenuItem value="" disabled>
              <em>Select Supply Type</em>
            </MenuItem>
            <MenuItem value="surgical">Surgical or Non-Surgical Supplies</MenuItem>
            <MenuItem value="pharmaceutical">Pharmaceutical Supplies</MenuItem>
          </Select>

          {/* Render additional form fields based on supplyType */}
          {renderFormFields()}

          <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
            History
          </Typography>
          {renderHistory()}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RequisitionFormDialog;
