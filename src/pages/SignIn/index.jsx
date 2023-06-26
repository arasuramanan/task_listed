import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Img, Input, Text } from "components";

const SignInPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start p-[171px] md:px-5">
          <Text
            className="mb-[301px] mt-[292px] md:text-5xl text-7xl text-white-A700"
            size="txtMontserratBold72"
          >
            Board.
          </Text>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-end p-[223px] md:px-5 w-3/5 md:w-full">
          <div className="flex flex-col items-start justify-start mb-[33px] mt-[39px] w-[95%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtMontserratBold36"
            >
              Sign In
            </Text>
            <Text
              className="mt-1 text-base text-black-900"
              size="txtLatoRegular16"
            >
              Sign in to your account
            </Text>
            <div className="flex flex-row font-montserrat gap-[25px] items-center justify-between mt-[23px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-end p-[5px] w-[47%]"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div
                  className="common-pointer flex flex-row gap-2.5 items-start justify-start mt-0.5 w-[84%] md:w-full"
                  onClick={() => googleSignIn()}
                >
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_googleicon1.svg"
                    alt="googleiconOne"
                  />
                  <Text
                    className="text-center text-gray-600 text-xs"
                    size="txtMontserratRegular12"
                  >
                    Sign in with Google
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-end p-[5px] w-[47%]"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-row gap-[11px] items-start justify-center w-[78%] md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="mt-0.5 text-center text-gray-600 text-xs"
                    size="txtMontserratRegular12"
                  >
                    Sign in with Apple
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-lato gap-[21px] items-center justify-start mt-[25px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[317px] items-center justify-end p-[30px] sm:px-5 w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtLatoRegular16"
                  >
                    Email address
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-end mt-2 p-2 w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Text
                      className="ml-1.5 md:ml-[0] mt-[3px] text-base text-black-900"
                      size="txtLatoRegular16"
                    >
                      johndoe@gmail.com
                    </Text>
                  </div>
                  <Text
                    className="mt-5 text-base text-black-900"
                    size="txtLatoRegular16"
                  >
                    Password
                  </Text>
                  <Input
                    name="groupThree"
                    placeholder="••••••••"
                    className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-base text-black-900 text-left w-full"
                    wrapClassName="bg-gray-200 mt-2 pb-2 pl-[15px] pr-[35px] pt-[11px] rounded-[10px] w-full"
                  ></Input>
                  <a
                    href="javascript:"
                    className="mt-[21px] text-base text-blue-700"
                  >
                    <Text size="txtLatoRegular16Blue700">Forgot password?</Text>
                  </a>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-montserrat h-10 items-center justify-end mt-[17px] p-[9px] w-full"
                    style={{
                      backgroundImage: "url('images/img_buttonsignin.svg')",
                    }}
                  >
                    <a
                      href="javascript:"
                      className="text-base text-center text-white-A700"
                    >
                      <Text size="txtMontserratBold16">Sign In</Text>
                    </a>
                  </div>
                </div>
              </div>
              <Text
                className="text-base text-center text-gray-600"
                size="txtLatoRegular16Gray600"
              >
                <span className="text-gray-600 font-lato font-normal">
                  Don’t have an account?{" "}
                </span>
                <span className="text-blue-700 font-lato font-normal">
                  Register here
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
