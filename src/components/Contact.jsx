import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const response = await fetch("https://4sgbtl1qyj.execute-api.us-east-1.amazonaws.com/V1", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message Sent Successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.current.reset();
      } else {
        throw new Error("Ops! Message Not Sent");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form
        id="myForm"
        className="contactform"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="guestName"
                id="guestName"
                placeholder="Guest NAME"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="YOUR EMAIL"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="messageTitle"
                id="messageTitle"
                placeholder="Message Title"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="(Optional) Phone Number"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
