import React from 'react';
import { ErrorWrapper } from '@/components/ErrorBoundary';

export interface ErrorBoundaryProps {
  id: string
  fallback: JSX.Element
}

export function withErrorWrapper<P = {} & JSX.IntrinsicAttributes & ErrorBoundaryProps> (
  id: string,
  Component: React.FC<P>
): React.FC<P> {
  // eslint-disable-next-line react/display-name
  return function (props: P) {
    return (
      <ErrorWrapper id={id} fallback={(props as P & JSX.IntrinsicAttributes & ErrorBoundaryProps).fallback}>
        <Component {...(props as P & JSX.IntrinsicAttributes)} />
      </ErrorWrapper>
    );
  };
}
