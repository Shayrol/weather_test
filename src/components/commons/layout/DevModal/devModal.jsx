// 이미지 아이콘 클릭 시 모달 창 생성 - 설명문

import styled from "@emotion/styled";
import React from "react";

const Modal = ({ onClose, title, description, color }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <H2 style={{ color: color }}>{title}</H2>
        <P>{description}</P>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  /* display: flex;
  flex-direction: column; */
  padding: 10px 20px 20px 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  /* border: 1px solid red; */
  background: none;
  position: absolute;
  border: none;
  margin: 5px;
  font-size: 1rem;
  cursor: pointer;
  right: 10px;
  top: 5px;
`;

const H2 = styled.p`
  border: 2px solid #dbdbdb;
  border-radius: 10px;
  display: inline-block;
  font-size: 1.2rem;
  padding: 0 5px;

  margin-bottom: 10px;
`;

const P = styled.p`
  color: #000;
  line-height: 20px;
`;
