"use client";
import React, { ChangeEvent, useState } from "react";
import { stylesContent, stylesForm, style } from "../../../../styles/settings";
import Image from "next/image";

export default function Verification() {
  const [activeButton, setActiveButton] = useState("Passport");
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Process the uploaded image as needed.
      // You can use libraries like FileReader to read the image data.
    }
  };

  return (
    <div>
      <div className={stylesContent.block}>
        <div className={stylesContent.header}>
          <div className={stylesContent.title}>Verification</div>
        </div>
        <div className={`${stylesContent.content} ${stylesContent.divider}`}>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="username">Name</label>
            <div className="relative">
              <input id="username" type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="surname">Surname</label>
            <div className="relative">
              <input
                id="surname"
                type="text"
                placeholder="Enter your surname"
              />
            </div>
          </div>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="country">Country of residence</label>
            <div className="relative">
              <input
                id="country"
                type="text"
                placeholder="Enter your country"
              />
            </div>
          </div>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="phone">Phone number</label>
            <div className="relative">
              <input
                id="phone"
                type="text"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="username">ID verification</label>
            <div style={{ display: "flex" }} className="space-x-2">
              <div
                className={`${stylesForm.button} ${
                  activeButton === "Passport" ? stylesForm.active : ""
                } cursor-pointer`}
                onClick={() => handleButtonClick("Passport")}
              >
                Passport
              </div>
              <div
                className={`${stylesForm.button} ${
                  activeButton === "ID Card" ? stylesForm.active : ""
                } cursor-pointer`}
                onClick={() => handleButtonClick("ID Card")}
              >
                ID Card
              </div>
              <div
                className={`${stylesForm.button} ${
                  activeButton === "Driver's License" ? stylesForm.active : ""
                } cursor-pointer`}
                onClick={() => handleButtonClick("Driver's License")}
              >
                Driver's License
              </div>
            </div>
          </div>
          <div className={`${stylesForm.formGroup} flex-col`}>
            <label htmlFor="image">Upload Image</label>
            <div className="relative">
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className={`${stylesForm.formGroup}`}>
            <button className="w-full mt-4">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
