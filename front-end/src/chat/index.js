import React from "react";

const Chat = () => {
  return (
    <div className="h-screen w-screen bg-[black]">
      <div className="w-[20%] h-screen bg-[#1b1a1a] text-white p-4">
        <div>
          <button className="w-full h-[50px] border rounded">New Chat</button>
        </div>
        <div className="h-[75%]">
          <div className="py-3 rounded text-center mt-5 font-light flex items-center hover:bg-[black] px-8 cursor-pointer">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-messages"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </span>
            My Chat history
          </div>
        </div>
        <div></div>
      </div>
      <div className="w[80%]"></div>
    </div>
  );
};

export default Chat;
