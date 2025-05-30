'use client';

import { increment } from "@/lib/store/features/counter/counterSlice";
import { AppStore, makeStore } from "@/lib/store/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: ReactNode }) => {
     const storeRef = useRef<AppStore>(undefined);
     if (!storeRef.current) {
       // Create the store instance the first time this renders
         storeRef.current = makeStore();
         //add initial state
         storeRef.current.dispatch(increment(3))
     }

    return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider;