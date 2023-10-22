import React, { FC, ReactElement } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "@/public/Images/logo/Logo.webp"
export const Footer: FC = (): ReactElement => {
  return (
    <div className="w-full  px-[1.5rem]">
      <div className="border-r-0 border-l-0 border-b-2 border-t-2 border-solid border-[#558B2F] w-full mt-10 grid grid-cols-1 sm:grid-cols-4 py-6">
        <div className="m-0">
          <Image
            src={Logo}
            width={150}
            height={50}
            alt="logo"
            title="logo"
            className="block"
          />
          <h2 className="text-black font-serif italic font-normal text-lg tracking-wide mt-7">
          Siège social
          </h2>
          <p className="text-black font-poppins text-[14px] font-normal tracking-wider">
          Ben Amar Menuiserie Aluminium
          </p>
          <div className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Address: 104-3300 Hwy 7, <br />
            Suit#348 <br />
            Concord ON. L4K 0G2
          </div>
        </div>
        <div className="m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Company
          </h2>
          {["About Us", "Services", "Projects"].map((v, i) => {
            return (
              <p
                key={i}
                className="text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
              >
                {v}
              </p>
            );
          })}
        </div>
        <div className="m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide">
            Support
          </h2>
          {["Contact Us", "Privacy Policy"].map((v, i) => {
            return (
              <p
                key={i}
                className="text-black font-poppins text-[14px] font-normal tracking-wider mt-3 hover:underline cursor-pointer"
              >
                {v}
              </p>
            );
          })}
        </div>
        <div className="m-0">
          <h2 className="text-black font-poppins text-lg font-semibold tracking-wide mt-2">
            Follow us
          </h2>
          <div className="flex flex-row">
            {[
              {
                icon: (
                  <FacebookSharpIcon
                    sx={{ color: "#4267B2", fontSize: "35px" }}
                  />
                ),
              },
              {
                icon: (
                  <YouTubeIcon sx={{ color: "#CD201F", fontSize: "35px" }} />
                ),
              },
              
            ].map((v, i) => {
              return (
                <p
                  key={i}
                  className="text-black font-poppins text-[14px] font-normal tracking-wider hover:underline cursor-pointer mr-3 mt-0"
                >
                  {v.icon}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-2 pb-2">
        <p className="text-black font-poppins text-[14px] font-normal tracking-wider">
          © {new Date().getFullYear()} Ben Amar Menuiserie Aluminium  All rights reserved.
        </p>
        <p>
          <span className="text-black font-poppins text-[14px] font-normal tracking-wider">
            Developed by
          </span>
          <span className="text-black font-poppins text-[14px] font-normal tracking-wider">
            {" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GIT
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
