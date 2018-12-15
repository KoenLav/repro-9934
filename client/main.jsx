import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'

if (process.env.NODE_ENV !== 'production') {
  import { whyDidYouUpdate } from 'why-did-you-update';

  whyDidYouUpdate(React);
}

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
