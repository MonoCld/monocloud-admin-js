/**
 * The Patch Claim Resource class
 * @export
 * @interface PatchClaimResourceRequest
 */
export interface PatchClaimResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof PatchClaimResourceRequest
   */
  enabled?: boolean;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof PatchClaimResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the claim.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  name?: string;
  /**
   * Specifies the source of the claim.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  source?: string;
  /**
   * Specifies whether the user can de-select the claim on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof PatchClaimResourceRequest
   */
  required?: boolean;
  /**
   * Specifies whether the consent screen will emphasize this claim (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof PatchClaimResourceRequest
   */
  emphasize?: boolean;
}
