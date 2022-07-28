import {useCallback, useEffect} from "react";
import {useFocusEffect} from "@react-navigation/native";

export const useMount = (callback,deps = []) => {
    useEffect(() => {
        callback && callback();
    },deps)
};
export const useUnmount = (callback,deps = []) => {
    useEffect(() => {
        return () => {
            callback && callback();
        }
    },deps)
}

export const useFocus =(callback,deps = []) => useFocusEffect(
    useCallback(() => {
        callback && callback();
    }, deps),
);

export const useBlur = (callback,deps = []) => useFocusEffect(
    useCallback(() => {
     return () => {
         callback && callback();
     }
    },deps)
)
