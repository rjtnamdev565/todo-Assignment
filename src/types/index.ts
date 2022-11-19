export type ThemeType = {
  theme: string;
  toggleTheme: any;
};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filter = "all" | "completed" | "active";
