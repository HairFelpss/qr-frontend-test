import create from 'zustand';

export type UserType = {
  admission_date: string;
  created_at: string;
  email: string;
  id: number;
  job_title: string;
  name: string;
  photo_url: string;
  updated_at: string;
};

type State = {
  users: UserType[];
  addUser: (user: UserType) => void;
  addUsers: (user: UserType[]) => void;
};

const useUserStore = create<State>((set) => ({
  users: [],

  addUser: (user: UserType) => {
    set((state) => ({ users: [...state.users, user] }));
  },

  addUsers: (users: UserType[]) => {
    set((state) => ({ users: [...new Set([...state.users, ...users])] }));
  },
}));

export default useUserStore;
