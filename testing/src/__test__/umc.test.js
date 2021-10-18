import { renderHook, act } from '@testing-library/react-hooks'
import { useMouseCoords } from '../hooks/useMouseCoords';

test('should start at 0, 0', () => {
  const { result } = renderHook(() => useMouseCoords())
  expect(typeof result.current).toBe('object')
  expect(result.current.x).toBe(0);
  expect(result.current.y).toBe(0);
})