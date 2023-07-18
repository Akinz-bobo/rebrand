"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Counter from "../counter/Counter";
import Image from "next/image";
import { TrashIcon } from "@radix-ui/react-icons";

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background: var(--primary-20);
  border-radius: 12px;
  border: 1px solid var(--primary);
  padding: 12px;
  position: relative;
  max-width: 100%;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .image {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background: var(--primary-20);
  }

  .text {
    display: grid;
  }
`;

const ItemName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ItemPrice = styled.span`
  font-size: 0.8em;
  margin-top: 5px;
`;

const TotalPrice = styled.span`
  font-weight: bold;
  margin-left: auto;
`;
const DelButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  outline: none;
  border: none;
  width: 25px;
  height: 25px;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: rgba(255, 0, 0, 0.437);
  color: #fff;
  opacity: 0.3;
  transition: all 0.5s ease;

  &:hover {
    background: rgb(255, 94, 94);
    opacity: 1;
  }
`;

type Item = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  category: string;
  quantity: number;
  total: number;
};

type CartItemProps = {
  item: Item;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { title, price, quantity, total, imgUrl } = item;
  const handleQuantityChange = (value: number) => {};

  const totalPrice = price * quantity;

  return (
    <CartItemContainer>
      <ItemInfo>
        <div className="image">
          {/* <Image src={imgUrl} width={100} height={70} alt="..." /> */}
        </div>
        <div className="text">
          <ItemName>{title}</ItemName>
          <ItemPrice> ${price}</ItemPrice>
        </div>
      </ItemInfo>
      <Counter id="h" value={6} />
      <TotalPrice>Total: ${totalPrice}</TotalPrice>
      <DelButton>
        <TrashIcon />
      </DelButton>
    </CartItemContainer>
  );
};

export default CartItem;
