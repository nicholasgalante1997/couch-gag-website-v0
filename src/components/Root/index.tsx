import { I18NProvider, ShelfContextProvider, WritProvider } from '@/contexts';
import React, { memo } from 'react';
import { Aside } from '@/components/Aside';
import { withProfiler } from '@/hocs';

function PageComponent({ children, id }: { children: React.ReactNode, id: string }): React.JSX.Element {
  return (
    <I18NProvider>
      <WritProvider>
        <ShelfContextProvider>
          <div id={id} className="couch-page">
            <Aside />
            <div className="couch-page-main">{children}</div>
          </div>
        </ShelfContextProvider>
      </WritProvider>
    </I18NProvider>
  );
}

export const Root = withProfiler('PageWrapper', memo(PageComponent));
