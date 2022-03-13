import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert('Form submitted');
    emailjs.send('service_7o2etjo', 'template_klc72jc', data, 'bJJRcSrJq9DJnlSo2').then(
      (result) => {
        alert(result.text);
      },
      (error) => {
        console(error.text);
      }
    );
  };

  return (
    <section className="container max-w-3xl py-16 mx-auto">
      <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">Contact Me.</h1>
      <form className="w-full py-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-500 dark:text-gray-300 text-md font-bold mb-2">First Name</label>
            <input
              className={`appearance-none block w-full bg-transparent dark:text-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-transparent ${
                !errors.user_name ? 'border-gray-500' : ' border-red-400'
              }`}
              type="text"
              name="user_name"
              placeholder="Marlon"
              {...register('user_name', {
                required: {
                  value: true,
                  message: 'Name required.',
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                  message: 'Only letters and blanks are allowed in the name.',
                },
                minLength: {
                  value: 3,
                  message: 'The name must contain at least 3 characters.',
                },
              })}
              onKeyUp={() => {
                trigger('user_name');
              }}
            />
            {errors.user_name && <p className="text-red-400 text-xs italic">{errors.user_name.message}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block tracking-wide text-gray-500 dark:text-gray-300 text-md font-bold mb-2">Email</label>
            <input
              className={`appearance-none block w-full bg-transparent dark:text-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-transparent ${
                !errors.user_email ? 'border-gray-500' : ' border-red-400'
              }`}
              type="email"
              name="user_email"
              {...register('user_email', {
                required: {
                  value: true,
                  message: 'Email required.',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'The format of the entered email is not correct.',
                },
              })}
              onKeyUp={() => {
                trigger('user_email');
              }}
            />
            {errors.user_email && <p className="text-red-400 text-xs italic">{errors.user_email.message}</p>}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block tracking-wide  text-gray-500 dark:text-gray-300 text-md font-bold mb-2">Message</label>
            <textarea
              className={`no-resize appearance-none block w-full bg-transparent dark:text-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-transparent  h-36 resize-none"
              ${!errors.message ? 'border-gray-500' : ' border-red-400'}`}
              placeholder="Your message"
              {...register('message', {
                required: {
                  value: true,
                  message: 'Message required.',
                },
                minLength: {
                  value: 10,
                  message: 'The note must contain at least 10 characters.',
                },
                maxLength: {
                  value: 200,
                  message: 'The note should not contain more than 200 characters.',
                },
              })}
              onKeyUp={() => {
                trigger('message');
              }}
            ></textarea>
            {errors.message && <p className="text-red-400 text-xs italic">{errors.message.message}</p>}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow w-full bg-black dark:bg-white hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white dark:text-black font-normal py-3 rounded-md"
              type="submit"
              value="Send"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
