import {renderHook, act} from '@testing-library/react-hooks';
import {Store} from './Store';
import React from 'react';

const Wrapper: React.FC = ({children}) => (
  <Store.Provider>
    {children}
  </Store.Provider>
);

describe('Store', () => {
  test('setUser', () => {
    const {result} = renderHook(() => Store.useContainer(), {
      wrapper: Wrapper
    })
    expect(result.current.user).toMatchInlineSnapshot(`undefined`)
    act(() => {
      result.current.setUser('user1');
    })
    expect(result.current.user).toMatchInlineSnapshot(`"user1"`)
  })
})
