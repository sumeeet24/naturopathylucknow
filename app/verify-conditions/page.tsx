import React from 'react';

export default function VerifyConditions() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Verification Page</h1>
      <ul>
        <li><a href='/conditions/cancer'>Cancer</a></li>
        <li><a href='/conditions/childless-couple-infertility'>Infertility</a></li>
        <li><a href='/conditions/sexual-health'>Sexual Health</a></li>
        <li><a href='/conditions/autism'>Autism</a></li>
        <li><a href='/conditions/alzheimers-dementia'>Alzheimers</a></li>
        <li><a href='/conditions/fatty-liver-cirrhosis'>Fatty Liver</a></li>
        <li><a href='/conditions/chronic-eye-problems'>Eye Problems</a></li>
      </ul>
    </div>
  );
};
