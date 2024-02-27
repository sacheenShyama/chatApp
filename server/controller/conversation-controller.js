import { response } from "express";
import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const recevierId = request.body.recevierId;

    const exist = await Conversation.findOne({
      members: { $all: [recevierId, senderId] },
    });

    if (exist) {
      return response.status(200).json("conversation already exists");
    }

    const newConversation = new Conversation({
      members: [senderId, recevierId],
    });

    await newConversation.save();
    return response.status(200).json("conversation saved successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const recevierId = request.body.receiverId;
    let conversation = await Conversation.findOne({
      members: { $all: [recevierId, senderId] },
    });
    return response.status(200).json(conversation);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
