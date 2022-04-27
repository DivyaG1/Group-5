import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const EgoWhat = () => {
  return (
    <Layout>

      <div className="container-fluid  py-5">
        <Link to="/anxiety">
        <h1 class="py-5  display-2 border-bottom align-items-center fw-bold text-center  " style={{
                fontFamily: "Bradley Hand, cursive",
                textAlign: "justify",
                color: "rgb(11, 39, 88)",
              }}>
          Ego
        </h1>
        </Link>
        <div className="row row-header justify-content-center ">
        <div className="row col-12 py-5">
        <div className="col-md col-sm-6 ">
            <Image
              className="d-block mx-lg-auto img-fluid align-self-center"
              filename="jeas.jpg"
              alt="1"
            />
         </div>
        <div className=" col-md col-sm-6 ">
            <Image
              className="d-block mx-lg-auto img-fluid align-self-center"
              style={{ transform: "translate(50px, 100px), rotate(20deg), rotate(-20deg)"}}
              filename="jea.jpg"
              alt="1"
            />
        </div>
        </div>
        <div className="cards card-body">
            <h3
              className="display-7 fw-bold"
              style={{
                fontFamily: "American Typewriter",
                textAlign: "justify",
                color: "rgb(155, 42, 42)",
              }}
            >
              <h2 style={{ color: "rgb(216, 94, 12)" }}>What is it?:</h2>
              
              <h3 className="display-7 fw-bold "><p>Anxiety is your body’s natural response to stress. It’s a feeling of fear or apprehension about what’s to come. The first day of school, going to a job interview, or giving a speech may cause most people to feel fearful and nervous.
But if your feelings of anxiety are extreme, last for longer than six months, and are interfering with your life, you may have an anxiety disorder. They are the most common form of emotional disorder and can affect anyone at any age.
There are many types of anxiety disorders:
<ul>•	Panic Disorder: It causes panic attacks, which are sudden feelings of terror when there is no real danger. It may feel as if one is losing control.</ul><ul>
•	Phobia: A phobia is a persistent, excessive, unrealistic fear of an object, person, animal, activity or situation. A person with a phobia either tries to avoid the thing that triggers the fear, or endures it with great anxiety and distress. Some phobias are very specific and limited.</ul><ul>
•	Social Anxiety Disorder: For people with social anxiety disorder, everyday social interactions cause irrational anxiety, fear, self-consciousness and embarrassment. Symptoms may include excessive fear of situations in which one may be judged, worry about embarrassment or humiliation or concern about offending someone.</ul><ul>
•	Obsessive Compulsive Disorder: This disorder features a pattern of unwanted thoughts and fears (obsessions) that lead you to do repetitive behaviours (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress.</ul><ul>
•	Separation Anxiety Disorder: This disorder is a condition in which a child becomes fearful and nervous when away from home or separated from a loved one- usually a parent or other caregiver- to whom the child is attached.</ul><ul>
•	Illness Anxiety Disorder: It is sometimes called hypochondriasis or health anxiety, is worrying excessively that you are or may become seriously ill. You may have no physical symptoms.</ul><ul>
•	Post-Traumatic Stress Disorder: It is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event.</ul><ul>
•	Agoraphobia: It is a type of anxiety disorder in which you fear and avoid places or situations that might cause you to panic and make you feel trapped, helpless or embarrassed. You fear an actual or anticipated situation, such as using public transportation, being in open or enclosed spaces, standing in line, or being in a crowd.</ul>
</p><p>Anxiety feels different for every other people ranging from butterflies in your stomach, rapid breathing, a racing heart to experiencing nightmares, panic attacks, trouble concentrating, difficulty falling asleep and painful thoughts or memories that you can’t control. You may have a general feeling of fear and worry, or you may fear a specific place or event. It is important that you know all the ways anxiety can present itself.</p>
<p>Researchers are not exactly sure of on what brings anxiety disorder. Many factors play a role in this. Some of them could be:
<ul>•	Genetics: Anxiety disorder can run in families.</ul><ul>
•	Brain chemistry: Some research suggests anxiety disorders may be linked to faulty circuits in the brain that control fear and emotions.</ul><ul>
•	Substance Abuse: Their use often worsens the case of anxiety disorder.</ul><ul>
•	Medical conditions: Some heart, lung, and thyroid conditions can cause symptoms similar to anxiety disorders or make anxiety symptoms worse.</ul><ul>
•	Childhood sexual abuse: Often abuse like physical, emotional or sexual abuse during childhood is linked to anxiety disorder later in life.</ul><ul>
•	Trauma: Living through a traumatic event increases the risk of PTSD which can cause panic attacks.</ul><ul>
•	Low self-esteem: Negative perceptions about yourself also leads to social anxiety disorder. </ul>
</p><p>A good way to cope up with anxiety is to bring change in your lifestyle. Some of those changes could be:
<ul>•	Meditation</ul><ul>
•	Journaling</ul><ul>
•	Physical exercise </ul><ul>
•	Eating healthy</ul><ul>
•	Getting enough sleep</ul><ul>
•	Always hydrating</ul><ul>
•	Quit alcohol/ drug</ul><ul>
•	Reduce caffeine intake</ul>
</p><p>Some foods like dark chocolate and chamomile tea can also help with your anxiety.
Psychotherapy is also used to help with anxiety disorders. It is a collaborative process, where psychologists and patients work together to identify specific concerns and develop concrete skills and techniques for coping with anxiety. A form of psychotherapy also known as cognitive-behavioural therapy (CBT) is highly effective at treating anxiety disorders. Through CBT, psychologists help patients learn to identify and manage the factors that contribute to their anxiety.
Anxiety disorders can be treated with medication, psychotherapy, or a combination of the two. Some people who have a mild anxiety disorder, or a fear of something they can easily avoid, decide to live with the condition and to not seek treatment.
It’s important to understand that anxiety disorders can be treated, even in severe cases.</p>
Live a happy healthy life!!!!



</h3></h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default EgoWhat
