import React from 'react';

const Blog = () => {
    return (
        <div className="m-3 text-black">
            <h3 className="text-center my-4 text-4xl font-bold text-pink-600">
                Blog Pages
            </h3>

            <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    Q:What are the different ways to manage a state in a React application?
                </h3>
                <p className="text-lg font-medium">
                    Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                    In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
                </p>
            </div>

            <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    Q: How does prototypical inheritance work?
                </h3>
                <p className="text-lg font-medium">
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.
                </p>
            </div>

            <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    Q: What is a unit test? Why should we write unit tests?
                </h3>
                <p className="text-lg font-medium">
                    A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                    Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.


                </p>
            </div>

            <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    Q: React vs. Angular vs. Vue?
                </h3>
                <p className="text-lg font-medium">
                    This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                    Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                    If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.
                </p>
            </div>
        </div>
    );
};

export default Blog;