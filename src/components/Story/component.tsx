import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { combine } from '@/utils';
import { useTranslation } from '@/contexts';
import { StoryProps } from './types';
import { withErrorWrapper, withProfiler } from '@/hocs';

function StoryComponent({ title }: StoryProps) {
    const { t } = useTranslation();
    return (
        <div className="story__wrapper">
        {/*Micro Subscribe Banner */}
            <div className="story__micro-banner">
                <p>
                    {t('story_micro_banner_text')}
                </p>
                <button className='button-small ml-5'>
                    {t('story_micro_banner_subscribe_now')}
                </button>
                <button className='button-small ml-5'>
                    {t('story_micro_banner_dismiss')}
                </button>
            </div>
        {/** Title */}
            <div className="story_title-container">
                <h1>
                    {title}
                </h1>
            </div>
        {/** Story Metadata */}
            <div className="story_sub-container">
                
            </div>
        {/** Views, Comments, Shares, Likes, Bookmark */}
        {/** Full Screen Image */}
        {/** Story */}
        </div>
    );
};

export const Story = combine<StoryProps>(
    [withErrorWrapper, withProfiler],
    memo(StoryComponent),
    'story-component'
);
