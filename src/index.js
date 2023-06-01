import App from "./App";
import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {persistor, store} from "./app/store";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {setAuthToken, setAuthType} from "./libs/HttpClient";
import "bulma/css/bulma.css";

const container = document.getElementById("root");
const root = createRoot(container);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    }
})

const handleOnBeforeLift = () => {
    if (
        store.getState().auth.isLoggedIn
    ) {
        setAuthToken(store.getState().auth.access_token)
        setAuthType('admin')
    }
}

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={handleOnBeforeLift}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);
