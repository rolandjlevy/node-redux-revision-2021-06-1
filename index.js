const { store, incCounter, decCounter} = require('./redux/store.js');
store.dispatch(decCounter());

const { app, port } = require('./app');

app.get('/', (req, res) => {
  res.send(`
    <h1>Home</h1>
    <p>Increase: <a href="/inc">[ + ]</a></p>
    <p>Decrease: <a href="/dec">[ - ]</a></p>
  `);
});

app.get('/inc', (req, res) => {
  store.dispatch(incCounter());
  const state = store.getState();
  res.send(`
    <h1>Inc</h1>
    <p>Increased to: ${state.counter}</p>
    <p><a href="/">⬅️ back</a></p>
  `);
});

app.get('/dec', (req, res) => {
  store.dispatch(decCounter());
  const state = store.getState();
  res.send(`
    <h1>Dec</h1>
    <p>Decreased to: ${state.counter}</p>
    <p><a href="/">⬅️ back</a></p>
  `);
});

app.listen(() => {
  console.log('Listening on port', port);
});
