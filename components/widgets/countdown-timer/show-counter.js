import DateTimeDisplay from "./date-time-display";

const ShowCounter = ({ days, hours, minutes, seconds }) => {

    return (
      <div className="flex justify-evenly flex-wrap">
          <div className="w-2/12">
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 2} />
          </div>
          <div className="w-2/12">
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          </div>
          <div className="w-2/12">
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          </div>
          <div className="w-2/12">
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          </div>
      </div>
    );
  };

  export default ShowCounter;