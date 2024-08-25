import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({

    reducePath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    }),

    endpoints: (builder) => ({
        getTodo: builder.query({
        query: (todoId) => `/todos/${todoId}`
       })
    }),
})

export const {useGetTodosQuery,useGetTodoQuery} = todosApi