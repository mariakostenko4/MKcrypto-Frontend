import {useState} from 'react';
import React from 'react';



export default function CopyButton({text}) {

  const [copied, setCopied] = useState(false);

  async function copyText(event) {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
     console.error(err);
    }
  }

  return (
    <button className="input-group-text" onClick={copyText}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );

}