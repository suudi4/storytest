import React from "react";

import { Button, Img, List, Text } from "components";

const ChatGPTDesktopConversation = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.chatimage ? (
          <Img
            className="h-5 sm:h-auto object-cover w-full"
            alt="chat"
            src={props?.chatimage}
          />
        ) : null}
        <div className="flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Img
              className="h-[30px] md:h-auto object-cover rounded-sm w-[30px]"
              src="images/img_property1avatar.png"
              alt="icons_Four"
            />
            <Text
              className="flex-1 leading-[16.00px] max-w-[700px] md:max-w-full text-sm text-white-A700"
              size="txtInterLight14"
            >
              {props?.descriptiontext}
            </Text>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 rounded-bl-sm rounded-br-sm w-4"
                src="images/img_edit_gray_400.svg"
                alt="edit"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-800 border-blue_gray-900 border-solid border-t flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Button
              className="flex h-[30px] items-center justify-center w-[30px]"
              shape="round"
              color="gray_900"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_television.svg"
                alt="television"
              />
            </Button>
            <Text
              className="flex-1 leading-[16.00px] max-w-[740px] md:max-w-full text-sm text-white-A700"
              size="txtInterLight14"
            >
              {props?.descriptiononetext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            <Img
              className="h-[30px] md:h-auto object-cover rounded-sm w-[30px]"
              src="images/img_property1avatar.png"
              alt="icons_Five"
            />
            <Text
              className="flex-1 leading-[16.00px] max-w-[700px] md:max-w-full text-sm text-white-A700"
              size="txtInterLight14"
            >
              {props?.descriptiontwotext}
            </Text>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 rounded-bl-sm rounded-br-sm w-4"
                src="images/img_edit_gray_400.svg"
                alt="edit_One"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-800 border-blue_gray-900 border-solid border-t flex flex-col items-center justify-center py-[27px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-full">
            {!!props?.televisionOne ? (
              <Button
                className="flex h-[30px] items-center justify-center w-[30px]"
                shape="round"
                color="gray_900"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[22px]"
                  alt="television_One"
                  src={props?.televisionOne}
                />
              </Button>
            ) : null}
            <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
              <div className="bg-blue_gray-50 p-3 relative rounded-md w-[310px]">
                <div className="flex flex-row gap-3 items-center justify-between my-auto w-[84%]">
                  <div className="flex flex-col h-5 md:h-auto items-start justify-center w-full">
                    {!!props?.conversationSix ? (
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtInterMedium14Bluegray900"
                      >
                        {props?.conversationSix}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      {!!props?.verified ? (
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[84px] rounded-[3px]"
                          rightIcon={
                            <div className="h-4 ml-1 w-4 rounded-sm my-px">
                              <Img
                                className="h-4 rounded-sm"
                                src="defaultNoData.png"
                                alt="Icons"
                              />
                            </div>
                          }
                          shape="round"
                          color="teal_500_19"
                          size="xs"
                          variant="fill"
                        >
                          <div className="font-inter font-medium text-left text-sm">
                            {props?.verified}
                          </div>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto outline outline-[1px] outline-blue_gray-900_01 p-3 rounded-md w-full">
                  <div className="flex flex-col h-4 items-center justify-start my-1.5 w-4">
                    {!!props?.iconsSix ? (
                      <Img
                        className="h-4 rounded-bl-sm rounded-br-sm w-4"
                        alt="icons_Six"
                        src={props?.iconsSix}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-50 flex flex-col items-start justify-start p-3 rounded-md w-full">
                <div className="md:h-[162px] h-[185px] relative w-full">
                  <List
                    className="absolute bg-blue_gray-50 flex flex-1 flex-col gap-3 inset-[0] items-start m-auto rounded-md w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
                      <div className="flex flex-col h-4 items-center justify-start w-4">
                        {!!props?.user ? (
                          <Img
                            className="h-4 rounded-bl-sm rounded-br-sm w-4"
                            alt="user"
                            src={props?.user}
                          />
                        ) : null}
                      </div>
                      {!!props?.actiontheuser ? props?.actiontheuser : null}
                    </div>
                    <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
                      <div className="flex flex-col h-4 items-center justify-start w-4">
                        {!!props?.icons ? (
                          <Img
                            className="h-4 rounded-bl-sm rounded-br-sm w-4"
                            alt="icons"
                            src={props?.icons}
                          />
                        ) : null}
                      </div>
                      {!!props?.actionthenthey ? (
                        <Text
                          className="flex-1 text-blue_gray-800 text-sm w-auto"
                          size="txtInterMedium14Bluegray800"
                        >
                          {props?.actionthenthey}
                        </Text>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
                      <div className="flex flex-col h-4 items-center justify-start w-4">
                        {!!props?.edit ? (
                          <Img
                            className="h-4 rounded-bl-sm rounded-br-sm w-4"
                            alt="edit"
                            src={props?.edit}
                          />
                        ) : null}
                      </div>
                      {!!props?.hereisanother ? (
                        <Text
                          className="flex-1 text-blue_gray-800 text-sm w-auto"
                          size="txtInterMedium14Bluegray800"
                        >
                          {props?.hereisanother}
                        </Text>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
                      <div className="flex flex-col h-4 items-center justify-start w-4">
                        {!!props?.icons1 ? (
                          <Img
                            className="h-4 rounded-bl-sm rounded-br-sm w-4"
                            alt="icons"
                            src={props?.icons1}
                          />
                        ) : null}
                      </div>
                      {!!props?.actionthenthey1 ? (
                        <Text
                          className="flex-1 text-blue_gray-800 text-sm w-auto"
                          size="txtInterMedium14Bluegray800"
                        >
                          {props?.actionthenthey1}
                        </Text>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
                      <div className="flex flex-col h-4 items-center justify-start w-4">
                        {!!props?.edit1 ? (
                          <Img
                            className="h-4 rounded-bl-sm rounded-br-sm w-4"
                            alt="edit"
                            src={props?.edit1}
                          />
                        ) : null}
                      </div>
                      {!!props?.hereisanother1 ? (
                        <Text
                          className="flex-1 text-blue_gray-800 text-sm w-auto"
                          size="txtInterMedium14Bluegray800"
                        >
                          {props?.hereisanother1}
                        </Text>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
                      <div className="flex flex-col h-4 items-center justify-start w-4">
                        {!!props?.icons2 ? (
                          <Img
                            className="h-4 rounded-bl-sm rounded-br-sm w-4"
                            alt="icons"
                            src={props?.icons2}
                          />
                        ) : null}
                      </div>
                      {!!props?.actionthenthey2 ? (
                        <Text
                          className="flex-1 text-blue_gray-800 text-sm w-auto"
                          size="txtInterMedium14Bluegray800"
                        >
                          {props?.actionthenthey2}
                        </Text>
                      ) : null}
                    </div>
                  </List>
                  <div className="absolute bottom-[0] flex flex-1 flex-row gap-3 inset-x-[0] items-start justify-start mx-auto w-full">
                    <div className="flex flex-col h-4 items-center justify-start w-4">
                      {!!props?.editTwo ? (
                        <Img
                          className="h-4 rounded-bl-sm rounded-br-sm w-4"
                          alt="edit_Two"
                          src={props?.editTwo}
                        />
                      ) : null}
                    </div>
                    {!!props?.hereisanother2 ? (
                      <Text
                        className="flex-1 text-blue_gray-800 text-sm w-auto"
                        size="txtInterMedium14Bluegray800"
                      >
                        {props?.hereisanother2}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
              {!!props?.descriptionThree ? (
                <Text
                  className="leading-[16.00px] max-w-2xl md:max-w-full text-sm text-white-A700"
                  size="txtInterLight14"
                >
                  {props?.descriptionThree}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              {!!props?.offerimage ? (
                <Img
                  className="h-4 rounded-sm w-4"
                  alt="offer"
                  src={props?.offerimage}
                />
              ) : null}
              {!!props?.userfourimage ? (
                <Img
                  className="h-4 rounded-sm w-4"
                  alt="user_Four"
                  src={props?.userfourimage}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-start p-3 w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            {!!props?.regenrateresponsebutton ? (
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[187px] rounded-md"
                leftIcon={
                  <div className="h-4 mb-px mr-3 w-4 rounded-sm">
                    <Img
                      className="h-4 rounded-sm"
                      src="defaultNoData.png"
                      alt="qrcode"
                    />
                  </div>
                }
                color="gray_500"
                size="sm"
                variant="outline"
              >
                <div className="font-inter font-medium text-left text-sm">
                  {props?.regenrateresponsebutton}
                </div>
              </Button>
            ) : null}
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue_gray-800 flex md:flex-col flex-row gap-3 items-center justify-end p-3 rounded-md w-full">
              <div className="flex flex-1 flex-col items-start justify-center w-full">
                {!!props?.conversationseventext ? (
                  <Text
                    className="text-blue_gray-50 text-sm w-full"
                    size="txtInterMedium14"
                  >
                    {props?.conversationseventext}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-col h-4 items-center justify-start w-4">
                {!!props?.iconssevenimage ? (
                  <Img
                    className="h-4 rounded-bl-sm rounded-br-sm w-4"
                    alt="icons_Seven"
                    src={props?.iconssevenimage}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatGPTDesktopConversation.defaultProps = {
  descriptiontext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.",
  descriptiononetext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.",
  descriptiontwotext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.",
};

export default ChatGPTDesktopConversation;
