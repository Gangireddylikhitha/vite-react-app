import {  toast } from 'react-toastify';
   
   
   export const SucessToasts=()=>{
    toast.success("Success Notification !", {
        position: "top-center"
      });
}

export const ErrorToasts=()=>{
    toast.error("Error Notification !", {
        position: "top-left"
      });

}

export const WarnToasts=()=>{
    toast.warn("Warning Notification !", {
              position: "bottom-left"
            });
}

export const InfoToasts=()=>{
    toast.info("Info Notification !", {
              position: "bottom-center"
            });
}

