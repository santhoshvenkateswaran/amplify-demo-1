import { DataStore } from '@aws-amplify/datastore';
import { useEffect, useState } from 'react';
import { ToDo } from '../models';
import { AddButton, ToDoCard, ToDoCreateForm, ToDoUpdateForm } from '../ui-components';
import './Home.css';

const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toDoItemToUpdate, setToDoItemToUpdate] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

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
      setShowAddForm(false);
      fetchToDo();
    });
  };

  const handleToDoUpdateFormSubmit = ({ title, description }) => {
    updateToDo(title, description).then(() => {
      setToDoItemToUpdate('');
      fetchToDo();
    });
  };

  const renderCreateFormModal = () => {
    return (
      <div className="CreateForm__ModalBackdrop" onClick={() => setShowAddForm(false)}>
        <div className="CreateForm__ModalContent" onClick={(e) => e.stopPropagation()}>
          <ToDoCreateForm
            className="Home__Form CreateForm"
            onSubmit={handleToDoFormSubmit}
            onCancel={() => setShowAddForm(false)}
          />
        </div>
      </div>
    );
  };

  const renderToDoList = () => {
    if (loading) {
      return (
        <div className="Home__Message">
          <p>Fetching your notes...</p>
        </div>
      );
    }

    if (!toDoList?.length) {
      return (
        <div className="Home__Message">
          <p>Notes you add appear here.</p>
        </div>
      );
    }

    return (
      <div className="Home__Cards">
        {toDoList.map((toDoItem) =>
          toDoItemToUpdate && toDoItem.id === toDoItemToUpdate ? (
            <ToDoUpdateForm
              className="Home__Form"
              toDo={toDoItem}
              key={toDoItem.id}
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
    <>
      {showAddForm && renderCreateFormModal()}
      {renderToDoList()}
      <div className="Home__AddButton">
        <AddButton overrides={{ AddButton: { onClick: () => setShowAddForm(true) } }} />
      </div>
    </>
  );
};

export default Home;
