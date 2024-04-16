"use client";

import styled from "styled-components";



export const SubStyle = styled.span`
  font-size: 20px;
  font-weight: 100;
  padding-left: 10px;
`;




export const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  background: #0f52ba;
  color: #fff;
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-transform: uppercase;
  gap: 7px;
  cursor: pointer;
`;

export const CardDescription = styled.div`
  
`;

export const NameProduct = styled.span`
  width: auto;
  font-size: 16px;
`;

export const Price = styled.button`
  border: none;
  color: #fff;
  background: #373737;
  border-radius: 5px;
  width: 100%;
  height: 26px;
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.span`
  display: flex;
  font-size: 10px;
`;

export const ErrorText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: red;
  width: 100%;
  height: 400px;
`;
