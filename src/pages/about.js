import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Image from "../components/Images/Images"
import { BrowserRouter as Router, Switch, Route, Link } from "gatsby"
const Items = [
  {
    image: "about1.png",
  },
  {
    image: "about2.png",
  },
]

const About = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center py-5">About</h2>
        <div className="row row-header justify-content-center" style={{ paddingTop: "50px" }}>
          {Items.map((item, i) => {
            return (
              <div key={i} className="col-lg-4 col-md-5 col-sm-12" style={{paddingBottom: "50px" }} >
                
                
                <Image
              className="d-block mx-lg-auto img-fluid align-self-center"
              
              filename={`${item.image}`}
              alt="1"
            />

                
              </div>
               )
              })}
        </div>
        <div  >
        <h4 className="fw-bold " style={{fontFamily: "Courier New, monospace",color: "darkslategrey"}}>
          Our motive is to build a community which is strong and real. A
          community where they ask the questions like, “What matters to you?”
          instead of, “What is the matter with you?”. The website and the team
          would always stand with the user when they hit a stumble and
          throughout this beautiful journey that life is.{" "}
        </h4>
        <h4 className="fw-bold " style={{fontFamily: "Courier New, monospace",color: "darkslategrey"}}>
          This website aims to broaden the perspective of user on certain topics
          and provide the safe space for them where they can be themselves and
          indulge in their personal growth so that they can leave harmful coping
          mechanisms of theirs behind and move on with their true real identity.
        </h4>
        <h4 className="fw-bold " style={{fontFamily: "Courier New, monospace",color: "darkslategrey"}}>
          There are 4 main sections to this website starting with providing the
          user with all range of helpline numbers in just one place. A lot could
          be changed and saved with just a dial. People sometimes tend to forget
          that the solution is available for their problems only if they are
          courageous enough to look for them. So, this website lays out this
          option for them.
        </h4>
        <h4 className="fw-bold " style={{fontFamily: "Courier New, monospace",color: "darkslategrey"}}>
          Leading this section is our vent box where the user can anonymously
          spit out their ordeal. We understand that it’s not always easy to open
          up and share everything to the people we surround ourselves with. But
          talking about your situation out openly can feel liberating and help
          release the burden to some extent. So, we provide the service of vent
          box in the hope of this.
        </h4>
        <h4 className="fw-bold " style={{fontFamily: "Courier New, monospace",color: "darkslategrey"}}>
          Third feature of this website is named, “Words to remember”. Sometimes
          what a person needs is quick and timely burst of wisdom to get the
          focus back. So, our idea is similar to that of post-it notes that
          would keep reminding our user of their significance and importance in
          this world. To tell them that, “You matter!!”, to remind them the
          truths of life.
        </h4>
        <h4 className="fw-bold " style={{fontFamily: "Courier New, monospace",color: "darkslategrey"}}>
          Last section is named, “Life Happens”. And true to its name life
          happens and it’s always not so pleasant. And when that hits, this
          feature of the website presents you with an open letter written just
          for the emotion you are feeling at the point in hope to make it better
          along with the links of ted talks regarding that. With users who are
          unable to understand and grasp a certain topic mentioned in this
          section have nothing to worry about. Because it’s not just the open
          letter that we have provided but what it actually is, is also stated.
        </h4>
        </div>
      </div>
    </Layout>
  )
}

export default About
