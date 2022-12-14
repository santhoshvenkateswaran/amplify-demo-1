import { DataStore } from '@aws-amplify/datastore';
import { useEffect, useState } from 'react';
import './App.css';
import { ToDo } from './models';
import { NavBar, ToDoCreateForm, ToDoUpdateForm } from './ui-components';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toDoItemToUpdate, setToDoItemToUpdate] = useState('');

  const createToDo = (title, description) => DataStore.save(new ToDo({ title, description }));

  const fetchToDo = () => {
    setLoading(true);
    DataStore.query(ToDo)
      .then((models) => {
        setToDoList(JSON.parse(JSON.stringify(models)));
        setLoading(false);
      })
      .catch(() => {
        // TODO: Handle fetch error.
        setLoading(false);
      });
  };

  const updateToDo = (title, description) => {
    return DataStore.query(ToDo, toDoItemToUpdate).then((original) => {
      const copy = ToDo.copyOf(original, (item) => {
        item.title = title;
        item.description = description;
      });
      return DataStore.save(copy);
    });
  };

  const deleteToDo = (id) =>
    DataStore.query(ToDo, id).then((modelToDelete) => {
      DataStore.delete(modelToDelete);
    });

  const handleToDoEditClick = (id) => {
    setToDoItemToUpdate(id);
  };

  const handleToDoDeleteClick = (id) => {
    deleteToDo(id).then(() => {
      fetchToDo();
    });
  };

  const handleToDoFormSubmit = ({ title, description }) => {
    createToDo(title, description).then(() => {
      fetchToDo();
    });
  };

  const handleToDoUpdateFormSubmit = ({ title, description }) => {
    updateToDo(title, description).then(() => {
      fetchToDo();
    });
  };

  const renderToDoList = () => {
    if (loading) {
      return <p>Fetching your To Do list...</p>;
    }

    if (!toDoList?.length) {
      return <p>Yay! You're all caught up.</p>;
    }

    return (
      <>
        <table className="App__ToDoList">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toDoList.map((toDoItem) => (
              <tr className="App__ToDoItem" key={toDoItem.id}>
                <td>{toDoItem.title}</td>
                <td>{toDoItem.description}</td>
                <td>
                  <button onClick={() => handleToDoEditClick(toDoItem.id)}>Edit</button>
                  <button onClick={() => handleToDoDeleteClick(toDoItem.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  useEffect(() => {
    fetchToDo();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="AppContent">
        {renderToDoList()}
        <p>{toDoItemToUpdate ? 'Update' : 'Create'} To Do item:</p>
        <div className="App__ToDoForm">
          {toDoItemToUpdate ? (
            <ToDoUpdateForm
              className="ToDoUpdateForm"
              onSubmit={handleToDoUpdateFormSubmit}
              onCancel={() => setToDoItemToUpdate('')}
            />
          ) : (
            <ToDoCreateForm className="ToDoCreateForm" onSubmit={handleToDoFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
