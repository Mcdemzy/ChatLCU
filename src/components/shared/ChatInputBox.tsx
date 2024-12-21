import React, { useState, useRef, useEffect } from "react";
import { BsPaperclip } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const ChatInputBox: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${Math.min(scrollHeight, 280)}px`;
    }
  }, [input]);

  return (
    <div className="w-full max-w-[768px] border border-gray-300 rounded-2xl shadow-md p-3 bg-gray-100">
      {/* Textarea */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message ChatLCU..."
          className="w-full max-h-[10rem] overflow-y-auto px-2  pb-2 text-gray-800 bg-transparent outline-none resize-none scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200  rounded-md"
        />
      </div>

      {/* Bottom Icons + Send Button */}
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <button className="text-gray-500 hover:text-gray-700">
            <BsPaperclip size={22} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <BsGift size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FiGlobe size={22} />
          </button>
        </div>

        {/* Send Button */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all"
          onClick={() => {
            console.log("Message sent:", input);
            setInput("");
            alert(input);
          }}
        >
          <FaArrowUp size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInputBox;
