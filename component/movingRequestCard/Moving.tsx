"use client";

import useForm from "@/hooks/useForm";
import useQuote from "@/hooks/useQuote";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../ui/button/Button";
import NotificationModal from "../NotificationModal";

// Define the Properties interface
interface Properties {
  id: number;
  name: string;
  amount: number;
}

const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  height: auto;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    font-size: 22px;
  }

  p {
    color: var(--content);
    margin-bottom: 30px;
  }
`;
const MultiSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 8px;
  width: 100%;
  /* height: 100%; */
`;

const MultiSelectDropdown = styled.div`
  position: absolute;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1;
  font-size: 18px;
  width: 100%;
  border-radius: 12px;
  top: 105%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(
      --primary-20
    ); /* Track color (the background behind the scrollbar) */
  }

  &::-webkit-scrollbar-thumb {
    background: var(
      --primary-20
    ); /* Thumb color (the draggable part of the scrollbar) */
    border-radius: 20px; /* Rounded corners on the thumb */
  }
`;

const MultiSelectOption = styled.div`
  padding: 7px 20px;
  font-size: 14px;
  background-color: var(--primary-20);
`;

const SelectedOptions = styled.div`
  display: grid;
  gap: 10px;
  margin: 10px;
  max-height: 150px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(
      --primary-20
    ); /* Track color (the background behind the scrollbar) */
  }

  &::-webkit-scrollbar-thumb {
    background: var(
      --primary-20
    ); /* Thumb color (the draggable part of the scrollbar) */
    border-radius: 20px; /* Rounded corners on the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Thumb color on hover */
  }
`;

const MultiSelectButton = styled.button`
  display: block;
  padding: 10px 20px;
  font-size: 15px;
  background-color: var(--primary-20);
  width: 100%;
  color: #000000;
  border: none;
  cursor: pointer;
  text-align: left;
  border-radius: 8px;
  transition: all 0.5s ease;
  &:hover {
    background-color: var(--primary);
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 8px;
`;

const CounterButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 14px;
  background-color: var(--primary-20);
`;

const ItemName = styled.span`
  flex-grow: 1;
  padding: 0 8px;
`;

const Notification = styled.div`
  color: #ff0000;
  margin-top: 10px;
`;

export const LocationInput = styled.input`
  padding: 10px 15px;
  background: var(--primary-20);
  outline: none;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const QuoteButton = styled.div`
  background: var(--primary);
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
  margin-top: auto;
  margin-left: auto;
`;

const Moving: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<Properties[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { handleQuote, showModal, modalErrorType, modalMessage, closeModal } =
    useQuote();

  const Props: Properties[] = [
    { id: 1, name: "T-Shirt", amount: 0 },
    { id: 2, name: "Jeans", amount: 0 },
    { id: 3, name: "duve", amount: 0 },
    { id: 4, name: "curtains", amount: 0 },
    { id: 5, name: "others", amount: 0 },
    // Add more laundry items as needed
  ];

  const handleItemClick = (item: Properties) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      // If the item is already in the selectedItems array, update its amount
      const updatedItems = selectedItems.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount + 1 } : i
      );
      setSelectedItems(updatedItems);
    } else {
      // If the item is not in the selectedItems array, add it with amount 1
      setSelectedItems([...selectedItems, { ...item, amount: 1 }]);
    }
  };

  const handleDecrease = (item: Properties) => {
    const updatedItems = selectedItems.map((i) => {
      if (i.id === item.id && i.amount > 0) {
        return { ...i, amount: i.amount - 1 };
      }
      return i;
    });
    setSelectedItems(updatedItems);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGetQuote = async () => {
    if (selectedItems.some((item) => item.amount <= 0)) {
      setNotification("Please add item amounts before getting a quote.");
    } else {
      const quoteText = selectedItems
        .filter((item) => item.amount > 0)
        .map((item) => `${item.name} -- ${item.amount}`)
        .join(", ");
      console.log(selectedItems);

      setQuote(`Quote: ${quoteText}`);
      setNotification(null);
      try {
        const data = {
          type: "cleaning",
          quote: selectedItems,
        };
        handleQuote(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const { formData, handleChange, resetForm, errors } = useForm(
    {
      from: "",
      to: "",
      date: "",
    },
    () => {}
  );

  const onSubmit = (type: any) => {
    const data = {
      properties: selectedItems,
      type,
      address:  formData,
      
    };

    console.log(data);
    handleQuote(data);
    
  };

  return (
    <Container>
      <h3 className="title">Simplifying Your Move from Start to Finish</h3>

      <p>Contact us today to make it the easiest move of your life.</p>

      <MultiSelectWrapper ref={dropdownRef}>
        <MultiSelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
          Select properties to be moved...
        </MultiSelectButton>
        {isDropdownOpen && (
          <MultiSelectDropdown>
            {Props.map((item) => (
              <MultiSelectOption
                key={item.id}
                onClick={() => {
                  handleItemClick(item);
                  setDropdownOpen(!isDropdownOpen);
                }}
              >
                {item.name}
              </MultiSelectOption>
            ))}
          </MultiSelectDropdown>
        )}
      </MultiSelectWrapper>

      <SelectedOptions>
        {selectedItems.map((item) => (
          <ItemInfo key={item.id}>
            <ItemName>{item.name}</ItemName>
            <Counter>
              <CounterButton onClick={() => handleDecrease(item)}>
                -
              </CounterButton>
              <span>{item.amount}</span>
              <CounterButton onClick={() => handleItemClick(item)}>
                +
              </CounterButton>
            </Counter>
          </ItemInfo>
        ))}
      </SelectedOptions>
      {notification && <Notification>{notification}</Notification>}
      <LocationInput
        type="text"
        name="from"
        placeholder="from"
        value={formData.from}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
      <LocationInput
        type="text"
        name="to"
        placeholder="to"
        value={formData.to}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />

      <LocationInput
        type="date"
        name="date"
        // placeholder="to"
        value={formData.date}
        onChange={(e: any) => handleChange(e, e.target.name)}
      />
     

      <Button
        size="medium"
        color="primary"
        onClick={() => {
          if (session) {
            onSubmit("moving");
          } else {
            router.push("signin");
            toast("please sign in to add item to cart");
          }
        }}
        disabled={!session}
      >
        Contact Us
      </Button>
      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default Moving;
