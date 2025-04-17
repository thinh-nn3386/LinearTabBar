import * as nav from '../navigationUtilities';

const NoteTab = {
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

const Empty = '';

const EmptyTab = {
  action: () => {},
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
    action: nav.goBack,
    id: 'goBack',
    icon: 'arrow-left',
  },
  EmptyTab,
  NoteTab,
  EmptyTab,
  {
    action: () => {},
    // action: nav.openNoteAction,
    id: 'list',
    icon: 'list',
  },
] as const;
