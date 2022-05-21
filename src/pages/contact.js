import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
const Contact = () => {
  return (
    <Layout>
      
      <div className="container py-5 ">
        
          <div class="row justify-content-center py-5">
            <div class="col-md-3">
              <div class="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="image"
                />
                <h2>Contact Us</h2>
                <h4>We would love to hear from you !</h4>
              </div>
            </div>
            <div class="col-md-9">
              <form method="POST"
                role="presentation"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
                onSubmit="submit"
                >
                  <input type="hidden" name="form-name" value="contact" />
                <div class="form-group">
                  <label class="control-label col-sm-2" for="fname">
                    First Name:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="fname"
                      placeholder="Enter First Name"
                      name="fname"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="lname">
                    Last Name:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="lname"
                      placeholder="Enter Last Name"
                      name="lname"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">
                    Email:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="comment">
                    Comment:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="comment"
                      class="form-control"
                      rows="5"
                      id="comment"
                      name="comment"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10 py-1">
                    <button type="submit" class="btn btn-default">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        
      </div>
    </Layout>
  )
}

export default Contact
