// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.

import { DOCUMENT_ROOT_ID } from '@/config/client';
import React from 'react';
import { StoryPage } from '@/pages';
import { type StoryProps } from '@/components';
import { hydrateRoot } from 'react-dom/client';
import writMdJson from '@/contexts/data/writ.json';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  const story = writMdJson.metadata.find(({ key }) => key === '0106');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: `#### An Elixir for Apathy

Well, there it was. In plain sight and sound, it was uttered at the last booth on the left hand side of the Lark&#x27;s Pond Diner. 61 year old Wayne Gerbisch said it.

You could say a lot in America. You could say faggot. You could say nigger. You could say dyke, cunt, sand-nigger, curry-chimp, gook, slant, slope, fucking whop, spic, mick. You could say all that, and you&#x27;d offend some people, and others, others would run to your rescue. 

Not one person at the 7 person table ran to the rescue of Wayne Gerbisch.

&quot;What do you mean to say you&#x27;ve never voted?&quot;

&quot;Well, I mean that in my life, as an American, I&#x27;ve never gone and waited in line and cast a vote.&quot;

&quot;Wayne, you can&#x27;t say that. I dont, I dont remotely understand. You fought.. in war. And you never voted?&quot;

&quot;`,
    description: 'The syndicate grows, and everyone gets a share.',
    genres,
    imgAlt: 'The syndicate grows, and everyone gets a share.',
    imgSrc: 'https://www.chicitysports.com/wp-content/uploads/2020/07/the_simpsons_couch_a_l.0.jpg',
    title: 'Milo, Il Mayore'
  };
  hydrateRoot(mountingEl, <StoryPage {...props} />);
}

mount();