import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) => {
    try{
        const {message} = req.body;
        console.log(message)
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
        });
        console.log(conversation)

        if (!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        }
        )

        if (newMessage){
            conversation.messages.push(newMessage._id);

        }

     conversation.save()
     newMessage.save();

        // res.status(201).json(newMessage);


        res.status(201).json(newMessage);


    } catch(error){
        console.log("Error in sendMessage  controller: ", error.message);
        res.status(500).json({error:"Internal server error"});

    }
    //console.log("message sent",req.params.id);
};
export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        // Find conversation and populate messages
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        // Log the conversation object to see its structure
        console.log("Conversation Object:", conversation);

        // Check if conversation exists
        if (!conversation) {
            console.log("No conversation found.");
            return res.status(200).json([]); // Ensure we exit the function
        }

        // Ensure conversation.messages is not null or undefined
        if (!conversation.messages) {
            console.log("Conversation found but no messages.");
            return res.status(200).json([]); // Return an empty array if no messages
        }

        // Respond with the messages if conversation is found
        return res.status(200).json(conversation.messages);

    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        return res.status(500).json({ error: "Internal server error" }); // Ensure we exit the function
    }
};












