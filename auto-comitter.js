const fs = require('fs');
const { exec } = require('child_process');

// How often to commit (in seconds)
const interval = 30; // 30 seconds

// List of random natural commit messages
const messages = [
  "Minor updates",
  "Small changes",
  "Refactor code",
  "Update project files",
  "Improve structure",
  "Fix minor issues",
  "Content adjustments",
  "Cleanup",
  "File reorganization",
  "Various improvements",
  "Fixtures updated",
  "Modulating codes"
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function autoCommit() {
  const timestamp = new Date().toISOString();
  const logPath = './log.txt';

  // Add a new line to a file
  fs.appendFileSync(logPath, `Auto commit at ${timestamp}\n`);

  // Git commands
  const message = getRandomMessage();
  exec(`git add . && git commit -m "${message}" && git push origin master`, (err, stdout, stderr) => {
    if (err) {
      console.error('Commit error:', stderr);
    } else {
      console.log(`Committed at: ${timestamp} with message: "${message}"`);
    }
  });
}

// First run
autoCommit();

// Repeat every X seconds
setInterval(autoCommit, interval * 1000); // 30 * 1000 = 30 seconds
