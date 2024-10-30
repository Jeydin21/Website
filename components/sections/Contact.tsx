import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-5xl font-extrabold text-light-text dark:text-dark-text">
            Contact Me
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="https://formsubmit.co/jeydin@j21.dev" method="POST" target="_blank">
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className='hidden' />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://j21.dev"></input>
              <input type="hidden" name="_autoresponse" value="Thanks for sending me a message! I'll send a reply within 24 hours." />
              <input type="hidden" name="_subject" value="You have a new message from j21.dev"></input>
              <input
                name="name"
                type="text"
                required
                className="bg-black/60 dark:bg-white/15 appearance-none rounded-lg relative block w-full p-3 text-white placeholder:text-stone-400 rounded-t-md sm:text-sm font-bold"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                className="bg-black/60 dark:bg-white/15 appearance-none rounded-lg relative block w-full p-3 text-white placeholder:text-stone-400 sm:text-sm font-bold"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                required
                className="bg-black/60 dark:bg-white/15 appearance-none rounded-lg relative block w-full h-28 p-3 text-white placeholder:text-stone-400 rounded-b-md sm:text-sm font-bold"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;