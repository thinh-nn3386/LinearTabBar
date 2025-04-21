import * as nav from '../navigationUtilities';

export const NoteTab = {
  action: nav.openNote,
  icon: 'note',
  id: 'note',
};

export const BaseTabs = [
  {
    action: nav.navigateHomeTab,
    id: 'homeStack',
    icon: 'home',
  },
  {
    action: nav.navigateInboxTab,
    id: 'inbox',
    icon: 'inbox',
  },
  NoteTab,
  {
    action: nav.navigateSearchTab,
    id: 'search',
    icon: 'search',
  },
  {
    action: nav.navigateSettingTab,
    id: 'settings',
    icon: 'settings',
  },
] as const;
