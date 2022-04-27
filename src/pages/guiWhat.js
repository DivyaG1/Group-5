import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
import { Link } from "gatsby"

const GuiWhat = () => {
  return (
    <Layout>

      <div className="container-fluid  py-5">
        <Link to="/guilt">
        <h1 class="py-5  display-2 border-bottom align-items-center fw-bold text-center  " style={{
                fontFamily: "Bradley Hand, cursive",
                textAlign: "justify",
                color: "rgb(11, 39, 88)",
              }}>
          Guilt
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
              
              <h3 className="display-7 fw-bold "><p>Guilt is difficult to pin down, but we all feel it. You may feel guilty for a thought you’ve had or something you’ve done. You may also feel guilty that your thoughts and actions don’t coincide with your culture, your family, or your beliefs. While your associations with guilt may be negative, it does have a positive function.

Oftentimes, guilt is meant to help you make a morally upright decision. If your deeds provoke negative outcomes or emotions, guilt will later inform you that it was the wrong thing to do, and doing it again will make you feel guilty. You will often see guilt and shame in the same conversation because they help you make moral decisions.

Excessive guilt, however, is when guilt turns sour. It can lead to anxious obsessions, depressive tendencies, and physical symptoms if it’s not addressed. While most guilt is internal, it is often conditioned by external factors — which means with the right habits, it can be unlearned. To unlearn excessive guilt, you must know the signs. 

Guilt is intertwined with other disorders, and separating them can be a challenge. Understanding guilt’s role in disorders like obsessive-compulsive disorder ( OCD) and depression, along with its physical symptoms, can help you notice its signs and learn how to overcome excessive guilt.

Causes

There are a number of different factors that can contribute to a guilt complex. Some of these include:

<ul>●	Anxiety: If you have a great deal of anxiety, you may be more likely to negatively assess your own actions in ways that lead to feelings of guilt. </ul>
<ul>●	Childhood experiences: Children who are raised in households where they are made to feel that they have done something wrong, have something to hide, or are responsible for problems may be left with lingering feelings of guilt.</ul>
<ul>●	Culture: If you find yourself doing things that are in opposition to the cultural norms you were raised with, you may experience guilt even if you no longer believe in or support those norms.</ul>
<ul>●	 Religion: Some religious traditions rely on feelings of guilt as a way to indicate that a person has done something wrong.</ul>
<ul>●	 Social pressure: If you feel that other people are judging you for the things that you have done, you may be left with feelings of guilt and remorse.</ul>
</p>
<h2>TYPES OF GUILT:</h2><p>Research connecting guilt and psychology doesn’t always agree. Some studies have found that guilt may help protect people from emotional distress. Others suggest guilt, especially excessive guilt, contributes to emotional and mental distress.

In general, there are three different types of guilt.

Reactive guilt: Reactive guilt happens when a person believes they have acted against either their own personal beliefs of what is morally good or the standards society has for acceptable behavior.

Anticipatory guilt: This guilt is the result of thinking about acting against personal moral standards or the standards of society. A person may choose not to take a certain action because they know it is wrong or believe it may hurt others.

Existential guilt: This guilt can be more complicated. Existential guilt can describe a person’s feelings for general injustice, or the idea that “Life isn’t fair.” It can also describe the guilt a person feels for the negative impact they may have on the lives of others.

Some researchers further divide guilt into two categories. These categories can be considered separately from the above types of guilt.

Maladaptive guilt: This kind of guilt often has a negative impact on life. This guilt might include chronic guilt (guilt that relates to shame) and other guilt that leads to mental or emotional distress.

Adaptive or pro-social guilt: This kind of guilt is believed to be helpful, as it relates to a person’s understanding of wrongdoing and responsibility.



How to forgive yourself when you’ve done something wrong:
Forgiving yourself after offending someone or doing them wrong takes self-reflection and commitment to make changes.

<ul>●	Accept and admit to yourself what you did wrong.</ul>
<ul>●	Acknowledge that you regret your decision and wish you had acted differently.</ul>
<ul>●	Consider why you made the mistake. Were you tired, jealous, desperate, angry, etc.?</ul>
<ul>●	Ask yourself how you wish you had handled the situation differently and commit to responding to similar situations differently in the future.</ul>
<ul>●	Try to make amends with the people you hurt. This may not always be possible if they are not willing to cooperate – all you can do is your part. Offer a genuine and sincere apology without defending yourself, accept responsibility and do what is reasonable to make it right.</ul>
<ul>●	Make peace with yourself. Choosing to hold onto your guilt forever will only make a bad situation worse over time. Think about the mistake long enough to learn from it, but move past it.</ul>
</p>
<h2>Treatment:</h2><p>
It is important to get help in order to protect your mental well-being and quality of life. If you are experiencing symptoms of guilt that are interfering with your daily life and causing distress, talk to your doctor or a mental health professional. There are different treatment options that may help you cope with a guilt complex.

Medications
Your doctor may prescribe antidepressants or anti-anxiety medications to help you cope with symptoms of depression or anxiety, but they may also recommend psychotherapy.
Talk to Someone
Sharing your feelings with a close friend can sometimes be helpful. Social support can play a pivotal role in coping with difficult emotions, so maintaining your relationships with friends and loved ones is important.

If you struggle to talk to your loved ones about your feelings of guilt or if they are not providing the type of support you need, discussing your feelings with a mental health professional can also be helpful. Traditional face-to-face therapy sessions are one option, but online therapy may also be a convenient option that you might want to consider.It is when these feelings become persistent and overwhelming that it is important to seek professional help. Talk to your doctor or a mental health professional if you are experiencing symptoms of excessive guilt or other symptoms of depression. 

</p>
</h3></h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default GuiWhat
