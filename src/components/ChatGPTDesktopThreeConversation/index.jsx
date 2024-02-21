import React from "react";

import { Img, List, Text } from "components";

const ChatGPTDesktopThreeConversation = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-50 text-center"
          size="txtInterMedium36"
        >
          {props?.chattext}
        </Text>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-blue_gray-900_01 h-12 w-full"></div>
          <List
            className="sm:flex-col flex-row gap-3 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[714px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-center p-3 rounded-md w-full">
                <Img
                  className="h-8 rounded-sm w-8"
                  src="images/img_property1large_32x32.svg"
                  alt="icons"
                />
                <Text
                  className="text-base text-blue_gray-50 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.exampletitle1}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.exampletext1}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.exampletext2}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.exampletext3}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-center p-3 rounded-md w-full">
                <Img
                  className="h-8 rounded-sm w-8"
                  src="images/img_save.svg"
                  alt="save"
                />
                <Text
                  className="text-base text-blue_gray-50 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.capabilitytitle1}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.capabilitytext1}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.capabilitytext2}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.capabilitytext3}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-center p-3 rounded-md w-full">
                <Img
                  className="h-8 rounded-sm w-8"
                  src="images/img_property1large_5.svg"
                  alt="icons"
                />
                <Text
                  className="text-base text-blue_gray-50 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.limitationtitle1}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.limitationtext1}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.limitationtext2}
                </Text>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-center justify-center p-3 rounded-md w-full">
                <Text
                  className="leading-[16.00px] max-w-[206px] md:max-w-full text-blue_gray-50 text-center text-sm"
                  size="txtInterMedium14"
                >
                  {props?.limitationtext3}
                </Text>
              </div>
            </div>
          </List>
          <div className="bg-blue_gray-900_01 h-[286px] w-full"></div>
          <div className="flex flex-col items-center justify-start p-3 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-800 flex md:flex-col flex-row gap-3 items-center justify-end p-3 rounded-md w-full">
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-blue_gray-50 text-sm w-full"
                    size="txtInterMedium14"
                  >
                    {props?.conversationSix}
                  </Text>
                </div>
                <div className="flex flex-col h-4 items-center justify-start w-4">
                  <Img
                    className="h-4 rounded-bl-sm rounded-br-sm w-4"
                    src="images/img_icons_blue_gray_800.svg"
                    alt="icons_Four"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatGPTDesktopThreeConversation.defaultProps = {
  chattext: "ChatGPT",
  exampletitle1: "Examples",
  exampletext1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  exampletext2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  exampletext3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  capabilitytitle1: "Capabilities",
  capabilitytext1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  capabilitytext2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  capabilitytext3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  limitationtitle1: "Limitations",
  limitationtext1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  limitationtext2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  limitationtext3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
  conversationSix: "|",
};

export default ChatGPTDesktopThreeConversation;
