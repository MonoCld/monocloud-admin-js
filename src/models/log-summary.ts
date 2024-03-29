import { LogEventCategories } from './log-event-categories';
import { LogEventTypes } from './log-event-types';

/**
 * The Log Summary response class
 * @export
 * @interface LogSummary
 */
export interface LogSummary {
  /**
   * Unique identifier of the log
   * @type {string}
   * @memberof LogSummary
   */
  id: string;
  /**
   * Log Category
   * @type {LogEventCategories}
   * @memberof LogSummary
   */
  category: LogEventCategories;
  /**
   * Log Name.
   * @type {string}
   * @memberof LogSummary
   */
  name: string;
  /**
   * Log Type.
   * @type {LogEventTypes}
   * @memberof LogSummary
   */
  event_type: LogEventTypes;
  /**
   * The Activity Id.
   * @type {string}
   * @memberof LogSummary
   */
  activity_id?: string | null;
  /**
   * Specifies the event time (in Epoch).
   * @type {number}
   * @memberof LogSummary
   */
  time_stamp: number;
  /**
   * The client Id.
   * @type {string}
   * @memberof LogSummary
   */
  client_id?: string | null;
}
