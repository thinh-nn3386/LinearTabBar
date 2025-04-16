
export const NoteTab = {
  icon: 'note',
  id: 'notes',
};

export const BaseTabs = [
  {
    id: 'homeStack',
    icon: 'home',
  },
  {
    id: 'inbox',
    icon: 'inbox',
  },
  NoteTab,
  {
    id: 'search',
    icon: 'search',
  },
  {
    id: 'settings',
    icon: 'settings',
  },
] as const;
