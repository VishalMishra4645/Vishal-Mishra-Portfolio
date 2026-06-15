import React from "react";
import "../Style/Contact.css";
import { useForm } from "react-hook-form";
import { Link } from "react-scroll";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);

    alert("Message Sent Successfully!");

    reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Have a project in mind or want to connect? Feel free to reach out.
        </p>
      </div>

      <div className="contact-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Full Name"
            className="contact-input"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <small className="error-text">{errors.name.message}</small>
          )}

          <input
            type="email"
            placeholder="Your Email Address"
            className="contact-input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
          />

          {errors.email && (
            <small className="error-text">{errors.email.message}</small>
          )}

          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="contact-input"
            {...register("phone")}
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            className="contact-input"
            {...register("message", {
              required: "Message is required",
            })}
          />

          {errors.message && (
            <small className="error-text">{errors.message.message}</small>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="mailto:yourmail@gmail.com">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>

      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80}
      >
        <button className="scroll-top">
          <i className="bi bi-arrow-up"></i>
        </button>
      </Link>
    </section>
  );
};

export default Contact;