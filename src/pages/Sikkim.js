import React from "react"
import Layout from "../components/Layout/Layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/Hero"
const MP = () => {
  return (
    <Layout>

      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Sikkim
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
                  <a href="callto:">112</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE STATION</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              
                
              <tr>
                <th scope="row">Ambulance</th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>,<a href="callto:">102</a>
                </td>
              </tr>
             
              <tr>
                <th scope="row">MyGov Whatsapp Helpdesk</th>
                <td className="fw-bold ">
                  <a href="callto:">9013151515</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Mental Health</th>
                <td className="fw-bold ">
                  <a href="callto:">08046110007</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Senior Citizens</th>
                <td className="fw-bold ">
                  <a href="callto:">14567</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Railways Enquiry </th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ayush Covid-19 Counselling</th>
                <td className="fw-bold ">
                  <a href="callto:">14443</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Health Ministry</th>
                <td className="fw-bold ">
                  <a href="callto:">1075</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default MP
