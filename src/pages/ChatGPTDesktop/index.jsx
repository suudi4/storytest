import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import ChatGPTDesktopConversation from "components/ChatGPTDesktopConversation";
import Sidebar1 from "components/Sidebar1";

const ChatGPTDesktopPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_user_white_a700.svg"
          alt="user"
        />
      ),
      label: "Conversation",
    },
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_user_white_a700.svg"
          alt="user_One"
        />
      ),
      label: "Conversation",
    },
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_user_white_a700.svg"
          alt="user_Two"
        />
      ),
      label: "Conversation",
    },
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_user_white_a700.svg"
          alt="user_Three"
        />
      ),
      label: "Conversation",
    },
  ];
  const sideBarMenu1 = [
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_icons_gray_400_16x16.svg"
          alt="icons_One"
        />
      ),
      label: "Clear conversations",
    },
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_icons_white_a700.svg"
          alt="icons_Two"
        />
      ),
      label: "Lite mode",
    },
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_icons_white_a700_16x16.svg"
          alt="icons_Three"
        />
      ),
      label: "My account",
    },
    {
      icon: (
        <Img
          className="h-4 rounded-sm w-4"
          src="images/img_link_white_a700_16x16.svg"
          alt="link"
        />
      ),
      label: "Updates & FAQ",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-900_01 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[248px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <ChatGPTDesktopConversation
          className="bg-blue_gray-900_01 flex flex-1 flex-col h-[1024px] md:h-auto items-center justify-end max-w-[1194px] md:px-5 w-full"
          televisionOne="images/img_television.svg"
          offerimage="images/img_offer_gray_400.svg"
          userfourimage="images/img_user_gray_400.svg"
        />
      </div>
    </>
  );
};

export default ChatGPTDesktopPage;
