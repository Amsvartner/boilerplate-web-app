import { useEffect } from 'react';
import { Callback, CallbackAsync } from '../type/Callback';

export const useOnMount = (callback: Callback | CallbackAsync, cleanup?: Callback): void => {
  useEffect(() => {
    (async (): Promise<void> => await callback())();
    return (): void => cleanup && cleanup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
