"use client";

import styled from "styled-components";

export const Container = styled.div``;

export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0;
`;
export const HeroListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  .dot {
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const HeroImageContainer = styled.div`
  flex: 1;
`;
export const HeroImage = styled.div`
  flex: 1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 75%;
    height: 75%;

    margin: auto;
    /* object-fit: contain; */
  }
`;

export const WYGSection = styled.div`
  padding:  8%;
  display: flex;
  gap: 30px;

  .text_container {
    flex: 1;
  }

  .heading {
    .title {
      font-size: 38px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 768px) {

      
        .title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    }
  
  }

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    
  }
`;
export const BenefitList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SubscriptionSection = styled.div`
  padding: 5% 8%;
  display: flex;
  gap: 30px;
  background: var(--primary-20);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SubscriptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SubscriptionCard = styled.div`
  border-radius: 15px;
  padding: 20px;
  background: #fff;
  min-height: 30vh;
  display: flex;
  flex-direction: column;

  
  .image {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    padding: 10px;
    background: var(--primary-20);
    margin-bottom: 20px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin: 10px 0 20px;
    color: var(--content);
  }

  .features {
    list-style: none;
    display: grid;
    grid-gap: 10px;
    margin: 20px 0;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--content);
      
      .dot {
      width: 10px;
      height: 10px;
      background: var(--primary);
      border-radius: 50%;
    }
    }
   
  }

  .cta {
    display: flex;
    color: var(--primary);
    text-decoration: none;
    align-items: center;
    gap: 10px;

    .icon {
      display: none;
    }

    &:hover {
      .icon {
        display: block;
      }
    }
  }

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
