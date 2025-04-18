const fs = require('fs');
const { exec } = require('child_process');

// How often to commit (in minutes)
const interval = 1;

function autoCommit() {
  const timestamp = new Date().toISOString();
  const logPath = './log.txt';

  // Add a new line to a file
  fs.appendFileSync(logPath, `Auto commit at ${timestamp}\n`);

  // Git commands
  exec('git add . && git commit -m "Auto commit at ' + timestamp + '" && git push origin main', (err, stdout, stderr) => {
    if (err) {
      console.error('Commit error:', stderr);
    } else {
      console.log('Committed at:', timestamp);
    }
  });
}

// First run
autoCommit();

// Repeat every X minutes
setInterval(autoCommit, interval * 60 * 1000);
