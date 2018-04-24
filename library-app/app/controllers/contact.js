import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Send us a message',
  responseMessage: '',
  message: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),

  isValidMessage: gte('message.length', 5),
  isBothTrue: and('isValidEmail', 'isValidMessage'),
  isDisabled: not('isBothTrue'),

  actions: {

    sendMessage() {
      alert(`Sending message in progress progress.`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
    }
  }

});
