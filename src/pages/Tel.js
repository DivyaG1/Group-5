import React from "react"
import Layout from "../components/Layout/Layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/Hero"
const Tel = () => {
  return (
    <Layout>

      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Telangana
        </h1>
        <div
          className="row row-header justify-content-center"
          style={{ paddingTop: "50px" }}
        >
          <table
            class="table table-bordered table-striped"
            style={{ paddingBottom: "50px" }}
          >
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col ">
                  <h3></h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">POLICE</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE STATION</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Electricity Complaint</th>
                <td className="fw-bold ">
                  <a href="callto:">1912</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ambulance</th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>,<a href="callto:">102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline Number</th>
                <td className="fw-bold ">
                   <a href="callto:">181</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Crime Stopper</th>
                <td className="fw-bold ">
                  <a href="callto:">1090</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Traffic Help</th>
                <td className="fw-bold ">
                  <a href="callto:">1073</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Railways Enquiry </th>
                <td className="fw-bold ">
                  <a href="callto:">131</a>,
                  <a href="callto:">135</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Osmania General Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">040-23538846</a>,
                  <a href="callto:">040-24600146</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Government Chest Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">040-23814421</a>,
                  
                </td>
              </tr>
              <tr>
                <th scope="row">Government ENT Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">040-24740245</a>,
                  <a href="callto:">040-24742329​​​​</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Gandhi Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">040-27505566</a>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Tel
