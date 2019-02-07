import React from 'react';
import Stories from './stories';

export default function main(props) {
  return (
    <main>
      <Stories stories={props.stories} />
    </main>
  );
}