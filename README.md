# React Todo App
This is a todo application built with React, Redux, and SCSS.<br/>

This application is one of the challenges on [Frontend Mentor](https://www.frontendmentor.io/) which provides the users with the overview of the application and its design.<br/>
[Here](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW) is the challenge for this project.

### Design
Here are provided snapshots by Frontend Mentor.  Based on these snapshots, I implemented these designs.
<figure>
  <figcaption style="text-align:center">- Desktop design light version</figcaption>
  <img src="https://user-images.githubusercontent.com/51708229/132077335-f4993fd4-ca68-4e28-9b1e-0815b03ec240.jpg" alt="desktop-design-light" style="width:100%">
</figure>

<figure>
  <figcaption style="text-align:center">- Desktop design dark version</figcaption>
  <img src="https://user-images.githubusercontent.com/51708229/132077339-e623cfd8-972f-4afb-8a88-f0368e314061.jpg" alt="desktop-design-dark" style="width:100%">
</figure>

<p>- Mobile design light & dark version</p>

![mobile-design-light](https://user-images.githubusercontent.com/51708229/132077340-519c6449-4020-491b-a08e-fadf86be818e.jpg)
![mobile-design-dark](https://user-images.githubusercontent.com/51708229/132077344-fb422265-8c42-4786-9800-52fbfc6f3365.jpg)


<figure>
  <figcaption style="text-align:center">- Active state</figcaption>
  <img src="https://user-images.githubusercontent.com/51708229/132077570-e8f0bece-5b14-47b5-b9f8-a375a1069fd8.jpg" alt="active-states-light" style="width:100%">
</figure>


## Project Status
This application is done with functioning part.<br/>
However, it has a issue which is it gets a screen flicker when re-ordering todo items.<br/>


## Project Result
![スクリーンショット 2021-09-03 20 13 46](https://user-images.githubusercontent.com/51708229/132080636-5b78013d-8f86-4bc6-91ee-d1009c3feceb.png)
![スクリーンショット 2021-09-03 20 14 02](https://user-images.githubusercontent.com/51708229/132080638-e6718365-b38b-442b-8d95-3cf0948800f3.png)
![スクリーンショット 2021-09-03 20 11 17](https://user-images.githubusercontent.com/51708229/132080591-177f7030-3a66-4b75-8dad-515d46983cd4.png) ![スクリーンショット 2021-09-03 20 10 20](https://user-images.githubusercontent.com/51708229/132080592-ee4d3751-50aa-450e-ae4a-1aadba61ec75.png)

### Demo
![react-todo-app-demo-min](https://user-images.githubusercontent.com/51708229/132109586-59830aee-a089-4867-a578-c36448afe233.gif)

### Production Site
https://react-todo-app-snowy.vercel.app/


## Installation and Setup Instructions
Clone down `main` repository. You will need `npm` and `node` installed grobally on your local machine.

Installation:

`npm install`

To start a server:

`npm start`

To visit the app:

`localhost:3000`


## Reflection

I set a week timeframe for this personal project.  This was a challenge for myself to be able to command `redux` from scratch.<br/>
Before I started to work on this, I had been in a “tutorial hell”.  To get out of the hell, I decided to build this application without referring to any other source codes or a tutorial video. (I believe there are some tutorial videos about this particular challenge since Frontend Mentor is getting popular!)

I started this process by putting the following command  `npx create-react app react-todo-app --template redux`, which is creating a redux + plain JS boilerplate. Also, I installed `sass` and `node-sass` to utilize SASS for styling.

Since I’m still learning and in the process of getting used to `redux`, figuring out which one should be a global state was very tough overall.<br/>
There are main challenges I had on this project.<br/>

1. For sorting all todos with buttons, it seems like I need to have a local state that can store all todos to be shown each time. This causes a lot of re-renders.
I’m still not sure this is the right way to sort items because I don't feel that I take advantage of having a global state.  (I need to try different ways.)

2. The sorting buttons’ layout looks quite different in between a mobile and a desktop version.  One has an independent section and the other sits inside of the last `div` of the list.  I realized that I can’t control this with CSS, so with `react-responsive` I could control which element should be rendered based on the screen size.

3. I’d never tried to implement a drag and drop feature before this. I needed to do some research about this.  First I tried to implement this with only hooks but it was a little complicated and hard for me to understand how it works.  Due to this short timeframe I decided to rely on `react-beautiful-dnd`.  I still need time to master how to use this, but at least I could manage to implement a drag and drop feature.

There are some rooms to improve on this project’s code.<br/>
As I mentioned in the “Project Status” section, there is still a problem about a screen flicker when dropping a todo item.<br/>
Also, `Todo.js` has quite a large amount of lines of code so I should abstract some parts and make the code more readable and minimize re-renders.

