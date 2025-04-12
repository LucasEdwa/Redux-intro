# Redux Application 

Learning to create reducers and manage state with Redux Toolkit to handle interactions with components.

## Description

This project demonstrates two Redux implementations:
1. A counter application showing basic Redux concepts
2. A task manager showing more advanced state management

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

7. **Task Manager Implementation**:
   - Learned to implement typed hooks (`useAppDispatch` and `useAppSelector`) for better TypeScript support
   - Understood the importance of serializable state (using plain objects instead of classes)
   - Implemented form handling with Formik and Chakra UI integration

## Key Implementation Details

### Counter Features
- Basic counter functionality (increment, decrement)
- Asynchronous increment simulation
- Loading state management

### Task Manager Features
- Task creation, deletion, and completion toggling
- Form validation with Formik
- Styled UI with Chakra UI components
- Type-safe state management with TypeScript

### Important Notes
1. Form styling must be applied to Chakra UI components, not directly to Formik's `Form`
2. All state must be serializable (use plain objects, not classes)
3. Type safety is enforced through TypeScript interfaces and typed hooks

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn`.
3. Start the development server using `npm start` or `yarn start`.
4. Open the application in your browser to interact with both the counter and task manager.

## Project Structure
```
src/
  ├── components/
  │   ├── AddTask.tsx
  │   ├── TaskList.tsx
  │   └── Counter.tsx
  ├── state/
  │   ├── hooks/
  │   │   └── hooks.ts
  │   ├── tasks/
  │   │   └── TaskSlice.ts
  │   ├── counter/
  │   │   └── counterSlice.ts
  │   └── store.ts
  └── App.tsx
```

## Key Files

- **`src/state/counter/counterSlice.ts`**: Contains the Redux slice for the counter, including reducers and asynchronous logic.
- **`src/state/tasks/TaskSlice.ts`**: Contains the Redux slice for task management, including task creation, deletion, and completion.
- **`src/state/hooks/hooks.ts`**: Contains typed Redux hooks for better TypeScript support.
- **`src/state/store.ts`**: Configures the Redux store and combines reducers.
- **`src/components/Counter.tsx`**: React component that interacts with the Redux store to display and update the counter.
- **`src/components/AddTask.tsx`**: Form component for adding new tasks with validation.
- **`src/components/TaskList.tsx`**: Component that displays and manages the list of tasks.
- **`src/App.tsx`**: Main application component that renders both the counter and task manager.

This project provided hands-on experience with Redux Toolkit and demonstrated how to manage state in a scalable and maintainable way.