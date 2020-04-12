# Test React App
by Allen K Williams 

# Setting up the app 
1. Backend 
    from the top level directory, `cd backend && npm install`
2. Frontend 
    from the top level directory, `cd frontend && npm install`  
    
# Running the App 
1. Navigate to `backend` directory and run `npm run start`
> if you would like for the app to write to the `todos.json` file, instead, run `yarn start:persist`
2. in a separate terminal window, navigate to the `frontend` directory and run `npm run start` this will open a  webpage. 
3. once the Metro Bundler and Tunnel are ready, click 'Run in iOS simulator' to open an ios simulator

# Running Tests
- Backend: in the `backend` directory, run `npm run test`

# Unable to finish: 
- styling in Add New Todo Modal
- Date time setting in Add New Todo Modal

# Reflections on Testing
When time to write tests is limited, unit tests should focus on ensuring that the interfaces _between_ parts of the app should work. In this project the API is the contract between the backend and the frontend. There are a number of things that could go wrong as these apps communicate (server configuration, network errors, firewalls, etc). So unit tests should aim to _reduce the problem space_, to allow us to identify whether the problem is on the backend, on the frontend, or in between. 

## Backend Testing
Added a test for the `DELETE` endpoint because it's a destructive operation, and we should always ensure that 1. it deletes a todo and 2. it deletes the _correct_ todo. 

 
