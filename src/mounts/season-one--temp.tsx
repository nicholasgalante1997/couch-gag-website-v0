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
  const story = writMdJson.metadata.find(({ key }) => key === '0108');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: `#### Now you see me

&quot;I don&#x27;t really know if its a great idea to go dressed as a magician. They&#x27;ll hold you in contempt, and you&#x27;ll like, go to jail.&quot;, Sam.

&quot;Well, first of all, I am in contempt of court. That&#x27;s what this will hopefully be all about. And B), its a fucking meager sum of 2,000 USD. Like this is a fucking phenomenal idea. Also, it&#x27;s going to look really fucking stupid if I&#x27;m wearing a 6000$ suit, and pulling a rabbit out of a hat.&quot;, Rohan.

&quot;I don&#x27;t see a way to win doing this though. Like, you&#x27;re going to end up definitively having to pay the 2k, and then on top of that, you&#x27;re practically begging for something worse in that you&#x27;re waving a red flag in front of history&#x27;s most temperamental bull.&quot;, Sam.

&quot;I do not care.&quot;, Rohan.

&quot;I mean, I just feel like there are better things to spend 2,000 dollars on. Like cocaine, or barnes and noble&#x27;s.&quot;, Larissa

&quot;I mean, of course you do. But, obviously I don&#x27;t. It&#x27;s like-&quot;, Rohan. He was cut off.

&quot;It&#x27;s like you&#x27;re spending the money on a pulpit... and a captive 20 person audience. One that means nothing.&quot;

&quot;It&#x27;s like,&quot; Rohan began sterner, &quot;



`,
    description:
      'There is finally a punchline offered to a worldly and dragging joke; The American Judicial System',
    genres: genres,
    imgAlt:
      'There is finally a punchline offered to a worldly and dragging joke; The American Judicial System',
    imgSrc:
      'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NpbXBzb25zLW9yaWcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0&#x3D;',
    title: 'The Greatest Mistrial The World Had Ever Seen'
  };
  hydrateRoot(mountingEl, <StoryPage {...props} />);
}

mount();
