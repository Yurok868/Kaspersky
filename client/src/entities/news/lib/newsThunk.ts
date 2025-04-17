import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SnippetNewsSchema } from '../model/schema';
import { SnippetNews } from '../model/types';

export const getNews = createAsyncThunk('news/getNews', async () => {
  const response = await axios.get<SnippetNews[]>('/api/posts/');

  return SnippetNewsSchema.array().parse(response.data);
});

