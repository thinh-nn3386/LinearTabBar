
export const NoteTab = {
  icon: 'note',
  id: 'note',
};

export const BaseTabs = [
  {
    id: '(home-stack)',
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
