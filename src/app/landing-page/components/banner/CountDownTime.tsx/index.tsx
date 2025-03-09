"use client";
import { useState, useEffect } from "react";
import classes from "./Countdown.module.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const updateCountdown = () => {
      setTimeLeft(getTimeRemaining(targetDate));
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);

  }, []);

  if (!timeLeft) return null;

  return (
    <div className={`${classes.time} ${classes.flexCenter}`}>
      <TimeBox value={timeLeft.days} label="Days" />
      <Separator />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const getTimeRemaining = (targetDate: Date): TimeRemaining => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => (
  <div>
    <h2
      className={classes.textTime}
      style={{ fontFamily: playfair.style.fontFamily }}
    >
      {value < 10 ? `0${value}` : value}
    </h2>
    <h2 style={{ fontWeight: "600" }}>{label}</h2>
  </div>
);

const Separator: React.FC = () => (
  <div
    className={classes.textTime}
    style={{ fontFamily: playfair.style.fontFamily }}
  >
    :
  </div>
);

export default Countdown;
