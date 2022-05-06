import React from "react"
import Layout from "../components/Layout/Layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/Hero"
const MP = () => {
  return (
    <Layout>

      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Rajasthan
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
                  <a href="callto:100">100</a>,<a href="callto:01412619725">0141-2619725</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FIRE STATION</th>
                <td className="fw-bold ">
                  <a href="callto:101">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Department of Tourism (Government) M.I Road , Jaipur
                </th>
                <td className="fw-bold ">
                  <a href="callto:0141-5110598">0141-5110598</a>,
                  <a href="callto:0141-5155100">0141-5155100</a>
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
                  <a href="callto:">1090</a>, <a href="callto:">1091</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Gas Leakage </th>
                <td className="fw-bold ">
                  <a href="callto:">1906</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Help for SC / ST</th>
                <td className="fw-bold ">
                  <a href="callto:">18001806025</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SAMPARK (GREVIENCES REPORTING & REDRESSAL )</th>
                <td className="fw-bold ">
                  <a href="callto:">181</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Emergency Oxygen</th>
                <td className="fw-bold ">
                  <a href="callto:">0141-2721771</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Apex Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">0141-2751871</a>,
                  <a href="callto:">2751872</a>
                </td>
              </tr>
              <tr>
                <th scope="row">BLOOD BANK</th>
                <td className="fw-bold ">
                  <a href="callto:">0141-2518234</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Rajasthan State Road Transport Corporation( Jaipur)
                </th>
                <td className="fw-bold ">
                  <a href="callto:">0141-2373043</a>,
                  <a href="callto:">91-9413385700</a>
                </td>
              </tr>
              <tr>
                <th scope="row">RAILWAYS ENQUIRY</th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">INDIAN RAILWAYS SECURITY HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">182</a>
                </td>
              </tr>
              <tr>
                <th scope="row">RAJASTHAN WOMEN COMMISION</th>
                <td className="fw-bold ">
                  <a href="callto:">0141-2779001</a>
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
