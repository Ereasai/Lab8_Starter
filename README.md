# Lab 8 - Starter
### Question Answers
1) I would put my automated tests **(1) within GitHub Actions** because we want the tests to run in our CI pipeline. When we push any code into our repo, it should run basic tests that ensures that all the parts of the code is exhibiting the desired behavior.

2) **no**. Testing the smaller parts of the code is for the unit tests.

3) **no**. I would use E2E testing. This is because the message feature isn't an isolated test on a small part of code or a function. The message function is probably an interaction between many parts of the code. So I would tests the act of sending a message to a user results in the other user recieveing the message, rather than checking if the code is doing the right thing. In other words, I'm testing the the "bigger picture" of sending a message, leading to that message being receieved, etc, i.e. end to end testing.

4) **no**. It is specified that "max message length" is a feature. So it requires testing it in a higher lever. i.e. the tester should attempt to put in text longer than 80 characters and see if the entry box only accepts the first 80 characters that has been entered. 

