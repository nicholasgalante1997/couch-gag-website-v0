// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT.

import { DOCUMENT_ROOT_ID } from '@/config/client';
import React from 'react';
import { StoryPage } from '@/pages';
import { type StoryProps } from '@/components';
import { hydrateRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import writMdJson from '@/contexts/data/writ.json';

function mount(): void {
  let mountingEl = document.getElementById(DOCUMENT_ROOT_ID);
  if (mountingEl == null) {
    mountingEl = document.createElement('div');
    mountingEl.id = DOCUMENT_ROOT_ID;
    document.body.appendChild(mountingEl);
  }
  const story = writMdJson.metadata.find(({ key }) => key === '0202');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: `#### Good Will Hunted

&quot;And so, Robin Williams, as I stood there in my kitchen, shoveling spoonfuls of fruity pebbles into my mouth over the counter, It threw itself at me.&quot;, Teddy.

&quot;I&#x27;ve asked you almost a dozen times to stop calling me Robin Williams.&quot;, Robin Williams.

&quot;My wife is dead chief.&quot;, Teddy murmured robotically under his breath, barely audible.

&quot;What threw itself at you?&quot; Robin redirected.

&quot;Well, I saw the steak knife, then I saw the other steak knife, sharper yet, and then I saw &#x27;Being and Time&#x27; and I was like, I don&#x27;t know, maybe infatuated with the opportunity.&quot;

&quot;The opportunity for wh-&quot; He already knew, but he wanted Teddy to say It.

&quot;The opportunity to shiv one or both of those steak knives in my neck and bleed out in my kitchen all over &#x27;Being and Time&#x27;.&quot;

&quot;Hmmm.&quot;

&quot;Okay so, I&#x27;m sensing apprehension. Give me a moment. I thought, &#x27;That would be fucking hysterical. To like run out of time and stop being, all over Being and Time.&quot; 

&quot;I don&#x27;t think it&#x27;s that funny, It&#x27;s not even really sensible.&quot; Robin furrowed his brow, saddened. Teddy furrowed his brow, aggravated. &quot;Do you like that book? Do you agree with Heidegger?&quot;

&quot;You know I wouldn&#x27;t know. I haven&#x27;t read it. I just had it there on the counter. Saw the shiv- er knives. And presto. Here we are, 4 months later.&quot; 

&quot;Uh-huh. And where are we Teddy?&quot;`,
    description: 'A psychotherapist and his patient debate a fantasy that&#x27;s emerged since the great gag.',
    genres,
    imgAlt: 'A psychotherapist and his patient debate a fantasy that&#x27;s emerged since the great gag.',
    imgSrc: 'SusanSarandon',
    title: 'Being and Time'
  };
  hydrateRoot(
    mountingEl,
      <StoryPage {...props} />
  );
}

if (process.env.NODE_ENV === 'production') {
  inject({ mode: 'production' });
}

mount();
  
