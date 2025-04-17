import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

function navigate(params: unknown) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(params as never);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export const openNoteAction = () => {
  navigate('noteAction');
};

export const navigateHomeTab = () => {
  navigate({
    name: 'tabs',
    params: {
      screen: 'homeStack',
    },
  });
};

export const navigateInboxTab = () => {
  navigate({
    name: 'tabs',
    params: {
      screen: 'inbox',
    },
  });
};

export const navigateSearchTab = () => {
  navigate({
    name: 'tabs',
    params: {
      screen: 'search',
    },
  });
};

export const navigateSettingTab = () => {
  navigate({
    name: 'tabs',
    params: {
      screen: 'settings',
    },
  });
};

export const openNote = () => {
  navigate('note');
};
