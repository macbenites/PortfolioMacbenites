import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  //const form = useRef();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_7o2etjo",
  //       "template_klc72jc",
  //       form.current,
  //       "bJJRcSrJq9DJnlSo2"
  //     )
  //     .then(
  //       (result) => {
  //         alert(result.text);
  //       },
  //       (error) => {
  //         alert(error.text);
  //       }
  //     );
  // };

  const onSubmit = (data) => {
    alert("Form submitted");
    emailjs
      .send("service_7o2etjo", "template_klc72jc", data, "bJJRcSrJq9DJnlSo2")
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console(error.text);
        }
      );
  };

  return (
    <div className="container max-w-xl m-auto">
      <h1 className="text-5xl font-sans break-words font-extrabold text-cyan-900 antialiased">
        Contact{" "}
        <span className="text-5xl font-sans break-words font-extrabold text-orange-600 antialiased">
          Me
        </span>
      </h1>
      <form
        className="w-full py-20"
        // ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.user_name && " border-red-500"
              }`}
              type="text"
              name="user_name"
              placeholder="Marlon"
              {...register("user_name", {
                required: {
                  value: true,
                  message: "Nombre requerido.",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                  message: "El nombre solo admite letras y espacios en blanco.",
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe contener mínimo 3 caracteres.",
                },
              })}
              onKeyUp={() => {
                trigger("user_name");
              }}
            />
            {errors.user_name && (
              <p className="text-red-500 text-xs italic">
                {errors.user_name.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Acosta"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.user_email && " border-red-500"
              }`}
              type="email"
              name="user_email"
              {...register("user_email", {
                required: {
                  value: true,
                  message: "Email requerido.",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El formato del email ingresado no es correcto.",
                },
              })}
              onKeyUp={() => {
                trigger("user_email");
              }}
            />
            {errors.user_email && (
              <p className="text-red-500 text-xs italic">
                {errors.user_email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className={`no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              name="message ${errors.message && " border-red-500"}`}
              placeholder="Your message"
              {...register("message", {
                required: {
                  value: false,
                },
                minLength: {
                  value: 10,
                  message: "La nota debe contener al menos 10 caracteres.",
                },
                maxLength: {
                  value: 200,
                  message: "La nota no debe contener más de 200 caracteres.",
                },
              })}
              onKeyUp={() => {
                trigger("message");
              }}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow w-full bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="Send"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
