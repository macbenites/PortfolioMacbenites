import Modal from '@common/Modal';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SuccessModal from '@components/SuccessModal';
import FailureModal from '@components/FailureModal';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const [modalOk, setModalOk] = useState(false);
  const [modalError, setModalError] = useState(false);

  const onSubmit = (data) => {
    emailjs.send('service_7o2etjo', 'template_klc72jc', data, 'bJJRcSrJq9DJnlSo2').then(
      (result) => {
        setModalOk(true);
        reset();
      },
      (error) => {
        setModalError(true);
      }
    );
  };

  return (
    <>
      <section className="container max-w-3xl py-16 mx-auto">
        <h1 className="text-6xl font-sans break-words font-semibold text-gradient dark:text-gradient-dark antialiased aos-init aos-animate">Contacto.</h1>
        <form className="w-full py-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-500 dark:text-gray-300 text-md font-bold mb-2">Nombres</label>
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
                    message: 'Nombre requerido.',
                  },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                    message: 'Solo se permiten letras y espacios en blanco en el nombre.',
                  },
                  minLength: {
                    value: 3,
                    message: 'El nombre debe contener al menos 3 caracteres.',
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
                    message: 'Email requerido.',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'El formato del correo electrónico ingresado no es correcto.',
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
              <label className="block tracking-wide  text-gray-500 dark:text-gray-300 text-md font-bold mb-2">Mensaje</label>
              <textarea
                className={`no-resize appearance-none block w-full bg-transparent dark:text-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-transparent  h-36 resize-none"
              ${!errors.message ? 'border-gray-500' : ' border-red-400'}`}
                placeholder="Tu mensaje"
                {...register('message', {
                  required: {
                    value: true,
                    message: 'Mensaje requerido.',
                  },
                  minLength: {
                    value: 10,
                    message: 'La nota debe contener al menos 10 caracteres.',
                  },
                  maxLength: {
                    value: 200,
                    message: 'La nota no debe contener más de 200 caracteres.',
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
                className="shadow w-full bg-black dark:bg-white dark:hover:bg-gray-300 hover:bg-neutral-900 focus:shadow-outline focus:outline-none text-white dark:text-black font-normal py-3 rounded-md"
                type="submit"
                value="Send"
              >
                Enviar
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </section>
      <Modal isShow={modalOk} setModal={setModalOk}>
        <SuccessModal />
      </Modal>
      <Modal isShow={modalError} setModal={setModalError}>
        <FailureModal />
      </Modal>
    </>
  );
};

export default ContactPage;
