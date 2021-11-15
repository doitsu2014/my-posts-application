import { server } from '../common/config'
import { timelines } from '../data/timelines'

export default function DataService() {
	this.getTimelinesAsync = async () => await fetch(`${server}/data/timelines.json`);
	this.getTimelines = () => timelines;
	return this;
}