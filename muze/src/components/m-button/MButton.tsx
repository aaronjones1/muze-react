import React from 'react';

export interface MButtonProps {
  text: string;
}

export default function MButton(props: MButtonProps) {
  const boxShadow = {
    boxShadow: `-8px 8px 24px #b4b4b4,
                8px -8px 24px #f4f4f4`,
  };

  return (
    <button className='rounded-lg px-8 py-2 bg-neutral-300' style={boxShadow}>
      {props.text}
    </button>
  );
}
