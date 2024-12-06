import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex flex-col gap-5 px-20 py-12 text-white opacity-80 font-sans font-thin text-lg'>
            <h1 className='font-bold text-2xl'>About Us</h1>
            {/* <div className='flex flex-col gap-5'> */}
            <p>
                Many people find personal finance overwhelming. Between managing budgets, tracking recurring payments,
                and figuring out how to invest, it often feels like there are more questions than answers. That’s why my team
                and I are building Hourglass, a personal finance app that simplifies money management using AI, for our final
                project in Penn's HCI course.
            </p>
            <p>
                Hourglass is designed to guide users through their financial journey, no matter their level of experience.
                Whether tracking spending, forecasting budgets, or offering investment advice, the app provides a clear,
                easy-to-use platform. The highlight? A built-in AI chatbot that users can talk to about their specific financial
                questions, getting tailored insights and guidance in real time.
            </p>
            <p>
                We’re still in the prototyping stage, but designing and developing Hourglass has already been a transformative
                learning experience. Here’s a closer look at what we’re working on, the challenges we’ve faced, and where we’re headed.
            </p>

            <h2 className='font-bold text-lg'>What Is Hourglass?</h2>
            <p>
                Hourglass is an app that aims to make personal finance more accessible, especially for those who lack the
                knowledge or tools to start.
            </p>
            <p>
                Our prototype currently focuses on three key areas:
            </p>
            <ul className='list-disc pl-12'>
                <li>Budget & Spending Tracking: Users can track expenses, view spending trends, and forecast their financial future.</li>
                <li>Personalized Dashboard: A one-stop view of recurring payments, budgeting progress, and trending expenses, tailored to the user’s habits.</li>
                <li>AI Chatbot Support: An interactive chatbot that answers questions like “How much did I spend on food last month?” or “What’s the best way to save for a new car?”</li>
            </ul>
            <p>
                These features are just the beginning. As part of the prototyping process, we constantly refine and test them.
            </p>

            <h2 className='font-bold text-lg'>The Team Behind Hourglass</h2>
            <p>
                Building Hourglass has been a collaborative effort, and our diverse team has brought unique strengths to the table:
            </p>
            <ul className='list-disc pl-12'>
                <li>Kanika Kumar—With her design expertise, Kanika has been instrumental in creating an intuitive and approachable interface in Figma, even for users who might feel intimidated by financial tools.</li>
                <li>Emily Shang—As a CIS student, Emily has been working on the app’s technical backbone, including coding the AI chatbot and implementing the dashboard.</li>
                <li>David Lee—With his business background, David ensures the app’s features address real user needs and are grounded in solid financial strategies.</li>
            </ul>
            <p>
                We’ve combined design, engineering, and business perspectives to create a prototype that addresses real-world pain points.
            </p>

            <h2 className='font-bold text-lg'>The Prototyping Journey</h2>
            <p>
                Prototyping Hourglass has been a journey of exploration, problem-solving, and iteration. Here’s how we’ve approached it so far:
            </p>

            <h3 className='font-semibold'>1. Understanding the Problem</h3>
            <p>
                We started by talking to potential users to understand their biggest struggles with personal finance. Some of the
                most common challenges we heard included:
            </p>
            <ul className='list-disc pl-12'>
                <li>Lack of clarity about where money is being spent.</li>
                <li>Difficulty sticking to a budget.</li>
                <li>Feeling overwhelmed by the complexity of investing.</li>
            </ul>
            <p>
                These conversations shaped our priorities for the prototype, ensuring that Hourglass focuses on solving real problems.
            </p>

            <h3 className='font-semibold'>2. Designing the Experience</h3>
            <p>
                Kanika has led the effort to design a clean, user-friendly interface that feels approachable. Her goal has been to
                create something visually appealing but not overwhelming, ensuring users can navigate the app easily.
            </p>
            <p>
                Our prototype includes a personalized dashboard where users can track their budgets, recurring payments, and
                spending patterns in one place. We’ve also incorporated visual elements like charts and spending breakdowns to
                make the data easy to digest.
            </p>

            <h3 className='font-semibold'>3. Conducting a Statistical Test for UI Feedback</h3>
            <p>
                During the development of the AI chatbot feature, we wanted to ensure that users could easily navigate the interface
                and understand how to interact with the chatbot. To test this, we conducted a statistical test with 20 users, where
                they completed a series of tasks using the AI feature.
            </p>
            <p>
                We split the group into two cohorts: one tested the initial design, and the other used a revised version based on
                earlier feedback. The results were illuminating. Users in the second group completed tasks 30% faster and reported
                a 40% higher satisfaction rate with the revised design. This confirmed that minor adjustments to the UI—such as
                more explicit prompts and a more prominent chatbot icon—significantly improved usability.
            </p>
            <p>
                This process underscored the importance of user testing in shaping a functional and intuitive design. It also showed
                us how data-driven insights could refine our approach and make a meaningful impact.
            </p>

            <h3 className='font-semibold'>4. Building the Technology</h3>
            <p>
                Emily has been working on the technical aspects, particularly the AI chatbot, which is the heart of Hourglass. The
                chatbot is designed to provide clear, actionable advice based on users’ financial data. For example, if a user asks,
                “How can I cut my expenses?” the chatbot can analyze their spending trends and suggest practical changes.
            </p>
            <p>
                The technical challenges have been significant, especially when training the chatbot to handle nuanced financial
                questions. But even at this early stage, we’re seeing promising results.
            </p>

            <h3 className='font-semibold'>5. Testing and Iterating</h3>
            <p>
                At this stage, we’re testing the prototype with a small group of beta users to gather feedback. Their insights have
                been invaluable in identifying what works and what needs improvement. For example, we’ve already made changes to
                the chatbot’s tone and the way budget forecasts are displayed based on user suggestions.
            </p>
            <p>
                Testing has been an iterative process, and we’re committed to refining the prototype until it feels seamless and intuitive.
            </p>

            <h2 className='font-bold text-lg'>Challenges So Far</h2>
            <p>
                Prototyping has been a rewarding process, but it hasn’t been without its challenges:
            </p>
            <ul className='list-disc pl-12'>
                <li>Balancing Simplicity and Functionality: One of our biggest hurdles has been designing features that are powerful enough to provide value but simple enough for anyone to use.</li>
                <li>AI UI interaction has required a lot of trial and error.</li>
                <li>User Feedback: While feedback is essential, it can also be overwhelming at times. Everyone has different needs and preferences, and it has been challenging to balance these while remaining true to our vision.</li>
            </ul>
            <p>
                Despite these obstacles, each challenge has been an opportunity to learn and improve.
            </p>

            <h2 className='font-bold text-lg'>Final Thoughts</h2>
            <p>
                Building Hourglass has been a journey of discovery and growth. While we’re still in the prototyping stage, we’re
                excited about our progress and the potential impact this app could have.
            </p>
            {/* </div> */}
        </div>
    );
};

export default AboutUs;
