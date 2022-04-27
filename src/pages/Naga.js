import React from "react"
import Layout from "../components/Layout/Layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/Hero"
const Naga = () => {
  return (
    <Layout>

      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">Nagaland</h1>
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
                <th scope="row">Fire Services</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>,<a href="callto:">0370-2222952</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Police Services</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>,<a href="callto:">0370-2902068</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ambulance</th>
                <td className="fw-bold ">
                  <a href="callto:">102</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">181</a>
                </td>
              </tr>
              <tr>
                <th scope="row">AIDS HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">1097</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Child Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1098</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Railway Enquiry</th>
                <td className="fw-bold ">
                  <a href="callto:">139</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Disaster / Medical Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  DISASTER ( EARTHQUAKE / FLOOD/ CYCLONE ) N.D.M.A ( Control
                  Room )
                </th>
                <td className="fw-bold ">
                  <a href="callto:">022-22027990</a>,
                  <a href="callto:">0370-2271005 </a>
                </td>
              </tr>
              <tr>
                <th scope="row">Electricity Complain </th>
                <td className="fw-bold ">
                  <a href="callto:">0370 2222431</a>
                </td>
              </tr>
              <tr>
                <th scope="row">DIMAPUR AIRPORT ( Enquiry Number )</th>
                <td className="fw-bold ">
                  <a href="callto:">0386-2243133</a>,
                  <a href="callto:">0386-2243157</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Naga Hospital / Civil Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">0370-2222916</a>
                </td>
              </tr>
              <tr>
                <th scope="row">FAITH Hospital ( Old Sewak Road, Dimapur )</th>
                <td className="fw-bold ">
                  <a href="callto:">03862-248911</a>,
                  <a href="callto:">9077727777</a>,
                  <a href="callto:">9077747777</a>,
                  <a href="callto:">9436004220</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Dr. N.Memorial Clinic</th>
                <td className="fw-bold ">
                  <a href="callto:">0370-2222341</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Air Ambulance</th>
                <td className="fw-bold ">
                  <a href="callto:">91-9645744117</a>,
                  <a href="callto:">9540161344</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Eden Medical Centre</th>
                <td className="fw-bold ">
                  <a href="callto:">03862-248288</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Indian Red Cross Society</th>
                <td className="fw-bold ">
                  <a href="callto:">0370 2244350</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Naga
