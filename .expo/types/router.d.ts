/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/note`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/inbox` | `/inbox`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}${'/(home-stack)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}${'/(home-stack)'}/note-detail` | `/note-detail`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/note`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/inbox` | `/inbox`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}${'/(home-stack)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}${'/(home-stack)'}/note-detail` | `/note-detail`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/note${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/inbox${`?${string}` | `#${string}` | ''}` | `/inbox${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/search${`?${string}` | `#${string}` | ''}` | `/search${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/settings${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${'/(home-stack)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${'/(home-stack)'}/note-detail${`?${string}` | `#${string}` | ''}` | `/note-detail${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/note`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/inbox` | `/inbox`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}${'/(home-stack)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}${'/(home-stack)'}/note-detail` | `/note-detail`; params?: Router.UnknownInputParams; };
    }
  }
}
