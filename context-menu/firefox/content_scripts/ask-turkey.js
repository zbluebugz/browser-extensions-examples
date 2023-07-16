/* Does Sir Gobbles-a-lot like this page? */

// -- we want a different message each time the menu-context is triggered, 
// -- so use a function and call it ..
// -- otherwise the browser will complain about redeclaring some variables.
function whatDoesTheTurkeyThinkOfThisPage() {

    const TURKEY_NAME = 'Sir Gobbles-a-lot';

    // -- Yes and No phrases.
    const TURKEY_PHRASES = [
        'Well, it turns out turkeys have a taste for literature! This feathered connoisseur couldn\'t resist gobbling up a page and surprisingly found it quite the delectable read. Talk about having a novel appetite!',
        'Well, let\'s just say that turkey might have some literary beef with that page. It might start squawking in dismay, feathers ruffled, and declare, "This tastes fowl! I\'d rather stick to my regular diet of corn and worms, thank you very much!" Guess not every turkey is a bookworm!'
    ];
    
    // -- which phrase to output?
    const TURKEY_REVIEW = TURKEY_PHRASES[Math.floor(Math.random() * TURKEY_PHRASES.length)];

    // -- let the turkey eat this page ...
    document.body.textContent = "";

    // -- let the turkey burp something ..
    let elBody = document.body;
    let el = document.createElement('p');
    el.setAttribute('style', 'margin:1rem; font-size:2rem;line-height:1.2;');
    el.innerHTML = `${TURKEY_REVIEW}<br><br>- <span style="font-style:italic">${TURKEY_NAME}</span>`;
    elBody.appendChild(el);
    // -- <element>.style doesn't always work, so use <element>.setAttribute() isnstead.
    elBody.setAttribute('style', 'background-color: lightyellow !important');

    console.info(TURKEY_NAME + ': ' + TURKEY_REVIEW);
}
whatDoesTheTurkeyThinkOfThisPage();
