import { useState } from "react";
import Image from "next/image";

interface CreateTicketProps {
  show: boolean;
  onClose: () => void;
}

export default function CreateTicket({ show, onClose }: CreateTicketProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const categories = ["Game", "Deposit", "Withdraw", "Report", "Other"];

  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-black bg-opacity-50 fixed inset-0"
            onClick={onClose}
          ></div>
          <div
            className="bg-[#202430] p-5 w-[500px] flex flex-col items-start gap-2 rounded-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="text-white font-inter font-semibold text-2xl">
                New Ticket
              </h2>
              <Image
                src="/x.svg"
                alt="Close"
                width={24}
                height={24}
                onClick={onClose}
                className="cursor-pointer"
              />
            </div>
            <label className="text-[#555A71] font-inter font-medium text-sm mt-1.5">
              Categories
            </label>
            <div className="flex items-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`p-1 text-sm rounded text-[#4A4E62] bg-[#191C26] ${
                    selectedCategory === category
                      ? "bg-[#202843] text-[#5271FF]"
                      : ""
                  }`}
                  style={{
                    color: selectedCategory === category ? "#5271FF" : "",
                    background: selectedCategory === category ? "#202843" : "",
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="text-[#555A71] font-inter font-medium text-sm">
              Topic
            </label>
            <input
              className="w-full p-2 rounded border-[1px] border-[#262A37] bg-[#191C26] placeholder-[#555A71] font-inter text-[16px] font-normal"
              placeholder="Enter a topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <label className="text-[#555A71] font-inter font-medium text-sm">
              Description
            </label>
            <textarea
              className="w-full h-[180px] p-2 rounded border-[1px] border-[#262A37] bg-[#191C26] placeholder-[#555A71] font-inter text-[16px] font-normal"
              placeholder="Enter a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="w-full p-2 text-white rounded bg-[#5271FF] border-[1px] border-[#5271FF] font-inter font-semibold text-sm">
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}
