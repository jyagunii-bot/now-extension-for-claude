// Now Extension for Claude
// Automatically injects the current local timestamp into Claude.ai messages.

(() => {
  'use strict';

  const MARKER = '🕐';
  let enabled = true;

  // Load preferences
  chrome.storage.local.get(['enabled'], (result) => {
    enabled = result.enabled !== false;
  });

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.enabled) {
      enabled = changes.enabled.newValue !== false;
    }
  });

  // Format the current time using the browser's locale and timezone
  function now() {
    const formatter = new Intl.DateTimeFormat(navigator.language || 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      weekday: 'short'
    });
    return formatter.format(new Date());
  }

  // Locate Claude's message editor (ProseMirror contenteditable)
  function findEditor() {
    return (
      document.querySelector('div[contenteditable="true"].ProseMirror') ||
      document.querySelector('div[contenteditable="true"]')
    );
  }

  // Locate the send button
  function findSendButton() {
    return (
      document.querySelector('button[aria-label="Send message"]') ||
      document.querySelector('button[aria-label*="Send"]') ||
      document.querySelector('button[aria-label*="送信"]') ||
      document.querySelector('button[data-testid="send-button"]')
    );
  }

  // Check whether the current message already contains a timestamp
  function alreadyInjected(text) {
    return text.includes(MARKER);
  }

  // Insert the timestamp at the beginning of the editor
  function injectTimestamp(editor) {
    if (!editor) return false;
    const currentText = editor.innerText || '';
    if (!currentText.trim()) return false;
    if (alreadyInjected(currentText)) return false;

    const prefix = `${MARKER} ${now()}\n\n`;

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('insertText', false, prefix);
    return true;
  }

  // Capture Enter key (without Shift, not during IME composition)
  document.addEventListener(
    'keydown',
    (event) => {
      if (!enabled) return;
      if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;

      const editor = findEditor();
      if (!editor) return;
      if (!editor.contains(event.target) && event.target !== editor) return;

      injectTimestamp(editor);
    },
    true
  );

  // Capture send button clicks
  document.addEventListener(
    'click',
    (event) => {
      if (!enabled) return;
      const button = event.target.closest('button');
      if (!button) return;

      const sendButton = findSendButton();
      if (button !== sendButton) return;

      const editor = findEditor();
      injectTimestamp(editor);
    },
    true
  );

  console.log('[Now Extension] loaded');
})();