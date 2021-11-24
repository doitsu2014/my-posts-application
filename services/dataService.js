import { SUPPORT_LOCALES } from "../common/constants"
import vi_timelines from '../data/timelines/vi_timelines.json'
import en_timelines from '../data/timelines/en_timelines.json'
import applicationTitles from '../data/applicationTitles.json'

export default function DataService() {

	/**
	 * 
	 * @param {string} locale 
	 * @returns {Array}
	 */
	this.getTimelines = (locale) => locale === SUPPORT_LOCALES.vi ? vi_timelines : en_timelines;

	/**
	 * 
	 * @param {string} locale 
	 * @returns {Object} 
	 */
	this.getApplicationTitles = (locale) => applicationTitles[locale] || {};
	return this;
}