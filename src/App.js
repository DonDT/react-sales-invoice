import React, { useState, useEffect } from "react";
import "./App.scss";
import SalesInputForm from "./components/SalesInvoiceForm/salesInputForm";
import SalesInvoicesList from "./components/SalesInvoiceList/salesInvoicesList";
import Alert from "./components/AlertAction/Alert";
import uuid from "uuid/v4";

const initialInvoices = localStorage.getItem("invoices")
  ? JSON.parse(localStorage.getItem("invoices"))
  : [];

const App = () => {
  const [invoices, setInvoices] = useState(initialInvoices);

  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");

  const [alert, setAlert] = useState({ show: false });

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleName = e => {
    setName(e.target.value);
  };
  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    if (name !== "" && amount > 0) {
      const singleInvoices = { id: uuid(), name, amount };
      setInvoices([...invoices, singleInvoices]);
      handleAlert({ type: "success", text: "Invoice Added" });

      setName("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `Name can't be empty, and amount value has to be Greater than zero`
      });
    }
  };

  const clearItems = () => {
    if (window.confirm("You Are About To Delete EVERY item, Please Confirm")) {
      setInvoices([]);
      handleAlert({ type: "danger", text: "All Invoices deleted" });
    }
  };
  const handleDelete = id => {
    if (window.confirm("You Are About To Delete This Item, Please Confirm")) {
      let tempInvoices = invoices.filter(item => item.id !== id);
      setInvoices(tempInvoices);
      handleAlert({ type: "danger", text: "Invoice deleted" });
    }
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  return (
    <div className="App">
      <div>{alert.show && <Alert type={alert.type} text={alert.text} />}</div>
      <h1>Track Sales Invoice</h1>
      <main className="App">
        <SalesInputForm
          amount={amount}
          name={name}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <SalesInvoicesList
          invoices={invoices}
          handleDelete={handleDelete}
          clearItems={clearItems}
        />
      </main>
      <h1>
        {" "}
        {invoices.length > 0 && (
          <span className="total_invoice">total invoice :</span>
        )}
        <span className="total">
          {invoices.length > 0 ? "€" : null}
          {invoices.length === 0
            ? null
            : invoices.reduce((acc, curr) => {
                return (acc += parseInt(curr.amount));
              }, 0)}
        </span>
      </h1>
    </div>
  );
};

export default App;
