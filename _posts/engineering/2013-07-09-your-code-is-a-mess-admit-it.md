---
layout: post
title: Your Code is a Mess – Admit It
oldLink: /post/55042782712/your-code-is-a-mess-admit-it
author: Tom
category: engineering
picture: tom_f.png
twitter: Thom_Fuller
tags:
- code quality
- cto
---

### Step 1: Admit you have a problem

Let me ask you a question: does this look familiar to you?

    # WARNING: UGLY CODE AHEAD. FIX ME LATER!!!

    # I cannot think of a better way to implement this right now…

How about this: how many times in your code do you have a function that handles single quotes?

Or this: do you have code on your site that is so convoluted only one or two guys know how to modify it?

If you answered yes to either of these question, *you have a problem*.

At Next Jump, we’ve built an awesome ecommerce marketplace just like a B2B Amazon, but never competing with any retailer and instead having partnered with over 30,000 merchants. In addition, we built a unique direct marketing channel, giving us the largest access to people with jobs, by partnering with over 90,000 HR-departments to reach corporate employees at work.

But here is a “dirty secret” of Internet coding: everyone has a pile of spaghetti code in their repository.  We have ideal patterns, maybe a core of original goodness … but over time the Law of Entropy takes its toll.

Never mind that this is all compounded by realities of the tech space:

- An insatiable appetite for speed, speed, speed - very fast iteration cycles.  A/B tests left abandoned.  Old features just sitting there
- Continuous releases becoming the norm at many shops. Adding new bits of code that never gets removed
- Lots of super smart, young engineers moving fast adding code for the first time to large repositories with loose rules
- 40% turn-over is the norm.  New coders adding their bits “their way” duplicating previous functionality

This is especially true if you are successful and making money.  If your business model is actually generating meaningful revenue and taking off, you will make compromises to get clients, move fast, solve critical problems as you go. You are building the ship in mid air while you are flying. And it all adds up to success with side of spaghetti code.

It’s a problem.  You have a shaky foundation.  Maintenance is hard.  Adding new features gets more complicated over time.  Edge cases abound. 

And, by the way, the areas that had to move the fastest to innovate suffer the most. In our case, for example, this is particularly true for core pieces of our platform, like our unified cart technology and our WOWPoints Statement.

This spaghetti becomes a limit on how well your business can do by harming your UX and slowing innovation.

### Step 2:  Build your platform to handle rapid change

We have been struggling with this problem for years.   We have tried a lot of dead-ends.   Re-factor initiatives.   Code-a-thons.  We even stopped developing all new functionality for six months and rewrote EVERTHING (imagine convincing your CEO to do that).

These things solved the problem temporarily.  But we always ended back in the same place – until we launched Project Enterprise (as in the starship Enterprise).

Project Enterprise is a concerted effort to strengthen our foundation, and ready it for growth. The key concept behind Enterprise is to architect the system to expect constant change.  It is not really about cleaning up duplicate code and removing bugs. It is about building systems that let us quickly and systematically identify weaknesses  and problems in our code base so we can fix them as they occur vs. incurring never ending code debt. 

We want our platform to be a system where we can run UX experiments at scale, and Enterprise lets us do that, move fast knowing that an intelligent system is helping us clean up and detect bad problems.  The core of it is the dashboard, that exposes data on the health of system, quantity & quality of the code, and customer experience problems in real-time.

After one month, here are some stats:

- We added 1 MM lines of NEW code to our systems in the past 12 months … we have removed 350K of it
- Our customer service inbounds dropped by 25%
- Both of these directly impact put customer experience and revenue.

Where are we headed next with Enterprise? We want to bake it into every pod’s APIs (pods=each of our engineering teams). As our pods publish APIs to disseminate their products and services, so that other internal and external customers can interact with them, we want the APIs plugged into Enterprise for easy plug-and-play monitoring.

Most companies have not even articulated they have this issue – let alone trying to solve for it, and those companies who do, like LinkedIn admitting the collapse of their code post IPO in 2011, are better companies now because of it. So, we will continue to post updates on our successes and failures as we to iterate on Enterprise. 
