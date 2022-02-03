import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './toDo/toDoReducer';

export const store = configureStore({ reducer: { toDo: itemsReducer } });
