import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[18px] mt-0.5 w-[18px]"
          src="images/img_clock.svg"
          alt="clock"
        />
      ),
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: <Img className="h-5" src="images/img_offer.svg" alt="offer" />,
      label: "Transactions",
    },
    {
      icon: (
        <Img
          className="h-[18px] mt-0.5 w-[18px]"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Schedules",
    },
    {
      icon: (
        <Img
          className="h-[18px] mt-0.5 w-[18px]"
          src="images/img_share.svg"
          alt="share"
        />
      ),
      label: "Users",
    },
    {
      icon: (
        <Img
          className="h-[18px] w-[17px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Settings",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
   <div style={{ backgroundColor: 'black', padding: '10px' }}>
  <Text
    className="mb-[840px] ml-[50px] mr-[107px] mt-[59px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
    size="txtMontserratBold36WhiteA700"
  >
              Board.
            </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  "padding-bottom": "39px",
                  "padding-left": "39px",
                  gap: "20px",
                  color: "#ffffff",
                  "font-size": "18px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[508px] mt-[163px] md:pr-10 sm:pr-5 pr-[167px] w-[55%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
            {!collapsed && (
              <Text
                className="mb-[94px] ml-[50px] mr-[196px] mt-[831px] text-sm text-white-A700"
                size="txtMontserratRegular14"
              >
                Help
              </Text>
            )}
            <a
              href="javascript:"
              className="mb-[58px] ml-[50px] mr-[152px] mt-[867px] text-sm text-white-A700"
            >
              {!collapsed && (
                <Text size="txtMontserratRegular14">Contact Us</Text>
              )}
            </a>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[39px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtMontserratBold24"
              >
                Dashboard
              </Text>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col font-lato h-[30px] items-center justify-start md:ml-[0] ml-[575px] p-1.5 w-[18%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
                  <Text
                    className="text-gray-400 text-sm"
                    size="txtLatoRegular14"
                  >
                    Search...
                  </Text>
                  <Img
                    className="h-3 w-3"
                    src="images/img_search.svg"
                    alt="search_One"
                  />
                </div>
              </div>
              <Img
                className="h-5 md:ml-[0] ml-[30px]"
                src="images/img_notification.svg"
                alt="notification"
              />
              <div className="flex flex-col h-[30px] items-center justify-start md:ml-[0] ml-[29px] w-[30px]">
                <Img
                  className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[120px] justify-end p-[18px] w-[23%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_totalrevenues.svg')",
                }}
              >
                <Img
                  className="h-6 md:ml-[0] ml-[150px] mr-[7px]"
                  src="images/img_camera.svg"
                  alt="camera"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start ml-1.5 md:ml-[0] mr-[53px]">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtLatoRegular14Black900"
                  >
                    Total Revenues
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtOpenSansBold24"
                  >
                    $2,129,430
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[120px] justify-end p-[17px] w-[23%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_totaltransactions.svg')",
                }}
              >
                <Img
                  className="h-6 md:ml-[0] ml-[157px] mr-[7px] mt-0.5"
                  src="images/img_offer_black_900.svg"
                  alt="offer_One"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[7px] mr-[68px]">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtLatoRegular14Black900"
                  >
                    Total Transactions
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtOpenSansBold24"
                  >
                    1,520
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[120px] justify-end p-[17px] w-[23%] md:w-full"
                style={{ backgroundImage: "url('images/img_totallikes.svg')" }}
              >
                <Img
                  className="h-6 md:ml-[0] ml-[154px] mr-[7px] mt-0.5 w-[23px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[7px] mr-[113px]">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtLatoRegular14Black900"
                  >
                    Total Likes
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtOpenSansBold24"
                  >
                    9,721
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[120px] justify-end p-[19px] w-[23%] md:w-full"
                style={{ backgroundImage: "url('images/img_totalusers.svg')" }}
              >
                <Img
                  className="h-6 md:ml-[0] ml-[139px] mr-1.5"
                  src="images/img_user.svg"
                  alt="user"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start ml-1.5 md:ml-[0] mr-[108px]">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtLatoRegular14Black900"
                  >
                    Total Users
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtOpenSansBold24"
                  >
                    892
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-lato p-6 sm:px-5 relative w-full"
              style={{ backgroundImage: "url('images/img_googlesignin.svg')" }}
            >
              <div className="flex flex-col items-center justify-start m-auto w-[93%]">
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[98%] md:w-full">
                    <div className="flex flex-col font-montserrat gap-[7px] items-start justify-start w-[14%] md:w-full">
                      <Text
                        className="text-black-900 text-lg"
                        size="txtMontserratBold18Black900"
                      >
                        Activities
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtMontserratRegular14Gray600"
                        >
                          May - June 2021
                        </Text>
                        <Img
                          className="h-[5px]"
                          src="images/img_vector_gray_600.svg"
                          alt="vector_One"
                        />
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[644px] md:mt-0 mt-5 text-black-900 text-sm"
                      size="txtLatoRegular14Black900"
                    >
                      Guest
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[60px] md:mt-0 mt-5 text-black-900 text-sm"
                      size="txtLatoRegular14Black900"
                    >
                      User
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                      <Text
                        className="text-gray-600 text-sm"
                        size="txtLatoRegular14Gray600"
                      >
                        500
                      </Text>
                      <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                    </div>
                    <div className="h-[142px] md:h-[147px] sm:h-[235px] mt-[13px] relative w-full">
                      <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto w-full">
                        <div className="h-[102px] sm:h-[161px] md:h-[95px] relative w-full">
                          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  400
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  300
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  200
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[95px] right-[0] top-[0]"
                            src="images/img_linechart2.svg"
                            alt="linechartTwo"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                          <Text
                            className="text-gray-600 text-sm"
                            size="txtLatoRegular14Gray600"
                          >
                            100
                          </Text>
                          <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                        </div>
                      </div>
                      <Img
                        className="absolute h-[132px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_linechart1.svg"
                        alt="linechartOne"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between mt-[22px] w-[99%] md:w-full">
                      <Text
                        className="text-gray-600 text-sm"
                        size="txtLatoRegular14Gray600"
                      >
                        0
                      </Text>
                      <Line className="bg-gray-200 h-px mb-1.5 md:mt-0 mt-[9px] w-[98%]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[87px] items-center justify-center ml-auto mr-20 mt-[-NaNpx] w-[11%] z-[1]">
                <div className="bg-red-200 h-2.5 rounded-[50%] w-2.5"></div>
                <div className="bg-light_green-300 h-2.5 rounded-[50%] w-2.5"></div>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[-2.75px] mx-auto w-[65%] z-[1]">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtLatoRegular14Gray600"
                >
                  Week 1
                </Text>
                <Text
                  className="text-gray-600 text-sm"
                  size="txtOpenSansRegular14"
                >
                  Week 2
                </Text>
                <Text
                  className="text-gray-600 text-sm"
                  size="txtOpenSansRegular14"
                >
                  Week 3
                </Text>
                <Text
                  className="text-gray-600 text-sm"
                  size="txtOpenSansRegular14"
                >
                  Week 4
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-64 items-center justify-start p-[31px] sm:px-5 w-[48%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-col gap-[18px] items-center justify-start w-[95%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtMontserratBold18Black900"
                    >
                      Top products
                    </Text>
                    <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[162px]">
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtMontserratRegular12"
                      >
                        May - June 2021
                      </Text>
                    </div>
                    <Img
                      className="h-[5px] ml-2 sm:ml-[0] sm:mt-0 mt-[5px]"
                      src="images/img_vector_gray_600.svg"
                      alt="vector_Two"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                    <Img
                      className="h-[134px] w-[134px]"
                      src="images/img_piechart.svg"
                      alt="piechart"
                    />
                    <div className="flex flex-col gap-5 items-start justify-start">
                      <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                        <div className="flex flex-col justify-start w-full">
                          <div className="flex flex-row font-montserrat gap-2.5 items-center justify-start w-full">
                            <div className="bg-green-200 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtMontserratBold14"
                            >
                              Basic Tees
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[21px] mt-1 text-gray-600 text-xs"
                            size="txtLatoRegular12"
                          >
                            55%
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-5 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row font-montserrat gap-2.5 items-start justify-start w-full">
                              <div className="bg-amber-200_01 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                              <Text
                                className="text-black-900 text-sm"
                                size="txtMontserratBold14"
                              >
                                Custom Short Pants
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[21px] mt-1 text-gray-600 text-xs"
                              size="txtLatoRegular12"
                            >
                              31%
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[77%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row font-montserrat gap-2.5 items-start justify-start w-full">
                              <div className="bg-red-A100 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                              <Text
                                className="text-black-900 text-sm"
                                size="txtMontserratBold14"
                              >
                                Super Hoodies
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[21px] mt-[3px] text-gray-600 text-xs"
                              size="txtLatoRegular12"
                            >
                              14%
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-64 items-center justify-start p-[30px] sm:px-5 w-[48%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-col items-start justify-start mb-1 w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtMontserratBold18Black900"
                    >
                      Today’s schedule
                    </Text>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[196px] sm:mt-0 mt-[3px] text-gray-600 text-xs"
                    >
                      <Text size="txtMontserratRegular12">See All</Text>
                    </a>
                    <Img
                      className="h-2 sm:ml-[0] ml-[7px] sm:mt-0 mt-1.5"
                      src="images/img_vector_gray_600_8x5.svg"
                      alt="vector_Three"
                    />
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-[62%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <Line className="bg-light_green-300 h-[66px] w-[5px]" />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtLatoBold14"
                        >
                          Meeting with suppliers from Kuta Bali
                        </Text>
                        <Text
                          className="mt-[3px] text-gray-500 text-xs"
                          size="txtLatoRegular12Gray500"
                        >
                          14.00-15.00
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs"
                          size="txtLatoRegular12Gray500"
                        >
                          at Sunset Road, Kuta, Bali{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start mt-[13px] w-[56%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <Line className="bg-indigo-400 h-[66px] w-[5px]" />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtLatoBold14"
                        >
                          Check operation at Giga Factory 1
                        </Text>
                        <Text
                          className="mt-[3px] text-gray-500 text-xs"
                          size="txtLatoRegular12Gray500"
                        >
                          18.00-20.00
                        </Text>
                        <Text
                          className="mt-[3px] text-gray-500 text-xs"
                          size="txtLatoRegular12Gray500"
                        >
                          at Central Jakarta{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
