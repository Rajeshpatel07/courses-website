import cron from "node-cron";
import fns from "data-fns";

// Helper function to calculate cron expression from a specific date and time
const calculateCronExpression = (date, time) => {
  const newDate = `${date}T${time}:00`;
  const targetDateTime = new Date(newDate);
  console.log("newDate", newDate, "==>", "target", targetDateTime);

  const minute = targetDateTime.getMinutes();
  const hour = targetDateTime.getHours();
  const day = targetDateTime.getDate();
  const month = targetDateTime.getMonth() + 1;

  return `${minute} ${hour} ${day} ${month} *`;
};

export const scheduleOneTimeTask = ({ date, time }, task) => {
  const cronExpression = calculateCronExpression(date, time);

  const job = cron.schedule(cronExpression, () => {
    task();
    job.stop();
  });

  console.log(`Task scheduled with cron expression: ${cronExpression}`);
};
