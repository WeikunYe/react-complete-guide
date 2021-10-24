# Projects for React - The Complete Guide

## Project 5 Handling Forms

### Project Info
- [Course Link](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- [Git Repo](https://github.com/WeikunYe/react-complete-guide-form)
- [Live Demo](https://react-the-complete-guide-pro1.herokuapp.com)

### Notes
#### useState vs useRef for input values
- If only mutate value once, for example validating form values during submission, useRef is better.
- If need the form values for instant validation on every key stroke, useState is better.
- If want to reset the user input, useState is better, because using useRef to manipulate input values will directly manipulate the DOM. React should be the only thing to manipulate the DOM not vanilla JavaScript.


### All Projects
- [Expenses Editor](https://react-the-complete-guide-pro1.herokuapp.com)
- [To Do List](https://react-the-complete-guide-pro2.herokuapp.com)
- [Food Order App](https://react-the-complete-guide-pro3.herokuapp.com)