"use client";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { interceptor } from "@/axios.config";
import { useRouter } from "next/navigation";

interface QuoteHook {
  session: any;
  loading: boolean;
  status: any;
  error: string | null;
  handleQuote: (data: any) => Promise<void>;
  showModal: boolean;
  modalMessage: string;
  modalErrorType: "success" | "error" | "info";
  openModal: (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => void;
  closeModal: () => void;
}

const useQuote = (): QuoteHook => {
  const { data: session, status, update } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [modalErrorType, setModalErrorType] = useState<
    "success" | "error" | "info"
  >("success");
  const [showModal, setShowModal] = useState(false);

  const openModal = (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => {
    setModalMessage(errorMessage);
    setModalErrorType(errorType);
    setShowModal(true);

    console.log(showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const router = useRouter();

  const handleQuote = async (data: any): Promise<void> => {
    setLoading(true);

    try {
      // Perform signup logic using axios

      if (
        session?.user.phone &&
        session?.user.address &&
        session?.user.state &&
        session?.user.city
      ) {
        if (data.type === "moving") {
          await interceptor.post(`/quotes/moving`, { data });
          setLoading(false);
          setError(null);
          openModal("success", "Submitted successfully!!!");
        } else {
          await interceptor.post(`/quotes`, { data });
          setLoading(false);
          setError(null);
          openModal("success", "Submitted successfully!!!");
        }
      } else {
      
        openModal &&
          openModal(
            "info",
            "Please complete your profile."
          );
      }
    } catch (error: any) {
      // console.log(error.response.data);
      setLoading(false);
      setError(error.message);
      openModal("error", error.response.data);
    }
  };

  return {
    showModal,
    modalMessage,
    modalErrorType,
    openModal,
    closeModal,
    session,
    loading,
    status,
    error,
    handleQuote,
  };
};

export default useQuote;
