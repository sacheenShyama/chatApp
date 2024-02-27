import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";
import { response } from "express";

export const newMessage = async (request, response) => {
  try {
    const newMessage = new Message(request.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });

    return response.status(200).json("Message has sent");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getMessages = async (request, response) => {
  try {
    const message = await Message.find({
      conversationId: request.params.id,
    });

    return response.status(200).json(message);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
