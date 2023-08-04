import { useState } from "react";

import emailjs from "@emailjs/browser";

// Importing from formik
import { useFormik, validateYupSchema } from "formik";

// Importing from yup
import * as Yup from "yup";

// Importing from React router dom
import { useLocation } from "react-router-dom";

export default function ContactForm() {
  let { pathname } = useLocation();

  const [formState, setFormState] = useState("default");

  const [submitBtnText, setSubmitBtnText] = useState("Send Enquiry");
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Your name is required"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Your email is required"),
      message: Yup.string().required("Plese write your message"),
    }),

    onSubmit: (values) => {
      emailjs
        .send(
          "service_6jcz17o",
          "template_nhzcstg",
          values,
          "u8yslY9JMNjG1EVcU"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setFormState("submitted");
          },
          function (error) {
            console.log("FAILED...", error);
            setSubmitBtnText("Send Enquiry");
            setErrorMessageVisible(true);
            setTimeout(()=>{
              setErrorMessageVisible(false);
            }, "4000" )
          }
        );

      setSubmitBtnText("Sending...");
    },
  });

  

  // console.log(formik)

  let formContent;

  if (formState === "submitted") {
    formContent = (
      <div>
        <div className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-primary font-bold text-center mb-6">
          Thanks :&#41;
        </div>
        <p className="text-slate-700 text-base lg:text-lg xl:text-xl text-center">
          We'll contact you shortly! <br /> Please keep an eye on your inbox.
        </p>
      </div>
    );
  } else {
    formContent = (
      <form
        className="w-full flex flex-col gap-4 lg:gap-10 items-center relative"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col lg:flex-row w-full items-center gap-4">
          <label htmlFor="name" className="w-full">
            <span
              className={`block pl-4 text-sm mb-1 ${
                formik.touched.name && formik.errors.name
                  ? "text-red-500 font-semibold"
                  : "text-slate-700"
              }`}
            >
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"}
            </span>
            <input
              type="text"
              name="name"
              placeholder="Enter you name"
              className={`block w-full p-4 rounded-full outline outline-1  hover:outline-2 focus:outline-2 hover:outline-slate-900 transition-all duration-100 focus:outline-slate-900 ${
                formik.touched.name && formik.errors.name
                  ? "outline-red-500"
                  : "outline-slate-200"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </label>

          <label htmlFor="email" className="w-full">
            <span
              className={`block pl-4 text-sm mb-1 ${
                formik.touched.email && formik.errors.email
                  ? "text-red-500 font-semibold"
                  : "text-slate-700"
              }`}
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter you email"
              className={`block w-full p-4 rounded-full outline outline-1  hover:outline-2 focus:outline-2 hover:outline-slate-900 transition-all duration-100 focus:outline-slate-900 ${
                formik.touched.email && formik.errors.email
                  ? "outline-red-500"
                  : "outline-slate-200"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
        </div>

        <div className="flex w-full">
          <label htmlFor="message" className="w-full">
            <span
              className={`block pl-4 text-sm mb-1 ${
                formik.touched.message && formik.errors.message
                  ? "text-red-500 font-semibold"
                  : "text-slate-700"
              }`}
            >
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : "Message"}
            </span>
            <textarea
              name="message"
              placeholder="Let us know about your project"
              className={`block w-full h-28 resize-none p-4 rounded-3xl outline outline-1 hover:outline-2 focus:outline-2 hover:outline-slate-900 transition-all duration-100 focus:outline-slate-900 ${
                formik.touched.message && formik.errors.message
                  ? "outline-red-500"
                  : "outline-slate-200"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
          </label>
        </div>

        <button
          className="rounded-full w-full lg:w-auto mt-6 text-white px-8 py-4 bg-slate-950 hover:bg-primary transition-all duration-200"
          type="submit"
        >
          {submitBtnText}
        </button>

        <div className={`rounded-full bg-red-500 text-white text-xs py-3 px-4 absolute bottom-8 transition-all duration-500 ease-in-out ${errorMessageVisible == true ? "opacity-100 -translate-y-8 scale-100" : "opacity-0 scale-0"}`}>
          Message Not Sent! Please Try Again.
        </div>
      </form>
    );
  }

  return (
    <div
      className={`w-full py-20 md:pt-40 md:pb-20 bg-slate-100 ${
        pathname === "/contact" ? "pt-40" : ""
      }`}
    >
      <div className="container flex flex-col items-center">
        <div className="text-slate-900 text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-center font-semibold mb-6">
          GET IN TOUCH
        </div>
        <div className="text-slate-700 text-lg lg:text-xl xl:text-2xl mb-20">
          We’re happy to help 😄
        </div>

        {formContent}
      </div>
    </div>
  );
}
