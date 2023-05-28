import { click } from "@testing-library/user-event/dist/click";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import React, { useState } from "react";
import "./cartPage.scss";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import { colors } from "@mui/joy";

export default function CartPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tableData = [
    {
      name: "Tên 1",
      SoLuong: "10",
      GiaTien: "100.000",
    },
    {
      name: "Tên 1",
      SoLuong: "10",
      GiaTien: "100.000",
    },
  ];
  const tangSL = () => {};
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <h1>Giỏ hàng của bạn</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.name}>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>{item.name}</td>

              <td>{item.GiaTien}</td>
              <td>
                <button onClick={() => tangSL()}>
                  <AiOutlineMinus></AiOutlineMinus>
                </button>
                <input style={{ width: "40px" }}></input>
                <button>
                  <AiOutlinePlus></AiOutlinePlus>
                </button>
              </td>
              <td>
                <MdDeleteForever style={{ color: "red" }}></MdDeleteForever>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ position: "fixed" }}>
        <label>Tổng số lượng: </label>
        <button onClick={() => setShow(true)} className="btn-modal">
          Thanh toán
        </button>
      </div>
      {show && (
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Thông tin giao hàng
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập họ và tên"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control placeholder="Nhập số điện thoại" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Địa chỉ nhận hàng</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập địa chỉ"
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phương thức thanh toán</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Thanh toán khi nhận hàng</option>
                  <option value="1">Thanh toán online</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Huỷ
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Xác nhận thông tin
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
