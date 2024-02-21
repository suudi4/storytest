import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
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
      <Sidebar className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-start mt-3 mx-auto outline outline-[1px] outline-blue_gray-900_01 p-3 rounded-md w-56">
          <div className="flex flex-col h-4 items-center justify-start w-4">
            <Img
              className="h-4 rounded-bl-sm rounded-br-sm w-4"
              src="images/img_icons_gray_400.svg"
              alt="icons"
            />
          </div>
          <div className="flex flex-col h-5 md:h-auto items-start justify-center w-full">
            <Text
              className="text-blue_gray-50 text-sm w-auto"
              size="txtInterMedium14"
            >
              New chat
            </Text>
          </div>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "13px 13px 13px 21px",
              gap: "10px",
              color: "#ececf1",
              fontWeight: 500,
              fontSize: "14px",
              fontFamily: "Inter",
              borderRadius: "6px",
            },
          }}
          className="flex flex-col items-center justify-start mb-3 mt-[25px] w-full"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start pb-[27px] w-full">
              <Text
                className="text-blue_gray-50 text-sm w-auto"
                size="txtInterMedium14"
              >
                New Chat
              </Text>
            </div>
            <div className="flex flex-col gap-3 items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start mt-[418px] w-full">
            {sideBarMenu1?.map((menu, i) => (
              <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
            <SubMenu
              icon={
                <Img
                  className="h-4 rounded-sm w-4"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft"
                />
              }
              label={<Text className="flex-1 mt-0.5 w-auto">Log out</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
