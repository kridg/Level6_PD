import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { submitInquiry } from "../services/api";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().min(7, "Phone must be at least 7 digits"),
  company_name: Yup.string(),
  country: Yup.string().required("Country is required"),
  job_title: Yup.string().required("Job title is required"),
  job_type: Yup.string().required("Job type is required"),
  job_details: Yup.string()
    .min(10, "Please describe your project")
    .required("Details are required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company_name: "",
  country: "",
  job_title: "",
  job_type: "other",
  job_details: "",
};

const ContactForm = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      setStatus(null);
      await submitInquiry(values);
      setStatus({ type: "success", message: "Thanks! We will reach out shortly." });
      actions.resetForm();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Could not submit right now. Please try again.",
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="card p-4 sm:p-5 md:p-6 bg-gradient-to-br from-white to-orange-50/20 hover-glow w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Contact us</h3>
        <span className="pill text-xs sm:text-sm">Reply in 1 business day</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Name</label>
              <Field
                name="name"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] text-base"
                placeholder="Jane Doe"
                autoComplete="name"
              />
              <ErrorMessage
                component="div"
                name="name"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] text-base"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Phone</label>
              <Field
                name="phone"
                type="tel"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] text-base"
                placeholder="+1 555 123 4567"
                autoComplete="tel"
              />
              <ErrorMessage
                component="div"
                name="phone"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Company name
              </label>
              <Field
                name="company_name"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] text-base"
                placeholder="Acme Inc."
                autoComplete="organization"
              />
              <ErrorMessage
                component="div"
                name="company_name"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Country</label>
              <Field
                name="country"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] text-base"
                placeholder="United States"
                autoComplete="country-name"
              />
              <ErrorMessage
                component="div"
                name="country"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Job title</label>
              <Field
                name="job_title"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] text-base"
                placeholder="Director of AI"
                autoComplete="job-title"
              />
              <ErrorMessage
                component="div"
                name="job_title"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Job type</label>
              <Field
                as="select"
                name="job_type"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] text-base"
              >
                <option value="ai_engineer">AI Engineer</option>
                <option value="data_scientist">Data Scientist</option>
                <option value="ml_ops">ML Ops</option>
                <option value="research">Research Collaboration</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                component="div"
                name="job_type"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Job details
              </label>
              <Field
                as="textarea"
                name="job_details"
                rows="4"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 sm:py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary text-base resize-y min-h-[100px]"
                placeholder="Describe your project goals, timelines, and constraints."
              />
              <ErrorMessage
                component="div"
                name="job_details"
                className="text-xs text-red-600 mt-1"
              />
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3 sm:gap-0">
              <span className="text-xs sm:text-sm text-gray-500 order-2 sm:order-1">
                We respond within 1 business day.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary to-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:-translate-y-0 min-h-[44px] w-full sm:w-auto order-1 sm:order-2 font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit inquiry"}
              </button>
            </div>
            {status && (
              <div
                className={`md:col-span-2 text-sm ${
                  status.type === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;


