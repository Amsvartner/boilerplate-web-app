import { renderHook } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import { useOnMount } from '../useOnMount';

describe('useOnMount', () => {
  it('calls callback only once on mount', async () => {
    const callback = vi.fn();

    renderHook(() => useOnMount(callback));

    expect(callback).toHaveBeenCalled();
  });

  it('does not call callback on rerender', () => {
    const callback = vi.fn();

    const { rerender } = renderHook(() => useOnMount(callback));

    expect(callback).toHaveBeenCalled();

    rerender();

    expect(callback).toHaveBeenCalled();
  });

  it('cleans up after hook is unmounted', () => {
    const callback = vi.fn();
    const cleanup = vi.fn();

    const { unmount } = renderHook(() => useOnMount(callback, cleanup));

    unmount();

    expect(callback).toHaveBeenCalled();
    expect(cleanup).toHaveBeenCalled();
  });

  it('does not call cleanup function if not unmounted', () => {
    const callback = vi.fn();
    const cleanup = vi.fn();

    renderHook(() => useOnMount(callback, cleanup));

    expect(callback).toHaveBeenCalled();
    expect(cleanup).not.toHaveBeenCalled();
  });
});
