"use client"
import { Meteors } from "@/components/ui/meteors";
import React, { useState } from "react";

function Page() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Contact from ${name}`;
    const body = `Message: ${message}`;
    window.location.href = `mailto:anafariya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen w-full bg-black py-12 pt-36 pl-60 flex justify-center">
      <div className="w-2/3 text-white">
        <h1 className="text-6xl">Contact Us</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="input text-black h-12 mt-10 rounded-lg input-bordered w-full mb-4"
            value={name}
            onChange={handleNameChange}
          />
          <textarea
            placeholder="Message"
            className="input h-24 text-black rounded-lg input-bordered w-full mb-4"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <button type="submit" className="btn bg-blue-500 text-white rounded-xl font-semibold px-6 py-3 w-max hover:bg-blue-600 transition duration-300 ease-in-out">Send</button>
        </form>
      </div>
      <Meteors 
       number={50}/>
    </div>
  );
}

export default Page;
