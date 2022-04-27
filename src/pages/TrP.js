import React from "react"
import Layout from "../components/Layout/Layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/Hero"
const TrP = () => {
  return (
    <Layout>

      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Tripura
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
                <th scope="row">C.M. HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1905</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ambulance</th>
                <td className="fw-bold ">
                  <a href="callto:">102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline Number</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DISASTER ( EARTHQUAKE / FLOOD/ CYCLONE ) N.D.M.A ( Control Room )</th>
                <td className="fw-bold ">
                  <a href="callto:">022-22027990</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AIRLINES CITY OFFICE</th>
                <td className="fw-bold ">
                  <a href="callto:">232 5470</a>,
                  <a href="callto:">231 1276</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Railways Enquiry </th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Indian Airlines Enquiry </th>
                <td className="fw-bold ">
                  <a href="callto:">143</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AGARTALA NURSING HOME</th>
                <td className="fw-bold ">
                  <a href="callto:">230 9665</a>
                </td>
              </tr>
              <tr>
                <th scope="row">LIFELINE NURSING HOME</th>
                <td className="fw-bold ">
                  <a href="callto:">232 3829</a>
                </td>
              </tr>
              <tr>
                <th scope="row">CARE & CURE</th>
                <td className="fw-bold ">
                  <a href="callto:">222 3381</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SANJIBANI NURSING HOME</th>
                <td className="fw-bold ">
                  <a href="callto:">222 7860</a>
                </td>
              </tr>
              <tr>
                <th scope="row">BSM HOSPITAL</th>
                <td className="fw-bold ">
                  <a href="callto:">8974044160</a>
                </td>
              </tr>
              <tr>
                <th scope="row">CENTRAL ROAD DATABYA</th>
                <td className="fw-bold ">
                  <a href="callto:">	
238 0080</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default TrP
