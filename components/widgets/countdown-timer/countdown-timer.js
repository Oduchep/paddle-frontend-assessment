import React from 'react';
import ShowCounter from './show-counter'
import ExpiredNotice from './expired-notice';
import { useCountdown } from './use-countdown';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice/>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;