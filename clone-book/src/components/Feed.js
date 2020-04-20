import React from "react";
import FeedItem from "./FeedItem";

const masterFeedList = [
  {
    name: 'Bill Hicks',
    posting: 'Why is marijuana against the law—It grows naturally upon our planet. Doesn’t the idea of making nature against the law seem to you a bit…unnatural?'
  },
  {
    name: 'Kevin Smith',
    posting: 'I know you’re supposed to tell kids not to do drugs, but, kids, do it! Do weed! Don’t do the other stuff, but weed is good!'
  },
  {
    name: 'Andy Warhol',
    posting: 'I think pot should be legal. I don’t smoke it, but I like the smell of it.'
  },
  {
    name: 'Barack Hussein Obama',
    posting: 'When I was a kid I inhaled frequently. That was the point.'
  }
]

function Feed(){
  return (
    <React.Fragment>
      {masterFeedList.map((feeditem, index) => <FeedItem name={feeditem.name}
          posting={feeditem.posting}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default Feed;