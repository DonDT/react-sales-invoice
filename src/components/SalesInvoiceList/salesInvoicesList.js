import React from "react";
import Item from "../SalesItem/salesItem";
import { MdDelete } from "react-icons/md";
import "./SalesInvoiceList.scss";

const SalesInvoicesList = ({ invoices, handleDelete, clearItems }) => {
  return (
    <>
      <ul className="list">
        {invoices.length === 0 ? (
          <div className="no_Items">No Invoice Registered Yet</div>
        ) : (
          invoices.map(invoice => {
            return (
              <Item
                key={invoice.id}
                invoice={invoice}
                handleDelete={handleDelete}
              />
            );
          })
        )}
      </ul>
      {invoices.length > 0 && (
        <button className="btn" onClick={clearItems}>
          Clear Invoices <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default SalesInvoicesList;
