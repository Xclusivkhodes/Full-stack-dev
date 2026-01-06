const logs = [
  { event: "Login", time: "2025-01-01" },
  { event: "Update", time: "2025-12-25" }, // This is today's date
  { event: "Logout", time: "2025-06-15" },
];

const recent = logs.reduce((acc, cur) => {
  if (cur.time > acc.time) {
    return cur;
  } else {
    return acc;
  }
});

console.log(recent);
