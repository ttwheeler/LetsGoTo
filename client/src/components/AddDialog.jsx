import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddDialog({ type, handleAdd }) {
  const [open, setOpen] = useState(false);
  const [meal, setMeal] = useState('');
  const [price, setPrice] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {
      type,
      title: e.target.title.value,
      url: e.target.url.value,
    };

    if (type === 'Eat') {
      input.meal = meal;
      input.price = price;
    }

    handleAdd(input);
    handleClose();
  };

  const handleMealChange = (e) => {
    e.preventDefault();
    setMeal(e.target.value);
  };

  const handlePriceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Item</DialogTitle>
        <form id="modal-form" onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              required
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="url"
              label="Link"
              type="text"
              required
              fullWidth
              variant="standard"
            />
            {type === 'Eat'
              ? (
                <>
                  <Select
                    native
                    required
                    value={meal}
                    onChange={handleMealChange}
                    inputProps={{ name: 'meal', id: 'meal' }}
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </Select>
                  <Select
                    native
                    required
                    value={price}
                    onChange={handlePriceChange}
                    inputProps={{ name: 'price', id: 'price' }}
                  >
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                  </Select>
                </>
              )
              : null}
          </DialogContent>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="modal-form">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
