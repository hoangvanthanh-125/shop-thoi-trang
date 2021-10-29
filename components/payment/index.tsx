import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import style from './../../styles/layout/paymentComponent/payment.module.scss'

Payment.propTypes = {};

function Payment(props) {
  return (
    <div className={style.wrapPayment}>
      <Grid container>
        <Grid item sm={6} xs={12} md={6}>
          <PaymentForm />
        </Grid>
        <Grid item sm={6} xs={12} md={6}>
          <PaymentList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Payment;
