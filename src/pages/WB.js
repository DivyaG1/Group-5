import React from "react"
import Layout from "../components/Layout/Layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/Hero"
const WB = () => {
  return (
    <Layout>

      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          West Bengal
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
                <th scope="row">Senior Citizen Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">9830088884</a>
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
                <th scope="row">Medical Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">9830079999</a>
                </td>
              </tr>
              <tr>
                <th scope="row">TRAFFIC Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1073</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Central Blood Bank</th>
                <td className="fw-bold ">
                  <a href="callto:">033-23510620</a> ,
                  <a href="callto:">23510619</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Hemophilia Society Blood Bank</th>
                <td className="fw-bold ">
                <a href="callto:">033-24263739</a>, 
                <a href="callto:"> 24264273</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Life Care Blood Bank ( Beniapukur )</th>
                <td className="fw-bold ">
                  <a href="callto:">033-22842298</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ashok Blood Bank ( Jodhpur Park )</th>
                <td className="fw-bold ">
                  <a href="callto:">033-24720333</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Kolkata Municiapal Corporation</th>
                <td className="fw-bold ">
                  <a href="callto:">1600333375</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SENIOR CITIZEN HELPLINE</th>
                <td className="fw-bold ">
                  <a href="callto:">0731-2510308</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Tata Medical Centre -

( Speciality Cancer Care )</th>
                <td className="fw-bold ">
                  <a href="callto:">033-66057000</a>
                </td>
              </tr>
              <tr>
                <th scope="row">SSKM Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">22236026</a>,
                  <a href="callto:">22236242</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default WB
