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
  const story = writMdJson.metadata.find(({ key }) => key === '0110');
  let genres: string[] = [];
  if (story) {
    genres = story.genres;
  }
  const props: StoryProps = {
    author: 'Washington Irving',
    content: `#### Ou Sont De les Niegedens d&#x27;Antan

What does a beautiful thing look like when all the people are gone? When there&#x27;s no one to cast a glance at it wistfully, or sing along to it; When the Mona Lisa has all but returned to the ground that bore it forth, now agnostic to the crumbled litters before it that resemble so closely trash. Unrecognizable. Who will sit there on the precipice of all that an indifferent and nonsensical universe has to offer, peering at it eyes squinted through a Samsung Galaxy, and miss it ever so fucking slightly?

Where are all the Snowdens of yesteryear?

---

The Rocky Mountains actually span all the way up through Canada, into the Alaskan countryside, if you include the Brooks Range. Some people do. 3000 some odd miles that race forth from the ground with virulent intent to skinrip through the sky, but spoiler alert; they don&#x27;t. The sides of the Mountain, lined row after row ceaselessly, marauding of Evergreen trees spanning slopes, unearthly wielding contortions that arch sideways-upward. Then there comes a level of desolation, the zone where nothing grows, where no Evergreens litter the slopeside and the palette becomes one of bluegray and stark contrasting redgold. And then once in a while, in a purgatory above the mountains, a fucking Evergreen pokes through the bluegray and redgold adornment in ephemeral indignance of mankind&#x27;s arrogance, to believe it knows anything about fucking anything.

---

&quot;Yeah, no I&#x27;ll go next. I&#x27;ve got some great ones.&quot;, There was a sadness in Neuman&#x27;s voice that hung resolute but restrained, and tapered by something altogether nostalgic. All beauty is a fragment of nostalgia, one supposes. &quot;I mean, I was actually there when he died, er um passed.&quot; He paused. &quot;He was actually super peaceful, which isn&#x27;t the craziest thing because he had taken a dab the size of a newborn calf only moments earlier. But a minute or so before falling asleep, he, with his eyes closed had, in that stupid god awful fucking french he did, spoke this, &#x27;Ounh sount les Niegedens danton&#x27;. And I had just no fucking clue what it meant. I honestly thought it was gibberish. e`,
    description: 'This story is for the lovers, the dreamers, and me.',
    genres,
    imgAlt: 'This story is for the lovers, the dreamers, and me.',
    imgSrc: 'Kermit the Frog, playing &#x27;The Rainbow Connection;&#x27;',
    title: 'The Rainbow Connection'
  };
  hydrateRoot(mountingEl, <StoryPage {...props} />);
}

mount();