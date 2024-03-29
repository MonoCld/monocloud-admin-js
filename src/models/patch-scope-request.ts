import { CreateScopeClaimRequest } from './create-scope-claim-request';

/**
 * The Patch Scope Resource class
 * @export
 * @interface PatchScopeRequest
 */
export interface PatchScopeRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof PatchScopeRequest
   */
  enabled?: boolean;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof PatchScopeRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof PatchScopeRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof PatchScopeRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof PatchScopeRequest
   */
  name?: string;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof PatchScopeRequest
   */
  required?: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof PatchScopeRequest
   */
  emphasize?: boolean;
  /**
   * List of associated user claim types that should be included in the Identity token, Access Token or as returned from the User Info Endpoint.
   * @type {CreateScopeClaimRequest[]}
   * @memberof PatchScopeRequest
   */
  user_claims?: CreateScopeClaimRequest[];
}
