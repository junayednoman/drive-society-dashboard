import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeta: builder.query({
      query: () => ({
        url: "/meta",
        method: "GET",
      }),
      providesTags: ["meta"]
    }),
  }),
})

export const { useGetMetaQuery } = dashboardApi;