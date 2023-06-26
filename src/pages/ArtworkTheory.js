import React from 'react';
import Navbar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';


function ArtworkTheory() {
  return (
   <>
   <Navbar/>
  
  <div className=" bg-cover bg-no-repeat bg-[url(./images/pink-ice.jpg)] p-[100px]">
    <div className='flex flex-col items-center justify-center text-center'>
     <h1 className='text-[60px] font-blackHan text-white'>Art Concept:</h1>
     </div>
    </div>

    <div className='flex flex-col p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
    <h2 className='font-semibold text-[30px]'>Art Ideas and Research:</h2>
    <h3 className='font-semibold text-[20px]'>Idea 1: Personal Survey</h3>
    <p className='mb-4'>
       A while ago, when doing research for game design, I cam across an indie
       horror game that really horrified me (which not many horror games
       actually do). I can't find it, though I've found many off-shoots and
       copy-cats. The game is about a stalker.
     </p>
     <p className='mb-4'>
       It's recommended that you play with a headset - so that the game can
       play the sound of someone walking through your house, and knocking on
       your door. It's a survey that asks you questions about your personal
       life, which become increasingly more concerning - asking about whether
       you lock your doors, whether you feel safe, what your sense of hearing
       is like, and who would miss you if you disappeared.
     </p>
     <p className='mb-4'>
       I think it could be fun to explore this concept using the added theme of
       privacy. People don't really think about what information they share on
       the internet and making a survey that asks privacy questions that become
       too intimate could be interesting.
     </p>
     <p className='mb-4'>
       My main concern with this idea is that it's not interesting enough - you
       can play 1000 versions of it on itch.io. When I shared this idea with my
       lecturer and her asssistant, neither seemed excited by this idea at all.
     </p>
     <h3 className='font-semibold text-[20px]'>Idea 2: Obsession Simulator</h3>
     <p className='mb-4'>
       At a previous Wits exhibition, I played a 4th year's "ADHD Simulator"
       game, which served to distract you constantly while you tried to
       complete the main storyline. I don't have ADHD.
     </p>
     <p className='mb-4'>
       But I do have OCD. Through lots of therapy it's become moderate - but at
       one point was very severe. In this idea I would be simulating OCD
       through pop-up ads that prompt the user to do or fix something on the
       page.
     </p>
     <p className='mb-4'>
       On the page itself, would be an article about ignoring compulsions in
       order to get better - which progressively becomes harder to read as the
       user scrolls down the page. Following any of the adds, listening to any
       of the prompts, and even hovering over some ads, would send the user
       right back up to the top of the page.
     </p>
     <p className='mb-4'>
       The lecturer and her assistant were excited by this idea! I do feel on
       the fence about it: I feels like exploiting a mental illness, in a time
       when people self-diagnose of these kinds of articles. I'm worried I
       won't be able to pull it off accurately, and I'm worried about coding
       pop-ups, as I don't really know how.
     </p>

     <h2 className='font-semibold text-[30px]'>Art References:</h2>
     <h3 className='font-semibold text-[20px]'>Thematic References:</h3>
     <h4 className='font-semibold'>Stalker:</h4>
     <ul>
       <li>
         Here's a stalker survey made with Twine:
         <a href="https://nervoussystems.itch.io/a-normal-survey"
           >(nervoussystems on itch.io, A Normal Survey, n/a)</a
         >
       </li>
       <li>
         This survey doesn't give you any choices:
         <a href="https://turkeybear.itch.io/survey"
           >(turkeybear on itch.io, Survey, n/a)</a
         >
       </li>
       <li>
         Doki Doki Literature Club, explores what it's like to have a videogame
         turn on you, and stalk you:
         <a href="https://www.youtube.com/watch?v=ubM_KcgFAJA"
           >(on youtube, Doki Doki Literature Club Plus! (Full Game, No
           Commentary) 2022)</a
         >
       </li>
       <li>
         If you install Google Alarm, an alarm will go off everytime your
         information is sent to Google (spoiler: the alarm is basically
         non-stop).
         <a href="https://jamiedubs.com/googlealarm/"
           >(Jamie Dubs, Google Alarm, 2010)</a
         >
       </li>
     </ul>

     
     <p className='mb-4'>
       I really like each of these references, but I think Doki Doki is the
       only one that really stands out to me as an artwork but I just have no
       idea how I would be able to pull something like that off. The main
       kicker of Doki Doki is that you've inadvertantly given the software
       enough access to your desktop to find the name you registered your
       computer account under.
     </p>
     <p className='mb-4'>
       I don't think I could really achieve something like that without hitting
       a wall. I'm not interested in writing a whole story and I can't think of
       a way to get this to be internet artwork in the sense that I can't find
       a way to make it rely on the internet to exist.
     </p>

     <p className='mb-4'>
       While Stalking and Privacy are connected, I think it's important to
       differentiate between them. So below are the privacy references:
     </p>

     <h4 className='font-semibold'>Privacy:</h4>
     <ul>
       <li>
         If you install Google Alarm, an alarm will go off everytime your
         information is sent to Google (spoiler: the alarm is basically
         non-stop).
         <a href="https://jamiedubs.com/googlealarm/"
           >(Jamie Dubs, Google Alarm, 2010)</a
         >
       </li>
       <li>
         Multiple voice-AI programmes can use a few voice clips to impersonate
         you. Which could be cool for having the user's own voice play back at
         them.
         <a href="https://www.youtube.com/watch?v=JruKb-Zeze8"
           >(on youtube, Change Your Voice to ANY CELEBRITY with This Free AI,
           2023)</a
         >
       </li>
       <li>
         fbFaces is a webcrawler that searches public social media profiles,
         copies information and then proceeds to do the same to every "friend"
         they have on that account.
         <a href="https://www.triangulationblog.com/2011/08/fbfaces.html">
           (Roeder and Pirnay, fbFaces, n/a)</a
         >
       </li>
     </ul>

     <h4 className='font-semibold'>OCD:</h4>
     <ul>
       <li>
         This is a comic book page I made two years ago, about feeling dirty.
         <a href="https://www.instagram.com/p/CE_rcLTjnM0/">
           (brendonmustdie on instagram, Untitled, 2020)</a
         >
       </li>
       <li>
         This is a comic book chapter on obsession.
         <a href="https://www.instagram.com/p/CH71EWWD3HG/">
           (brendonmustdie on instagram, My Teeth Are Dirty, 2020)</a
         >
       </li>
       <li>
         This OCD simulator focuses on "keeping thoughts away" which is
         sometimes what therapy for OCD feels like.
         <a href="https://dogucag.itch.io/ocd-simulator"
           >(dogucag on itch.io, ocd simulator, n/a)</a
         >
       </li>
     </ul>

     <p className='mb-4'>
       A huge part of this project is relying on my own experiences and I think
       there's really very few resources that I want to draw inspiration from
       because it's really about explaining what OCD feels like to me. I'm also
       hesitant to include any of my ACTUAL obsessions because I think it would
       be triggering - not just for me, but for anyone suffering with OCD. I
       might have to slap a huge trigger warning across the front of my
       website.
     </p>
     <p className='mb-4'>
       I find a kindling with ADHD simulators as well - as they tend to be
       about how hard it is too focus in your own head. OCD makes it hard for
       me to focus on things outside of my head - by constantly distracting me
       with one, or a few repetitive thoughts. So I thought I'd look at some
       other simulators.
     </p>

     <h4 className='font-semibold'>Mental Illness or Disorder simulation:</h4>
     <ul>
       <li>
         This ADHD simulation tiktok has overlapping voice clips to create
         distraction:
         <a
           href="https://www.reddit.com/r/Damnthatsinteresting/comments/11m60ma/adhd_simulator/"
           >(kodylukens on TikTok, ADHD SIMULATOR, 2023)</a
         >
       </li>
       <li>
         This game (I think is made by someone in our degree!) uses twitch and
         storytelling to simulate adhd:
         <a href="https://wildlyinnocuous.itch.io/adhd-simulator"
           >(wildlyinnocuous on itch.io, adhd simulator, n/a)</a
         >
       </li>
     </ul>

     <h2 className='font-semibold text-[30px]'>Brainstorming:</h2>
     <h3 className='font-semibold text-[20px]'>Decision:</h3>
     <p className='mb-4'>
       I've decided to go with my OCD idea, pretty much because I think it
       resonates deeper with me and also because my idea is to have a page on
       my website where there are continous pop-ups that can't be stopped.
     </p>
     <p className='mb-4'>
       This is not the only idea that I've brainstormed but I think it's the only
       one worth mentioning. I am going to have to go through some personal
       journals to find my most recurring obsessions to put them in the popup
       text - but I don't know whether that will come in to play for just the
       prototype.
     </p>
     <h3 className='font-semibold text-[20px]'>Technical Research:</h3>
     <p className='mb-4'>
       I really struggled to conceptualize how to make pop-ups: that was really
       my biggest concern. I spent a lot of time on the internet, just trying
       to find one that works. I didn't really struggle with anything else or
       find it necessary to research it, when my main technical component is
       one thing.
     </p>
     <p className='mb-4'>
       I looked into different kinds of pop ups - One of the key
       characteristics of pop-ups is that they open in new tabs. And akso that
       adblockers can stop them. When we go over to using React, I will find a
       better way to do this. But I decided to go for Modals, because they
       would cover the screen, the way I wanted.
     </p>


<Footer/>







    </div>
   </>
  );
}

export default ArtworkTheory;

