import React from "react";

const Chat = () => {
  const sample = ["How to hack a website",
  "how to learn hacking",
  "how to think like a black hat?"]
  return (
    <div className="h-screen w-screen flex bg-[black]">
      <div className="w-[20%] h-screen bg-[#1b1a1a] text-white p-4">
        <div className="h-[10.2%]">
          <button className="w-full h-[50px] border rounded">
          New Chat
          </button>
        </div>
        <div className="h-[80%] overflow-scroll hide-scroll-bar">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => {
            return (
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
            );
          })}
        </div>
        <div className="h-[10%] border-t">
          {[1].map((item, index) => {
            return (
              <div className="py-3 rounded text-center mt-3 font-light flex items-center px-8 cursor-pointer">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
                </span>
                My Chat history
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[80%]">
      <div className="h-[80%] flex flex-col justify-center items-center text-white">
      <div className="text-4xl font-bold">Nazu's GPT</div> 
      <div>
      {
        sample.map((item,index) => {
          return (
            <div>{item}</div>
            )
        })
      }
      </div>
      </div>
      </div>
    </div>
  );
};

export default Chat;
