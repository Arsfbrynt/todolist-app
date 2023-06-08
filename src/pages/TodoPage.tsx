import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTask, deleteTask, createTask, searchTasks } from '../store/action';
import { Task } from '../store/types';
import { TextField, Checkbox, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { Add, Search, Delete } from '@mui/icons-material';
import { debounce } from 'lodash';

const TodoPage: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = (task: Task) => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = (task: Task) => {
    dispatch(deleteTask(task.id));
  };

  const handleCreate = () => {
    if (newTask.trim() !== '') {
      dispatch(createTask(newTask));
      setNewTask('');
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const debouncedSearch = debounce((term: string) => {
    dispatch(searchTasks(term));
  }, 300);

  const filteredTasks = tasks.filter((task: Task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Typography variant="h4" component='h1' align="center" gutterBottom>
        Todo List
      </Typography>
      <Paper style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <TextField
            label="Cari Tasks"
            value={searchTerm}
            onChange={handleSearch}
            style={{ marginRight: '1rem' }}
            InputProps={{
              endAdornment: <Search />
            }}
          />
          <TextField
            label="Task Baru"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{ marginRight: '1rem' }}
            InputProps={{
              endAdornment: (
                <Button variant="contained" color="primary" onClick={handleCreate}>
                  <Add />
                </Button>
              )
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleCreate();
              }
            }}
          />
        </div>
        {filteredTasks.length > 0 ? (
          <List>
            {filteredTasks.map((task : Task) => (
              <ListItem key={task.id}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggle(task)}
                />
                <ListItemText primary={task.title}   className={task.completed ? 'completed-task' : ''}/>
                <Button variant="contained" color="secondary" sx={{minWidth: '45px', height: '45px', padding: '2px', borderRadius: '50%'}} onClick={() => handleDelete(task)}>
                <Delete />
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <>
          <Typography variant="subtitle1" align="center">
            Task tidak ditemukan
          </Typography>
          </>
        )}
      </Paper>
    </div>
  );
};


export default TodoPage;
