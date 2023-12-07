import {
    reactive,
    ref,
    type Ref,
    type UnwrapNestedRefs,
    type UnwrapRef,
} from 'vue';

// LED === loading + error + data
export function useLED<D extends object>(
    baseloader: (data: Ref<UnwrapRef<D>>) => Promise<void>,
    defaultData?: Partial<D>,
): {
    data: Ref<UnwrapRef<D>>;
    loading: Ref<boolean>;
    error: Ref<string | null>;
    loader: (data: Ref<UnwrapRef<D>>) => Promise<void>;
} {
    const loading = ref(false);
    const error = ref<string | null>(null);
    const data = ref((defaultData ?? {}) as D);
    const loader = async (data: Ref<UnwrapRef<D>>) => {
        loading.value = true;
        try {
            await baseloader(data);
        } catch (e: any) {
            error.value = e.toString();
        } finally {
            loading.value = false;
        }
    };
    return {
        data,
        loading,
        error,
        loader,
    };
}
