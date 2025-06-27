
const axios = require('axios');

const allowedStacks = ['backend', 'frontend'];
const allowedLevels = ['info', 'warning', 'error'];
const allowedPackages = ['handler', 'middleware', 'service'];

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YWliaGF2LjIyc2NzZTEzMDAwMTRAZ2FsZ290aWFzdW5pdmVyc2l0eS5lZHUuaW4iLCJleHAiOjE3NTEwMTcyODgsImlhdCI6MTc1MTAxNjM4OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjhhYjM5MmNlLTQ0YzUtNDZlMS05NGEyLThjNjhjNDZiNTE3OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZhaWJoYXYgZ3VwdGEiLCJzdWIiOiIzYjNlYTBjMC0xZjZiLTQ0M2QtOTkyNS0yMTVmZTJkYTgwZTgifSwiZW1haWwiOiJ2YWliaGF2LjIyc2NzZTEzMDAwMTRAZ2FsZ290aWFzdW5pdmVyc2l0eS5lZHUuaW4iLCJuYW1lIjoidmFpYmhhdiBndXB0YSIsInJvbGxObyI6IjIyMTMxMzAwMDE0IiwiYWNjZXNzQ29kZSI6Ik11YWd2cSIsImNsaWVudElEIjoiM2IzZWEwYzAtMWY2Yi00NDNkLTk5MjUtMjE1ZmUyZGE4MGU4IiwiY2xpZW50U2VjcmV0IjoiVVNKTnNyc3pzREhCY2ZiSyJ9.2fl-G1foKcILX_aiCNL3bxTxAVlruJT59PxjbHka5hI";

async function Log(stack, level, packageName, message) {
  // Validate inputs
  if (!allowedStacks.includes(stack)) {
    console.error(`❌ Invalid stack: ${stack}`);
    return;
  }
  if (!allowedLevels.includes(level)) {
    console.error(`❌ Invalid level: ${level}`);
    return;
  }
  if (!allowedPackages.includes(packageName)) {
    console.error(`❌ Invalid package: ${packageName}`);
    return;
  }

  const logData = {
    stack,
    level,
    package: packageName,
    message
  };

  try {
    const response = await axios.post(
      'http://20.244.56.144/evaluation-service/logs',
      logData,
      {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('✅ Log sent successfully:', response.data);
  } catch (error) {
    console.error('❌ Failed to send log:', error.response ? error.response.data : error.message);
  }
}

module.exports = Log;

