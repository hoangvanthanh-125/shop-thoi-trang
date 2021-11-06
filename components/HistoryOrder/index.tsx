import TabPanel from "./../../common/Tabpanel";
import { Grid, Tab, Tabs } from "@material-ui/core";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import style from "./../../styles/layout/HistoryOrder.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import OrderItem from "../OrderItem";
import { OrderProduct } from "../../types";
import { orderAction } from "../../redux/slice/orderSlice";
import { useRouter } from "next/router";
import { paymentAction } from "../../redux/slice/paymentSlice";
function HistoryOrder(props) {
  const [value, setValue] = React.useState(0);
  const { listOrder } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const listDelivering = listOrder.filter((item) => item.status === "delivering");

  const listReceived = listOrder.filter((item) => item.status === "received");
  const listCancelled = listOrder.filter((item) => item.status === "cancelled");

  const delivering = (
    <div className={style.headTab}>
      <LocalShippingIcon className={style.icon} />
      <span>Đang giao</span>
    </div>
  );
  const received = (
    <div className={style.headTab}>
      <BeenhereIcon className={style.icon} />
      <span>Đã nhận</span>
    </div>
  );
  const cancelled = (
    <div className={style.headTab}>
      <RestoreFromTrashIcon className={style.icon} />
      <span>Đã hủy</span>
    </div>
  );
  const handleActionAtReceived = (orderProduct: OrderProduct) => {
    const newOrderProduct = { ...orderProduct, status: "received" };
    dispatch(orderAction.updateListOrder(newOrderProduct));
  };
  const handleActionRepurchase = (orderItem: OrderProduct) => {
    dispatch(paymentAction.fetchListPayment([orderItem.productOrder]));
    router.push("/payment");
  };
  const handleUnCancelled = (orderItem: OrderProduct) => {
    const productOrder = { ...orderItem, status: "delivering" };
    dispatch(orderAction.updateListOrder(productOrder));
  };
  const handleCancelled = (orderItem: OrderProduct) => {
    const productOrder = { ...orderItem, status: "cancelled" };
    dispatch(orderAction.updateListOrder(productOrder));
  };
  const renderEmptyOrder = () => {
    return (
      <div className={style.noProduct}>
        <img src="/empty.png" style={{ width: 100, height: 100 }} />
        <h2 className={style.title}>Không có gì để hiển thị</h2>
        <button onClick={() => router.push("/products")} className={style.button}>
          Tiếp tục mua sắm
        </button>
      </div>
    );
  };
  const renderListDelivering = () => {
    let result = null;
    if (listDelivering.length > 0) {
      result = listDelivering.map((item) => {
        return (
          <OrderItem
            handleAction={handleActionAtReceived}
            orderProduct={item}
            labelButton="Đã nhận"
            status="delivering"
            item={item.productOrder}
            key={item.orderId}
            handleCancelled={handleCancelled}
          />
        );
      });
    }
    return result;
  };
  const renderListReceived = () => {
    let result = null;
    if (listReceived.length > 0) {
      result = listReceived.map((item) => {
        return (
          <OrderItem
            handleAction={handleActionRepurchase}
            orderProduct={item}
            labelButton="Mua tiếp"
            status="received"
            item={item.productOrder}
            key={item.orderId}
          />
        );
      });
    }
    return result;
  };
  const renderListCancelled = () => {
    let result = null;
    if (listCancelled.length > 0) {
      result = listCancelled.map((item) => {
        return (
          <OrderItem
            orderProduct={item}
            handleAction={handleUnCancelled}
            labelButton="Đặt lại"
            status="cancelled"
            item={item.productOrder}
            key={item.orderId}
          />
        );
      });
    }
    return result;
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.wrapHistory}>
      <h2 className={style.title}>Lịch sử mua hàng</h2>
      <Grid className={style.body} item xs={12} sm={12} md={12} lg={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={delivering} />
          <Tab label={received} />
          <Tab label={cancelled} />
        </Tabs>
      </Grid>

      <Grid item md={12} xs={12} sm={12}>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0}>
            {listDelivering.length > 0 ? renderListDelivering() : renderEmptyOrder()}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {listReceived.length > 0 ? renderListReceived() : renderEmptyOrder()}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {listCancelled.length > 0 ? renderListCancelled() : renderEmptyOrder()}
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </div>
  );
}

export default HistoryOrder;
