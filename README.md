# React – Junior Interview Task (30–45 min)

## Core Task: Todo List Application

Build a functional todo list application with the following requirements:

### Required Features
1. **Add Todos**: Input field with "Add" button to create new todo items
2. **Toggle Completion**: Click to mark todos as completed/incomplete
3. **Delete Todos**: Remove individual todo items
4. **Persistence**: Save todos to localStorage and restore on page reload
5. **Controlled Input**: Use controlled component pattern for the input field
6. **Display Counter**: Show completed count (e.g., "Completed: 2/5")

### Technical Requirements
- Use `useState` for state management
- Use `useEffect` for localStorage synchronization
- Use proper React patterns (controlled inputs, list keys, etc.)
- Ensure accessibility (labels, ARIA attributes where appropriate)

### Follow-up Discussion Questions
Be prepared to discuss:
- Rules of hooks (where can hooks be called?)
- Controlled vs uncontrolled components
- Why list items need keys and what makes a good key
- How `useEffect` works and its dependency array

## How to Run

Serve the `index.html` file with a dev server:

**Option 1 - Using Vite:**
```bash
npx vite
```

**Option 2 - Using Python:**
```bash
python3 -m http.server 3000
```

**Option 3 - Using Node.js http-server:**
```bash
npx http-server -p 3000
```

Then open your browser to the displayed URL (typically http://localhost:3000).

## Scoring Rubric (10 points total)

### Correctness (0–3 points)
- 3: All features work correctly, handles edge cases
- 2: Most features work, minor issues
- 1: Basic functionality present but significant bugs
- 0: Major functionality missing or broken

### React Fundamentals (0–3 points)
- 3: Proper use of hooks, controlled components, keys, and patterns
- 2: Generally correct but some anti-patterns or inefficiencies
- 1: Significant misunderstandings of React concepts
- 0: Fundamental React concepts not applied

### Code Quality (0–2 points)
- 2: Clean, readable, well-organized code with good naming
- 1: Functional but could be cleaner or better organized
- 0: Poor code organization or unclear naming

### UX/Accessibility (0–2 points)
- 2: Good UX, considers accessibility (labels, semantic HTML, ARIA)
- 1: Basic UX, minimal accessibility considerations
- 0: Poor UX or no accessibility considerations
