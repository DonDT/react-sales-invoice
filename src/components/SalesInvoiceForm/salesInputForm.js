import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./SalesInvoiceForm.scss";

const SalesInputForm = ({
  name,
  amount,
  handleAmount,
  handleName,
  handleSubmit
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    handleSubmit();
    handleClose();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Sales Invoice
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
          <div className="sales_invoice_text">New Sales Invoice</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="enter_details_container">
            <span className="enter_details_text">Enter Details</span>
          </DialogContentText>
          <TextField
            id="standard-read-only-input"
            defaultValue="Invoice Id is Auto-Generated"
            InputProps={{
              readOnly: true
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            value={name}
            onChange={handleName}
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="amount"
            value={amount}
            onChange={handleAmount}
            label="Amount"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleCloseModal()} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SalesInputForm;
