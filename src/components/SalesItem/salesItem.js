import React from "react";
import { MdDelete } from "react-icons/md";
import "./SalesItem.scss";

const SalesItem = ({ invoice, handleDelete }) => {
  const { id, name, amount } = invoice;

  return (
    <div>
      <li className="item">
        <div className="info">
          <span className="invoice">{name}</span>
          <span className="amount">€ {amount}</span>
        </div>
        <div>
          <button
            className="clear-btn"
            aria-label="delete button"
            onClick={() => handleDelete(id)}
          >
            <MdDelete style={{ color: "7f00ff" }} />
          </button>
        </div>
      </li>
    </div>
  );
};

export default SalesItem;
