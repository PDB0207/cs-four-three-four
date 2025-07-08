import React from "react";
import './UserProfile.css';
import { useState } from 'react';
import avatar from '../assets/image/avatar.jpg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';

const UserProfile = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleShowInfo = () => setShowInfoModal(true);
  const handleCloseInfo = () => setShowInfoModal(false);

  const handleShowLogout = () => setShowLogoutModal(true);
  const handleCloseLogout = () => setShowLogoutModal(false);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src={avatar} alt="avatar"
              className="rounded-circle p-1 bg-primary"
              width="110"
              style={{ borderRadius: '50%' }}
            />
          </div>

          <hr className="my-4" />

          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">Thông tin</h6>
              <Button variant="white" onClick={handleShowInfo}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>

            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">Cài đặt</h6>
              <Button variant="white"><FontAwesomeIcon icon={faGear} /></Button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">Thông báo</h6>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  defaultChecked
                />
              </Form>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0">Đăng xuất</h6>
              <Button variant="white" onClick={handleShowLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#dc3545" }} />
              </Button>

            </li>
          </ul>
        </div>
      </div>

      {/* Thông tin cá nhân */}

      <Modal show={showInfoModal} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin cá nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src={avatar} alt="avatar"
              className="rounded-circle p-1 bg-primary"
              width="110"
              style={{ borderRadius: '50%' }}
            />
          </div>

          <hr className="my-4" />

          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Họ tên"
                  aria-label="Họ tên"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Số điện thoại"
                  aria-label="Số điện thoại"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Vị trí"
                  aria-label="Vị trí"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleCloseInfo}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Đăng xuất */}
      <Modal show={showLogoutModal} onHide={handleCloseLogout}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng xuất</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn đăng xuất?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogout}>
            Đóng
          </Button>
          <Button variant="danger" onClick={handleCloseLogout}>
            Đăng xuất
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;
