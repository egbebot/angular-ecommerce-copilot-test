export interface User {
  id: string;
  username: string;
  password?: string; // Optional for security reasons (e.g., not sent to the frontend)
  email?: string;
  role: 'admin' | 'customer';
}