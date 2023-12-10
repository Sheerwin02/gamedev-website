import { useRouter } from "next/router";
import BackgroundImage from "../public/testing3.jpg";
import ResetPasswordForm from "../components/forgotPassword/ResetPasswordForm";

const ResetPasswordPage = () => {
  const router = useRouter();
  const { token } = router.query;

  if (!token) {
    // Handle the case when there is no token
    // TODO: Enhance this to show a proper error pages
    return <p>Invalid reset link. Please request the link again.</p>;
  }

  return (
    // TODO: Add Hana Studio logo
    <div
      style={{
        backgroundImage: `url(${BackgroundImage.src})`, // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the container covers the full viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ResetPasswordForm token={token as string} />
    </div>
  );
};

export default ResetPasswordPage;
