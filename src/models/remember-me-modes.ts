/**
 *
 * @export
 * @enum {string}
 */

export const RememberMeModes = {
  /**
   * The session will expire when the browser is closed.
   */
  Off: 'off',
  /**
   * On each interaction of the user with the authorization server, the lifetime of the session will be renewed (by the amount specified in &quot;Remember Me Duration&quot; parameter). The lifetime will not exceed the time specified in the &quot;Logout After&quot; parameter
   */
  Sliding: 'sliding',
  /**
   * The session will expire on a fixed point in time (specified by the &quot;Remember Me Duration&quot; parameter)
   */
  Absolute: 'absolute',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RememberMeModes =
  (typeof RememberMeModes)[keyof typeof RememberMeModes];
