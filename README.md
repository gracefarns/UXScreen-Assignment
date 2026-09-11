# Product Description

This app lets college students enter their schedule and assignments and outputs tasks they can realistically complete during gaps between their classes. The goal is to help students use these random breaks more efficiently so they have more free time later in the day.

## 1. Need, Persona, Capability, and Value

* **Need:** College students have spaces between classes that they want to use efficiently, but they may have a hard time figuring out what they can realistically get done in that amount of time.
* **Persona:** A full-time college student with spread-out, in-person classes 2–4 times a week.
* **Primary Capability:** Find the best task or tasks to accomplish in the amount of time the student has available.
* **Fundamental Value:** **Efficiency.** Filling random breaks with homework or other tasks can free up time later in the day.

## 2. The Three Screens

### Screen 1 — Choose Your Free Time

**Job:** Let the user choose how much time they have available and begin the process of connecting their schedule.

**Why it earned a slot:** The amount of free time is the main input the app needs to create a realistic plan. I wanted this to be the first thing the user sees so the app is straightforward.

**Design question:** Is it clear what this app does and what the user needs to do to use it?

### Screen 2 — Today's Schedule

**Job:** Show the user's classes and homework so they can see what information is being used to create their plan.

**Why it earned a slot:** The user needs to understand that the recommendation is based on their actual schedule and assignments instead of being a generic to-do list.

**Design question:** Is it obvious what information the app is using to create the plan?

### Screen 3 — Your Gap Plan

**Job:** Give the user a short list of tasks that realistically fit into their available time.

**Why it earned a slot:** This screen delivers the primary capability and value of the app. It turns the student's free time into an actionable plan.

**Design question:** Is the plan useful and concise enough for a student with limited time?

## 3. Design Question Plan

| Area           | Question                                                                                                                                                     | Prediction                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Need**       | “Think about the last time you had a random gap between classes. What did you end up doing with that time?”                                                  | I predict that students will say they sometimes spend the time on their phone, getting food, or trying to decide what homework to work on. This prediction is based on Screen 1 focusing immediately on the amount of free time the student has.                                                                   |
| **Value**      | “If an app could automatically tell you what schoolwork you could realistically finish before your next class, what would be most useful about that to you?” | I predict that students will say it would help them be more efficient or save time later. This is based on Screen 3 giving them tasks that fit within their available time instead of making them decide what to work on.                                                                                          |
| **Persona**    | “How often do you have gaps between your classes, and what do you normally do during them?”                                                                  | I predict that students with spread-out classes will have these gaps multiple times a week and will sometimes use them for homework. This prediction is based on Screen 2 showing multiple classes throughout the day with gaps between them.                                                                      |
| **Capability** | “I'm going to show you this first screen for five seconds. After I hide it, tell me what you think this app does.”                                           | I predict that users will understand that the app helps them use a certain amount of free time, but they may not immediately realize that it specifically creates a homework plan around their class schedule. This is based on the landing screen emphasizing the amount of free time more than the final output. |

## 4. Design Justification and First Read

### Landing Screen

At first glance, the landing screen signals **efficiency** by being very simple and immediately asking, “How much time do you have?” The number picker is the largest element on the screen, which creates a clear **visual hierarchy** around the main input.

However, the primary capability is not completely obvious without reading the smaller text. A new user may understand that the app helps them use their free time but may not immediately know that it recommends homework based on their schedule. This is something I would specifically look for with my five-second capability question.

I think the elements on the landing screen earn their place. The time picker is the primary focus, followed by the “Import my schedule” button. There are not extra menus, images, or features competing for attention. This follows **progressive subtraction** because I tried to keep only what the user needs to start the main task.

### Grouping and Gestalt Principles

On Screen 1, the plus and minus controls are placed directly around the number of minutes. **Proximity** groups these controls together and makes it clear that they all control the amount of available time.

On Screen 2, the classes are visually grouped together in one section, while the to-do is placed in a separate section. This uses **common region** and **proximity** to communicate that the classes are one type of information and assignments are another.

On Screen 3, each task name and its estimated time are placed together in a row, while all of the recommended tasks are contained within the same area. This also uses **proximity and common region** to make the plan easy to scan quickly.

### Staying on Mission

Screens 2 and 3 stay focused on the main capability. Screen 2 shows the information needed to make the recommendation, and Screen 3 shows the actual recommendation. I intentionally did not add unrelated features because the goal of the prototype is to test whether students understand and value the core idea.

Screens 2 and 3 also include a Home link, so the user can return to the landing screen without having to use the browser's back button.

## 5. AI Revision and Before/After

The AI-generated version gave me a starting point for the three screens, but I made revisions after looking at whether the interface clearly communicated the primary capability.

**Before:** 
![Initial Screen 1](screenshots%20of%20screens/screen1.png) ![Initial Screen 1](screenshots%20of%20screens/screen2.png) ![Initial Screen 1](screenshots%20of%20screens/screen3.png)

**After:** 
See site by visiting this link:
https://ux-screen-assignment-99cg-nuylsuji6-grace-880b.vercel.app/

One specific issue with the initial design was that there wasn't consistent navigation nor was there any information other than a minute incrementor and an "import schedule" button. This affected consistency with the navigation along with signaling because it didn't clearly show the user the reason it needed your time and schedule.

I changed the first screen to say "How much time do you have? We'll find the best use for your time." so that users could clearly understand the usage of the app is to find ways for them to fill their time. This change was motivated by my design question: “I'm going to show you this first screen for five seconds. After I hide it, tell me what you think this app does.”
