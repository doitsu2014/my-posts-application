import { SUPPORT_LOCALES } from "../common/constants"
import vi_timelines from '../data/timelines/vi_timelines.json'
import en_timelines from '../data/timelines/en_timelines.json'

/**
 * 
 * @param {string} locale 
 * @returns {Array}
 */
export function getTimelines(locale) {
	return locale === SUPPORT_LOCALES.vi ? vi_timelines : en_timelines;
}