import { useState, useEffect } from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "../../utils/auth";
import { selectToken } from "../../redux/authSlice";
import { useSelector } from "react-redux";

interface User {
  id: number;
}

interface Props {
  User: User | null;
  onClose: () => void;
}

const EmailSubscription: React.FC<Props> = ({ User, onClose }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const authToken = useSelector(selectToken);
  const [userMessage, setUserMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // "const handleEmailSubmit = async () => {
  //   try {
  //     setIsSubmitting(true);

  //     if (!authToken) {
  //       console.error("Authentication token not available");
  //       alert("Please login to apply for this position.");
  //       return;
  //     }

  //     const requestBody = {
  //       UserId: User?.id || null,
  //       message: userMessage,
  //     };

  //     const response = await fetch("/api/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //       body: JSON.stringify(requestBody),
  //     });

  //     if (response.ok) {
  //       setShowSuccessPopup(true);
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Error: ${errorData.error}`);
  //     }
  //   } catch (error) {
  //     console.error("Error submitting application:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };"

  useEffect(() => {
    const fetchData = async (req: NextApiRequest, res: NextApiResponse) => {
      if (user) {
        const { userId } = await verifyToken(req, res);
        if (typeof window !== "undefined") {
          fetch(`/api/user/${userId}/enable`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error("Error fetching data", error));
        }
      }
      fetchData(req, res);
    };
  }, [user, onClose]);

  return <div></div>;
};

export default EmailSubscription;
