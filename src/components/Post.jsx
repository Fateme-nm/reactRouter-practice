import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

const Post = () => {
  let params = useParams();
  const invoice = getInvoice(+params.post);

  return (
    <div className="page">
      {invoice === undefined ? (
        <p>Not found!</p>
      ) : (
        <>
          <h3>your invoice:</h3>
          <p>-name: {invoice.name}</p>
          <p>-number: {invoice.number}</p>
          <p>-amount: {invoice.amount}</p>
          <p>-due: {invoice.due}</p>
        </>
      )}
    </div>
  );
};

export default Post;
