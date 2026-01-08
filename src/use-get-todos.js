export const useGetTodos = () => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load todos", error);
    return [];
  }
};
