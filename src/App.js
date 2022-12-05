import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

function App() {
  async function addTodo() {
    await DataStore.save(
      new Todo({
        name: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet',
      })
    );
  }

  async function showTodo() {
    const models = await DataStore.query(Todo);
    console.log(models);
  }

  async function updateTodo() {
    const original = await DataStore.query(Todo, '2e737f68-e5b2-4cc3-9999-419d4225c60a');
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
    to apply updates to the item’s fields rather than mutating the instance directly */
    await DataStore.save(
      Todo.copyOf(original, (item) => {
        item.name = `updated ${Date.now()}`;
      })
    );
  }

  async function deleteTodo() {
    const modelToDelete = await DataStore.query(Todo, '2e737f68-e5b2-4cc3-9999-419d4225c60a');
    DataStore.delete(modelToDelete);
  }

  return (
    <div className="App">
      <div className="App-main">
        <button onClick={addTodo}>Create</button>
        <button onClick={showTodo}>Show</button>
        <button onClick={updateTodo}>Update</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default App;
