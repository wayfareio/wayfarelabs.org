---
title: Home
date: 2016-02-26 17:15:00 -08:00
position: 0
headline: Let's build the world's best future together.
slogan: A startup incubator for creation-restoring movements.
benefits:
  description: Wayfare Labs offers a unique program for nonprofit and social good
    startups. We provide space and support to Christ-following founders so that they
    can make their vision a reality. Launch and grow your organization with us.
  list:
  - title: Practical Application
    description: Solidify your business model, raise funds, build an audience, grow
      your organization, and achieve your vision.
  - title: Emotional Support
    description: Journey alongside experienced experts and passionate entrepreneurs
      who support you throughout the program.
  - title: Spiritual Guidance
    description: Learn from other Christ-followers and apply spiritual insights and
      practices into your daily startup life.
layout: home
---

<!-- Banner -->
<section id="banner">
  <div class="content">
    <div class="inner">
      <header>
        <h2>{{ page.headline | default: page.title }}</h2>
        <p>{{ page.slogan }}</p>
      </header>
      <ul class="actions">
        <li><a data-scroll-to="#one" class="button huge">Learn More</a></li>
      </ul>
    </div>
  </div>
</section>

<!-- One -->
<section id="one" class="wrapper">
  <div class="inner">
    <p>{{ page.benefits.description }}</p>
    <ul class="features">
      {% for benefit in page.benefits.list %}
        <li>
          <h3><span>{{ benefit.title }}</span></h3>
          <p>{{ benefit.description }}</p>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

<!-- Two -->
<section id="two" class="wrapper cta">
  <div class="inner">
    <header>
      <h2>Partner with us to launch more creation-restoring movements</h2>
      <ul class="actions">
        <li><a href="https://wayfarelabs.givingfuel.com/general-fund" class="button big">Give Now</a></li>
      </ul>
    </header>
    <p>Wayfare Labs is a 501(c)(3) charitable organization<sup>*</sup>. We thrive based on your generosity. Has God called you to support Wayfare Labs? Choose from some of our options or give a custom amount. We appreciate your generosity and stewardship!</p>
  </div>
</section>

<!-- Three -->
<section id="three" class="wrapper">
  <div class="inner">
    <header class="major">
      <h2>Community matters. Let us introduce you to ours.</h2>
      <p>One of the core components of our program is immersing founders in Christ-centered community. Here are some of the ways you'll engage and interact with our community.</p>
    </header>
    <div class="posts">
      <section class="post">
        <div class="image"><img src="/images/dinners.jpg" alt="Dinners"></div>
        <div class="content">
          <h3>Founder Dinners</h3>
          <p>Every Tuesday night, Labbers have an intimate dinner with a Christ-following founder. Here are some of the guests we've hosted: Christine Nolf, founder of Mika; Jessie Simonson and Alli Talley, co-founders of 31 Bits; Kohl Crecelius, CEO and co-founder of Krochet Kids International; and many more...</p>
        </div>
      </section>
      <section class="post">
        <div class="image"><img src="/images/workshops.jpg" alt="Workshops"></div>
        <div class="content">
          <h3>Workshops</h3>
          <p>Taught by startup founders and experts in their respective fields, our workshops cover key topics that startup founders need to address, like:
          Mission and Vision Formation; Customer Development; Fundraising; Communication; Entity Formation; and more...</p>
        </div>
      </section>
      <section class="post">
        <div class="image"><img src="/images/coaching.jpg" alt="Coaching"></div>
        <div class="content">
          <h3>Coaching</h3>
          <p>Each startup receives a coach who consults with them throughout the course of the program. If you're struggling with a specific topic, these coaches will give you the encouragement and guidance you need to push through it.</p>
        </div>
      </section>
      <section class="post">
        <div class="image"><img src="/images/advising.jpg" alt="Advising"></div>
        <div class="content">
          <h3>Advising</h3>
          <p>Many of the experts in our network of advisors offer unique advising sessions specifically designed for program participants.</p>
        </div>
      </section>
    </div>
  </div>
</section>
