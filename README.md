# React fiddle


# Redux
- install @reduxjs/toolkit and react-redux
- build our store 
- connect store to app
- create cary slice
- dispach(action)
- Selector



# cart slice 
- create a file for cart slice
- import createSlice from reduxJs/toolkit
- create a slice object by passing below config:- 
    - name
    - intial state of item with balnk array
    - reducer - with action function (add, remove clear)
- export default slice reducer
- also export actions from createSlice.action 

- add cart slice to the store as reducer
- dispach addItem action from item list

# Cart Page

- Create a Cart file and write component
- create a route for cart
- add a hyperlink to header component for cart 

# Type of Testing (devloper)
- Unit testing
- Intigration Testing
- End to End  Testing - e2e

# Setting up Testing in our app
- Intsall React Testing Library
- Install jest
- Install Babel dependancy
- Configure babel
- Configure parcel config file to disable default babel transpilation
- Jest Configuration
- Install jsdom library
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom

