import React, { memo } from 'react';
import { I18NProvider } from '@/contexts';
import { useOnMount } from '@/hooks';
import { logger } from '@/utils';
import { withProfiler } from '@/hocs';
import { Aside } from '@/components/Aside';

function PageComponent({ children, id }: { children: React.ReactNode; id: string }) {
  useOnMount(() => logger.info(`Component ${id} mounted.`));
  return (
    <I18NProvider>
      <div className="couch-page">
        <Aside />
        <div className="couch-page-main">{children}</div>
      </div>
    </I18NProvider>
  );
}

export const Root = withProfiler('PageWrapper', memo(PageComponent));
