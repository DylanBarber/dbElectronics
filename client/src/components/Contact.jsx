//Dependencies
import React from "react";

//CSS
import "../css/contact.css";

class Contact extends React.Component {
  state = {
    nameValue: "",
    emailValue: "",
    subjectValue: "",
    messageValue: "",
    formErrors: [],
    submittedSuccessfully: false
  };

  //Form Validation
  nameOnChangeHandler = e => {
    this.setState({ nameValue: e.target.value });
  };
  emailOnChangeHandler = e => {
    this.setState({ emailValue: e.target.value });
  };
  subjectOnChangeHandler = e => {
    this.setState({ subjectValue: e.target.value });
  };
  messageOnChangeHandler = e => {
    this.setState({ messageValue: e.target.value });
  };
  formSubmit = () => {
    const errors = [];
    if (this.state.nameValue === "") {
      errors.push("Please enter a name.");
    }
    if (
      this.state.emailValue === "" ||
      this.state.emailValue.indexOf("@") === -1
    ) {
      errors.push("Please enter a valid Email.");
    }
    if (this.state.subjectValue === "") {
      errors.push("Please enter a subject.");
    }
    if (this.state.messageValue === "") {
      errors.push("Please enter a message.");
    }
    this.setState({ formErrors: errors });
    if (errors.length === 0) {
      this.setState({ submittedSuccessfully: true });
    }
  };

  render() {
    const displayErrors = this.state.formErrors.map((error, i) => {
      return (
        <div key={i} className="formErrorDiv">
          <p className="formErrorText">{error}</p>
        </div>
      );
    });

    // : (
    //   <div key={i} className="formErrorDiv">
    //     <p className="formErrorText">Your form has been submitted!</p>
    //   </div>
    // );
    return (
      <>
        <div className="container container-bg contactFormDiv">
          <section className="mb-4 contactForm">
            {/* <!--Section heading--> */}
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact us
            </h2>
            {/* <!--Section description--> */}
            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will contact you within 24 hours to help.
            </p>

            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  {/* <!--Grid row--> */}
                  <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          onChange={this.nameOnChangeHandler}
                        />
                        <label htmlFor="name" className="">
                          Your name
                        </label>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                          onChange={this.emailOnChangeHandler}
                        />
                        <label htmlFor="email" className="">
                          Your email
                        </label>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}
                  </div>
                  {/* <!--Grid row--> */}

                  {/* <!--Grid row--> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          onChange={this.subjectOnChangeHandler}
                        />
                        <label htmlFor="subject" className="">
                          Subject
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <!--Grid row--> */}

                  {/* <!--Grid row--> */}
                  <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                          onChange={this.messageOnChangeHandler}
                        />
                        <label htmlFor="message">Your message</label>
                      </div>
                    </div>
                  </div>
                  {/* <!--Grid row--> */}
                </form>

                <div className="text-center text-md-left">
                  <a
                    id="send"
                    href="###"
                    className="btn btn-primary"
                    onClick={this.formSubmit}
                  >
                    Send
                  </a>
                </div>
                <div className="status" />
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x" />
                    <p>Detroit, MI 48127, USA</p>
                  </li>

                  <li>
                    <i className="fas fa-phone mt-4 fa-2x" />
                    <p>+ 01 (555) 555 5555</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x" />
                    <p>DylanBarber1@Outlook.com</p>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {this.state.submittedSuccessfully ? (
                <div className="formSubmittedDiv">
                  <p className="formSubmittedText">
                    Your form has been submitted!
                  </p>
                </div>
              ) : (
                <div className="formErrorsFoundWrapper">{displayErrors}</div>
              )}
            </div>
          </section>
          {/* <!--Section: Contact v.2--> */}
        </div>
      </>
    );
  }
}
export default Contact;
