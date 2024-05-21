import { Button } from "@/components/ui/button";
import { acceptInvitation } from "@/redux/Project/Project.Action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AcceptInvitation = () => {
  const dipatch = useDispatch();
  const location = useLocation();
  const navigate=useNavigate();

  const handleAcceptInvitation = () => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");
    console.log("token ", token);
    dipatch(acceptInvitation({invitationToken:token,navigate}));
  };
  return <div className="h-[105vh] flex flex-col justify-center items-center"
              style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/72/54/68/360_F_472546867_4MBw9cVFYE7AwnrIIbmZ8xXS0V3mrIzr.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="flex flex-col bg-black bg-opacity-70 items-center justify-center w-96 h-40 p-10">
      <h1 className="py-5 font-semibold text-xl font-bold text-pink-500">you are invited to join the project</h1>
      <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>
    </div>


  </div>;
};

export default AcceptInvitation;
