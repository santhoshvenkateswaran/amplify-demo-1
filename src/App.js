import { DataStore } from '@aws-amplify/datastore';
import { useEffect, useState } from 'react';
import './App.css';
import { ToDo } from './models';
import { NavBar, ToDoCreateForm, ToDoUpdateForm, ToDoCard } from './ui-components';

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
      setToDoItemToUpdate('');
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
      <div className="App__card-container">
        {toDoList.map((toDoItem) =>
          toDoItemToUpdate && toDoItem.id === toDoItemToUpdate ? (
            <ToDoUpdateForm
              className="ToDoUpdateForm"
              toDo={toDoItem}
              onSubmit={handleToDoUpdateFormSubmit}
              onCancel={() => setToDoItemToUpdate('')}
            />
          ) : (
            <ToDoCard
              toDo={toDoItem}
              key={toDoItem.id}
              overrides={{
                ToDoCard: { justifyContent: 'space-between' },
                Button35512789: { onClick: () => handleToDoEditClick(toDoItem.id) },
                Button35592883: { onClick: () => handleToDoDeleteClick(toDoItem.id) },
              }}
            />
          )
        )}
      </div>
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
        <p>Create To Do item:</p>
        <div className="App__ToDoForm">
          <ToDoCreateForm className="ToDoCreateForm" onSubmit={handleToDoFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
