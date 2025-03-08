import React from 'react'

const About = () => {

    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '80vw',  
        maxWidth: '600px',
        minWidth: '280px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(to bottom right, #ffcccc, #ffffff)', // Light red and white gradient
        fontFamily: 'Arial, sans-serif',
      };
    
      const textStyle = {
        textAlign: 'left',
        lineHeight: '1.6',
        maxWidth: '90%',
      };
    
    

  return (
    <div style={boxStyle}>
      
      <p style={textStyle}><h1>TodoList Web App</h1>
      <br/>
This is my first project using the React JavaScript framework.<br/>
The TodoList web app allows users to manage their daily tasks effectively by adding and deleting todos with descriptions.<br/>
<br/>
 <h2>Features</h2><br/><hr/>
- <h4>Add Todos</h4><br/> Users can enter a title and a description for each todo item.<br/>
-<h4>Delete Todos</h4> <br/> Remove completed or unwanted tasks by clicking the delete button.<br/>
- <h4>Persistent Storage</h4><br/> Todos are saved to local storage, so they remain even after refreshing the page.<br/>
- <h4>Routing</h4>:<br/> The app has two main pages, **Home** and **About**, using **React Router** for seamless navigation.<br/>
- <h4>Responsive Design</h4> The app layout is clean and adapts well to different screen sizes.<br/>

 Technologies Used<br/><hr/>
-<h4>React JS</h4> <br/> Component-based architecture for building the UI.<br/>
- <h4>React Router</h4><br/> For navigation between the Home and About pages.<br/>
- <h4>Bootstrap</h4><br/> Styled Components and responsive design,Mainly used for NavBar<br/>
- <h4>Local Storage</h4><br/> To save todos persistently on the client side.<br/>
<br/>
<hr/>
 <h6>How to Run</h6><br/>
1. Clone the repository:
```bash<br/>
git clone <b>https://github.com/yourusername/todolist.git</b>
```<br/>
2. Navigate to the project directory:
```bash<br/>
cd todolist
```<br/>
3. Install dependencies:
```bash<br/>
npm install
```<br/>
4. Start the development server:
```bash<br/>
npm start
```<br/>
5. Open the app in your browser at<b>`http://localhost:3000`</b> .

<br/>

<br/><h5> Project Structure</h5><br/>
```
src/<br/>
├── components/
│   ├── AddTodo.js<br/>
│   ├── Footer.js<br/>
│   ├── Header.js<br/>
│   ├── Todos.js<br/>
│   └── About.js<br/>
├── App.js<br/>
├── App.css<br/>
└── index.js<br/>
```<br/>
<br/>
<b>Future Improvements</b> <br/>
- Add an **Edit Todo** feature.<br/>
- Implement task completion with a checkbox.<br/>
- Add a search functionality to filter todos.<br/>
<br/>

<br/>
---
 <b>Developed by Charan Kumar</b>


           </p>
    </div>
  )
}

export default About
