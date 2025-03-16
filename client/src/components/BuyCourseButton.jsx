import { useCreateCheckoutSessionMutation } from "@/features/api/purchaseApi";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import PropTypes from "prop-types";  /// this line use chatgpt 
import { useEffect } from "react";
import { toast } from "sonner";

const BuyCourseButton = ({ courseId }) => {
  const [createCheckoutSession, {data,isError,isSuccess,error, isLoading }] =
    useCreateCheckoutSessionMutation();

  const purchaseCourseHandler = async () => {
    await createCheckoutSession(courseId);
  };

  useEffect(()=> {
   if(isSuccess){
    if(data?.url){
      window.location.href = data.url; // Redirect to stripe checkout url
    }else{
      toast.error("Invalid response from server")
    }
   }
   if(isError){
    toast.error(error?.data?.message || "Failed to create checkout session")
   }
  },[data, isSuccess, isError, error])

  return (
    <Button
      disabled={isLoading}
      onClick={purchaseCourseHandler}
      clasName="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 clasName="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        "Purchase Course"
      )}
    </Button>
  );
};
// ✅ Define prop types // this line use chatgpt 31 to 34 chtgpt
BuyCourseButton.propTypes = {
  courseId: PropTypes.string.isRequired, // Assuming courseId is a string
};


export default BuyCourseButton;
