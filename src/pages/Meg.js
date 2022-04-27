import React from "react"
import Layout from "../components/Layout/Layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/Hero"
const Meg = () => {
  return (
    <Layout>

      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          Meghalaya
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
                <th scope="row">Fire Services</th>
                <td className="fw-bold ">
                  <a href="callto:">101</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Police Services</th>
                <td className="fw-bold ">
                  <a href="callto:">100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Medical Emergency</th>
                <td className="fw-bold ">
                  <a href="callto:">108</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Women Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1091</a>,
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
                <th scope="row">Telephone Complaint</th>
                <td className="fw-bold ">
                  <a href="callto:">198</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Electricity Complaint</th>
                <td className="fw-bold ">
                  <a href="callto:">1912</a>
                </td>
              </tr>
              <tr>
                <th scope="row">PDS/NFSA</th>
                <td className="fw-bold ">
                  <a href="callto:">1967</a>,
                  <a href="callto:">1800-345-3670</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Covid-19</th>
                <td className="fw-bold ">
                  <a href="callto:">	14410</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Persons with Disabilities (autistic)</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-11-7776</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Persons with Disabilities (intellectual)</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-572-6422</a>
                </td>
              </tr>
              <tr>
                <th scope="row">National Consumer Helpline</th>
                <td className="fw-bold ">
                  <a href="callto:">1800114000</a>,
                  <a href="callto:">14404</a>
                </td>
              </tr>
              <tr>
                <th scope="row">State Bank of India</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-11-2211</a>,
                  <a href="callto:">1800-425-3800</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Meghalaya Rural Bank</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-345-3691</a>
                </td>
              </tr>
              <tr>
                <th scope="row">	Meghalaya Cooperative Apex Bank</th>
                <td className="fw-bold ">
                  <a href="callto:">1800-5327444 </a>,
                  <a href="callto:">8331004</a>,
                  <a href="callto:"> 1236230</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Civil Hospital , Shilliong</th>
                <td className="fw-bold ">
                  <a href="callto:">0364-2224100</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ganesh Das Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">0364-2224766</a>
                </td>
              </tr>
              <tr>
                <th scope="row">KJP Hospital , Jaiaw, Shillong</th>
                <td className="fw-bold ">
                  <a href="callto:">0364-2223053</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Military Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">0364-2224368</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Police Hospital</th>
                <td className="fw-bold ">
                  <a href="callto:">0364-2224658</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Meg
