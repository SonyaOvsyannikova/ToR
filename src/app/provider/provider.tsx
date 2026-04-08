'use client'
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { store } from '@/store/store';
import { ReactNode } from "react";

const queryClient = new QueryClient();

type ProviderProps = {
    children?: ReactNode;
}


const Provider = (props: ProviderProps) => {
    const { children } = props;

    return (
    <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </ReduxProvider>
    );
};

export default Provider;