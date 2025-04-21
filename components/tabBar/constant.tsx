
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


const Empty = '';

const EmptyTab = {
  id: Empty,
  icon: Empty,
};

export const UnderLayerTabs = [
  EmptyTab,
  EmptyTab,
  NoteTab,
  EmptyTab,
  EmptyTab,
] as const;

export const TopLayerTabs = [
  {
    id: 'home',
    icon: 'arrow-left',
  },
  EmptyTab,
  NoteTab,
  EmptyTab,
  {
    id: 'note-actions',
    icon: 'list',
  },
] as const;