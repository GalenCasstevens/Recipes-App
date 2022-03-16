import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function PrepTime({ minutes }) {
	const MINUTES_IN_A_HOUR = 60;

	const isHourFormat = () => {
		if (minutes / MINUTES_IN_A_HOUR > 1) return true;
		else return false;
	};

	const getPrepTimeStr = () => {
		var result = '';

		if (minutes / MINUTES_IN_A_HOUR > 1) {
			var hours = Math.floor(minutes / MINUTES_IN_A_HOUR);
			minutes = minutes % MINUTES_IN_A_HOUR;
			result = `${hours}h${minutes}m`;
		} else result = `${minutes}m`;

		return result;
	};

	return (
		<div className={'prep-time' + (isHourFormat() ? '' : '-with-minutes')}>
			<FontAwesomeIcon icon={faClock} />
			<span className="prep-minutes">
				<strong>{getPrepTimeStr()}</strong>
			</span>
		</div>
	);
}

export default PrepTime;
