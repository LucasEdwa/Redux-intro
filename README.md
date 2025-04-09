# Redux Application 

Learning to create reducers and manage state with Redux Toolkit to handle interactions with components.

## Description

This project is a simple counter application built using Redux Toolkit. It demonstrates how to manage application state effectively using Redux concepts such as slices, reducers, actions, and asynchronous thunks.

## What I Learned

1. **Setting Up Redux Toolkit**:
   - Learned how to configure a Redux store using `configureStore` from Redux Toolkit.
   - Understood how to integrate the store with a React application using the `Provider` component.

2. **Creating Slices**:
   - Learned to define a slice using `createSlice`, which combines reducers and actions in a single structure.
   - Explored how to define initial state and reducers for handling synchronous actions.

3. **Handling Asynchronous Logic**:
   - Learned to use `createAsyncThunk` to handle asynchronous operations, such as simulating API calls.
   - Understood how to manage loading states and handle asynchronous actions using `extraReducers`.

4. **Connecting Redux to React Components**:
   - Learned to use `useSelector` to access state values in React components.
   - Used `useDispatch` to dispatch actions from React components to update the state.

5. **Code Organization**:
   - Understood the importance of organizing Redux logic into slices and keeping the store configuration separate.
   - Learned to structure the application with clear separation between state management and UI components.

6. **Practical Usage**:
   - Implemented a counter with increment, decrement, and increment by a specific amount functionality.
   - Added asynchronous increment functionality to simulate real-world scenarios.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn`.
3. Start the development server using `npm start` or `yarn start`.
4. Open the application in your browser to interact with the counter.

## Key Files

- **`src/state/counter/counterSlice.ts`**: Contains the Redux slice for the counter, including reducers and asynchronous logic.
- **`src/state/store.ts`**: Configures the Redux store and combines reducers.
- **`src/components/Counter.tsx`**: React component that interacts with the Redux store to display and update the counter.
- **`src/App.tsx`**: Main application component that renders the counter.

This project provided hands-on experience with Redux Toolkit and demonstrated how to manage state in a scalable and maintainable way.