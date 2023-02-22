const SEND_MESSAGE_BACK = 'WEB_CHAT/SEND_MESSAGE_BACK';

export default function sendMessageback(value, text, displayText, replyToId = undefined) {
  return {
    type: SEND_MESSAGE_BACK,
    payload: { displayText, text, value, replyToId }
  };
}

export { SEND_MESSAGE_BACK };
