
import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h1 className="font-playfair text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-700">Have a question? Just drop your query!</p>
      {sent ? (
        <div className="p-6 bg-green-100 rounded-lg">Thank you for contacting us!</div>
      ) : (
        <form
          className="space-y-4 text-left"
          onSubmit={e => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input required type="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea required className="w-full border rounded px-3 py-2" rows={4} />
          </div>
          <button type="submit" className="bg-yashpurple text-white px-8 py-2 rounded-full font-semibold hover:bg-yashdeep transition mt-6">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
