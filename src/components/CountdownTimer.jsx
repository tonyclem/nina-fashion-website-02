import React from "react";
import styled from "styled-components";
import { useCountdown } from "./hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Wrapper>
      <div className="countDown">
        <div className="digits">
          <span>
            <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
          </span>
          <span>
            <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
          </span>
          <span>
            <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
          </span>
          <span>
            <DateTimeDisplay
              value={seconds}
              type={"Seconds"}
              isDanger={false}
            />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
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

const Wrapper = styled.section`
  .countDown {
    margin-bottom: 1rem;
  }

  .digits {
    display: flex;
    padding-bottom: 0rem;
  }

  span {
    border: 1px solid var(--clr-black);
    margin-right: 0.4rem;
    border-radius: 5px;
    text-align: center;
    width: 77px;
    height: 70px;
    padding-top: 0.5rem;
  }
`;

export default CountdownTimer;
