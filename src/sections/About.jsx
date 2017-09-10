import React from 'react';
import gravatar from 'gravatar';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

const GRADUATION_DATE = '2010-05-01';

const profilePicture = gravatar.url('victorhqc@gmail.com', {
  s: 400,
});
const timeSinceDeveloper = distanceInWordsStrict(new Date(), GRADUATION_DATE);

const About = () => (
  <section>
    <img src={profilePicture} alt="Victor Quiroz Castro" />
    <h2>Victor Quiroz Castro</h2>
    <h3>Web developer for {timeSinceDeveloper}</h3>
  </section>
);

export default About;
