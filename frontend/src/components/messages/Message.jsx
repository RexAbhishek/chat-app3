import React from 'react'
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

function Message({message}) {

  const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const host = message.senderId === authUser._id;
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();
  // console.log(message.createdAt)
	const formattedTime = message.createdA ? extractTime(message.createdAt) : extractTime(isoDate) ;
	const chatClassName = host ? "chat-end" : "chat-start";
	const profilePic = host ? authUser.profilepic : selectedConversation?.profilepic;
	const bubbleBgColor = host ? "bg-blue-800" : "";
  
  // console.log(formattedTime)
    return (
        <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
      )
}

export default Message