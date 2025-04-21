import {Screen} from '../components/Screen';
import {colors} from '../theme';
export * from './Home';
export * from './NoteDetail';
export * from './NoteActions';

export function Inbox() {
  return <Screen title="Inbox" />;
}
export function Search() {
  return <Screen title="Search" />;
}
export function Settings() {
  return <Screen title="Settings" />;
}
export function Note() {
  return <Screen title="Note" backgroundColor={colors.background.secondary} />;
}
