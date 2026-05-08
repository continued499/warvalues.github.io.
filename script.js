body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #121212;
  color: white;
}

.container {
  text-align: center;
  padding-top: 40px;
}

h1 {
  font-size: 42px;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.card {
  width: 650px;
  margin: auto;
  background: #1e1e1e;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

#question {
  font-size: 20px;
  margin-bottom: 20px;
}

#answers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: #2c2c2c;
  transition: 0.2s;
}

button:hover {
  background: #444;
  transform: scale(1.02);
}

#progress {
  margin-top: 15px;
  color: #888;
  font-size: 14px;
}
