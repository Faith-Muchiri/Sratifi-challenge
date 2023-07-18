#Todo App
This is a simple Todo app built using React and TailwindCSS. It allows users to add tasks, mark them as completed, toggle between different task views (All, Active, Completed), and remove completed tasks.


##Installation and Setup
To run the app locally, follow these steps:

Clone the repository:https://github.com/Faith-Muchiri/Sratifi-challenge

###bash
Copy code
git clone 
Navigate to the project directory:

###bash
Copy code
cd sratifi-challenge
Install the dependencies:

###Copy code
npm install
Start the development server:

npm start
Open your browser and visit http://localhost:3000 to see the app.

##Features
Add a new task
Complete a task
Toggle between All, Active, and Completed tasks
Remove one or all tasks under the Completed tab
Data is stored in local storage, persisting the tasks even after page refresh

##Technologies Used

React
TailwindCSS
Folder Structure
css
Copy code
├── src
│   ├── components
│   │   ├── Layout.js
│   │   ├── TodoItem.js
│   │   └── TodoListPage.js
│   ├── pages
│   │   ├── AllPage.js
│   │   ├── ActivePage.js
│   │   └── CompletedPage.js
│   ├── App.js
│   └── index.js
└── ...
The components folder contains reusable components used in the app.
The pages folder contains page components for different task views.
The App.js file is the entry point of the app.
The index.js file is responsible for rendering the app.

##Contributing
Contributions are welcome! If you have any improvements or bug fixes, feel free to submit a pull request.

##License
This project is licensed under the MIT License.

##Acknowledgments
This project was completed as part of the Stratifi Frontend Task.




